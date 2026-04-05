import { buildLocationSlug, matchesRegion, parseLocationInput } from '@/lib/location';

function getForecastWindowLabel(daysAhead) {
  if (daysAhead === 0) {
    return 'this morning';
  }

  if (daysAhead === 1) {
    return 'tomorrow morning';
  }

  if (daysAhead === 2) {
    return 'the following morning';
  }

  return 'the next school morning';
}

function getRiskLevel(probability) {
  if (probability >= 75) {
    return 'High';
  }

  if (probability >= 40) {
    return 'Moderate';
  }

  if (probability >= 15) {
    return 'Watch';
  }

  return 'Low';
}

function getConfidenceLabel(probability, daysAhead) {
  if (daysAhead >= 2) {
    return 'Early look';
  }

  if (daysAhead === 1) {
    return probability >= 55 ? 'Moderate confidence' : 'Developing forecast';
  }

  if (probability >= 35) {
    return 'Higher confidence';
  }

  if (probability >= 15) {
    return 'Moderate confidence';
  }

  return 'Near-term look';
}

function getDatePart(value) {
  return value.split('T')[0];
}

function getHourPart(value) {
  return Number(value.split('T')[1]?.slice(0, 2) || 0);
}

function getDayDifference(dateString, baseDateString) {
  return Math.round(
    (Date.parse(`${dateString}T00:00:00Z`) - Date.parse(`${baseDateString}T00:00:00Z`)) / 86400000
  );
}

function sumNumbers(values) {
  return values.reduce((total, value) => total + value, 0);
}

function maxNumber(values, fallback = 0) {
  return values.length ? Math.max(...values) : fallback;
}

function minNumber(values, fallback = 0) {
  return values.length ? Math.min(...values) : fallback;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function formatDatePart(dateString) {
  const [year, month, day] = dateString.split('-').map(Number);

  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

function formatTimestamp(value, timeZone) {
  try {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      timeZone,
    }).format(value);
  } catch {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
    }).format(value);
  }
}

function celsiusToFahrenheit(value) {
  return value * 9 / 5 + 32;
}

function kilometersToMiles(value) {
  return value * 0.621371;
}

function centimetersToInches(value) {
  return value * 0.393701;
}

function buildForecastWindows(hourlyData) {
  const times = hourlyData.time || [];

  if (times.length === 0) {
    return [];
  }

  const currentDate = getDatePart(times[0]);
  const currentHour = getHourPart(times[0]);
  const uniqueDates = [...new Set(times.map(getDatePart))];

  return uniqueDates
    .map((date) => {
      const daysAhead = getDayDifference(date, currentDate);

      if (daysAhead < 0 || (daysAhead === 0 && currentHour >= 10)) {
        return null;
      }

      const overnightIndices = [];
      const schoolIndices = [];

      times.forEach((time, index) => {
        if (getDatePart(time) !== date) {
          return;
        }

        const hour = getHourPart(time);

        if (hour <= 10) {
          overnightIndices.push(index);
        }

        if (hour >= 4 && hour <= 10) {
          schoolIndices.push(index);
        }
      });

      if (schoolIndices.length === 0) {
        return null;
      }

      const overnightSnowCm = sumNumbers(overnightIndices.map((index) => hourlyData.snowfall?.[index] || 0));
      const schoolSnowCm = sumNumbers(schoolIndices.map((index) => hourlyData.snowfall?.[index] || 0));
      const minTempC = minNumber(schoolIndices.map((index) => hourlyData.temperature_2m?.[index]).filter((value) => value !== undefined), 10);
      const maxWindKmh = maxNumber(schoolIndices.map((index) => hourlyData.wind_speed_10m?.[index] || 0));
      const maxPrecipitationProbability = maxNumber(overnightIndices.map((index) => hourlyData.precipitation_probability?.[index] ?? 0));
      const hoursWithSnow = schoolIndices.filter((index) => (hourlyData.snowfall?.[index] || 0) >= 0.05).length;

      const overnightSnowIn = centimetersToInches(overnightSnowCm);
      const schoolSnowIn = centimetersToInches(schoolSnowCm);
      const minTempF = celsiusToFahrenheit(minTempC);
      const maxWindMph = kilometersToMiles(maxWindKmh);

      let score = schoolSnowIn * 16 + overnightSnowIn * 6 + hoursWithSnow * 1.5;

      if (minTempF <= 10) {
        score += 16;
      } else if (minTempF <= 20) {
        score += 10;
      } else if (minTempF <= 28) {
        score += 6;
      } else if (minTempF <= 32) {
        score += 2;
      }

      if (maxWindMph >= 35) {
        score += 12;
      } else if (maxWindMph >= 25) {
        score += 8;
      } else if (maxWindMph >= 18) {
        score += 4;
      }

      if (maxPrecipitationProbability >= 85) {
        score += 7;
      } else if (maxPrecipitationProbability >= 65) {
        score += 4;
      } else if (maxPrecipitationProbability >= 45) {
        score += 2;
      }

      if (schoolSnowIn >= 1.5 && maxWindMph >= 25) {
        score += 8;
      }

      if (overnightSnowIn >= 4) {
        score += 10;
      } else if (overnightSnowIn >= 2) {
        score += 5;
      }

      if (minTempF <= 0 && overnightSnowIn >= 0.5) {
        score += 6;
      }

      return {
        daysAhead,
        date,
        score: clamp(score, 0, 99),
        overnightSnowIn,
        schoolSnowIn,
        minTempF,
        maxWindMph,
        maxPrecipitationProbability,
      };
    })
    .filter(Boolean);
}

function getPrimaryDrivers({ overnightSnowIn, schoolSnowIn, tempFloat, windFloat, precipitationProbability }) {
  const drivers = [];

  if (schoolSnowIn >= 3) {
    drivers.push('heavy snow during the school-morning window');
  } else if (schoolSnowIn >= 1) {
    drivers.push('accumulating snow around commute time');
  } else if (overnightSnowIn >= 1) {
    drivers.push('overnight snowfall before routes begin');
  } else if (overnightSnowIn > 0.1) {
    drivers.push('a light snow signal that could still leave slick roads');
  }

  if (tempFloat <= 12) {
    drivers.push('very cold morning temperatures');
  } else if (tempFloat <= 28) {
    drivers.push('freezing conditions that support icy roads');
  }

  if (windFloat >= 35) {
    drivers.push('strong gusts that can reduce visibility');
  } else if (windFloat >= 22) {
    drivers.push('moderate wind that can reduce visibility');
  }

  if (precipitationProbability >= 75 && overnightSnowIn < 0.5) {
    drivers.push('a higher chance of fresh precipitation before school');
  }

  if (drivers.length === 0) {
    drivers.push('limited disruption signals in the latest school-morning forecast');
  }

  return drivers.slice(0, 3);
}

function buildPlanningChecklist({ probability, overnightSnowIn, schoolSnowIn, tempFloat, windFloat }) {
  const checklist = [];

  if (schoolSnowIn >= 1) {
    checklist.push(`Watch pickup and drop-off timing closely if about ${schoolSnowIn.toFixed(1)} inches of snow is still falling during the school-morning window.`);
  } else if (overnightSnowIn >= 1) {
    checklist.push(`Expect slick roads early if about ${overnightSnowIn.toFixed(1)} inches of snow lands before buses and commuter traffic get moving.`);
  }

  if (tempFloat <= 20) {
    checklist.push('Plan for untreated side streets, icy parking lots, and slower bus routes during the coldest part of the morning.');
  }

  if (windFloat >= 25) {
    checklist.push('Give extra time for drifting snow and visibility swings on open roads if the wind stays elevated.');
  }

  if (probability >= 50) {
    checklist.push('Have a backup morning plan ready in case the district sends an update close to sunrise.');
  } else {
    checklist.push('Use this as an early planning signal and recheck district alerts before the final morning decision window.');
  }

  return checklist.slice(0, 3);
}

export async function getSnowDayData(zipCode) {
  try {
    const search = parseLocationInput(zipCode);

    if (!search.query) {
      return { error: "Enter a ZIP code or city to get a forecast." };
    }

    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(search.query)}&count=20&language=en&format=json`,
      { next: { revalidate: 86400 } }
    );

    if (!geoRes.ok) {
      return { error: "Location lookup is temporarily unavailable." };
    }

    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      return { error: `Could not find that location (${search.displayLabel || search.original}). Please try another ZIP code or city.` };
    }

    let validLocations = geoData.results.filter((result) => result.country_code === 'US' || result.country_code === 'CA');

    if (search.stateName || search.stateCode) {
      validLocations = validLocations.filter((result) => matchesRegion(result, search.stateName, search.stateCode));
    }

    if (validLocations.length === 0) {
      return { error: `Could not find that location (${search.displayLabel || search.original}). Please try another ZIP code or city.` };
    }

    const location = validLocations[0];
    const { latitude, longitude, name, admin1 } = location;
    const locationName = `${name}${admin1 ? `, ${admin1}` : ''}`;

    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=snowfall,temperature_2m,wind_speed_10m,precipitation_probability&timezone=auto&forecast_days=3`,
      { next: { revalidate: 3600 } }
    );
    
    if (!weatherRes.ok) {
      return { error: "Weather service is temporarily unavailable." };
    }
    
    const weatherData = await weatherRes.json();
    
    if (!weatherData || !weatherData.hourly) {
      return { error: "Unexpected data received from weather service." };
    }

    const forecastWindows = buildForecastWindows(weatherData.hourly);

    if (forecastWindows.length === 0) {
      return { error: "There was not enough forecast data to build a school-morning estimate." };
    }

    const targetWindow = [...forecastWindows].sort((left, right) => right.score - left.score || left.daysAhead - right.daysAhead)[0];
    const forecastWindow = getForecastWindowLabel(targetWindow.daysAhead);
    const snowfallInches = targetWindow.overnightSnowIn.toFixed(1);
    const morningSnowfallInches = targetWindow.schoolSnowIn.toFixed(1);
    const minTempF = targetWindow.minTempF.toFixed(1);
    const windMph = targetWindow.maxWindMph.toFixed(1);

    const roundedProbability = Math.round(targetWindow.score);
    const tempFloat = parseFloat(minTempF);
    const windFloat = parseFloat(windMph);
    const forecastDate = formatDatePart(targetWindow.date);
    const updatedAt = formatTimestamp(new Date(), weatherData.timezone);
    const primaryDrivers = getPrimaryDrivers({
      overnightSnowIn: targetWindow.overnightSnowIn,
      schoolSnowIn: targetWindow.schoolSnowIn,
      tempFloat,
      windFloat,
      precipitationProbability: targetWindow.maxPrecipitationProbability,
    });
    const planningChecklist = buildPlanningChecklist({
      probability: roundedProbability,
      overnightSnowIn: targetWindow.overnightSnowIn,
      schoolSnowIn: targetWindow.schoolSnowIn,
      tempFloat,
      windFloat,
    });
    const riskLevel = getRiskLevel(roundedProbability);
    const confidence = getConfidenceLabel(roundedProbability, targetWindow.daysAhead);
    const summary = `${locationName} is showing a ${roundedProbability}% forecast-based snow day estimate for ${forecastWindow} because the latest forecast points to ${primaryDrivers.join(', ')}.`;

    return {
      success: true,
      data: {
        probability: roundedProbability,
        location: locationName,
        snowfall: snowfallInches,
        morningSnowfall: morningSnowfallInches,
        temperature: minTempF,
        wind: windMph,
        forecastWindow,
        forecastDate,
        updatedAt,
        riskLevel,
        confidence,
        primaryDrivers,
        planningChecklist,
        summary,
        slug: buildLocationSlug(name, admin1),
        methodologyNotes: [
          'The estimate focuses on the next school-morning window and nearby overnight conditions.',
          'Snowfall, temperature, wind, and precipitation timing are weighted together to estimate disruption risk.',
          'The score reflects forecast conditions, not an official school district announcement.',
          'Forecast data is refreshed regularly, so the estimate can move when the weather changes.'
        ]
      }
    };
  } catch (err) {
    return { error: "Weather data could not be loaded right now. Please try again in a moment." };
  }
}
