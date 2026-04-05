export const stateCodeMap = {
  "alabama": "al", "alaska": "ak", "arizona": "az", "arkansas": "ar", "california": "ca", "colorado": "co", "connecticut": "ct", "delaware": "de", "florida": "fl", "georgia": "ga", "hawaii": "hi", "idaho": "id", "illinois": "il", "indiana": "in", "iowa": "ia", "kansas": "ks", "kentucky": "ky", "louisiana": "la", "maine": "me", "maryland": "md", "massachusetts": "ma", "michigan": "mi", "minnesota": "mn", "mississippi": "ms", "missouri": "mo", "montana": "mt", "nebraska": "ne", "nevada": "nv", "new hampshire": "nh", "new jersey": "nj", "new mexico": "nm", "new york": "ny", "north carolina": "nc", "north dakota": "nd", "ohio": "oh", "oklahoma": "ok", "oregon": "or", "pennsylvania": "pa", "rhode island": "ri", "south carolina": "sc", "south dakota": "sd", "tennessee": "tn", "texas": "tx", "utah": "ut", "vermont": "vt", "virginia": "va", "washington": "wa", "west virginia": "wv", "wisconsin": "wi", "wyoming": "wy",
  "alberta": "ab", "british columbia": "bc", "manitoba": "mb", "new brunswick": "nb", "newfoundland and labrador": "nl", "nova scotia": "ns", "ontario": "on", "prince edward island": "pe", "quebec": "qc", "saskatchewan": "sk", "northwest territories": "nt", "nunavut": "nu", "yukon": "yt"
};

export const codeToStateMap = Object.fromEntries(
  Object.entries(stateCodeMap).map(([stateName, stateCode]) => [stateCode, stateName])
);

function normalizeWhitespace(value) {
  return value.replace(/\s+/g, ' ').trim();
}

function normalizeRegionValue(value) {
  return normalizeWhitespace(value.toLowerCase().replace(/\./g, ' '));
}

function findStateMatch(value) {
  const normalizedValue = normalizeRegionValue(value);

  if (!normalizedValue) {
    return null;
  }

  if (stateCodeMap[normalizedValue]) {
    return {
      stateName: normalizedValue,
      stateCode: stateCodeMap[normalizedValue],
    };
  }

  if (codeToStateMap[normalizedValue]) {
    return {
      stateName: codeToStateMap[normalizedValue],
      stateCode: normalizedValue,
    };
  }

  return null;
}

function findStateSuffix(tokens) {
  const maxLength = Math.min(4, tokens.length - 1);

  for (let length = maxLength; length >= 1; length -= 1) {
    const candidate = tokens.slice(-length).join(' ');
    const match = findStateMatch(candidate);

    if (match) {
      return {
        ...match,
        length,
      };
    }
  }

  return null;
}

function isPostalCode(value) {
  return /^\d{5}(?:-\d{4})?$/i.test(value) || /^[a-z]\d[a-z][ -]?\d[a-z]\d$/i.test(value);
}

function titleCase(value) {
  return value
    .split(' ')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

export function slugifyLocationPart(value) {
  return normalizeWhitespace(value)
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

export function buildLocationSlug(name, admin1) {
  const citySlug = slugifyLocationPart(name);
  const stateMatch = findStateMatch(admin1 || '');

  if (!stateMatch?.stateCode) {
    return citySlug;
  }

  return `${citySlug}-${stateMatch.stateCode}`;
}

export function matchesRegion(location, stateName, stateCode) {
  if (!stateName && !stateCode) {
    return true;
  }

  const locationRegion = findStateMatch(location.admin1 || '');

  if (!locationRegion) {
    return false;
  }

  return locationRegion.stateName === stateName || locationRegion.stateCode === stateCode;
}

export function parseLocationInput(rawValue) {
  const decodedValue = decodeURIComponent(String(rawValue || '')).replace(/\+/g, ' ');
  const compactInput = normalizeWhitespace(decodedValue);

  if (!compactInput) {
    return {
      original: '',
      query: '',
      cityName: '',
      stateName: null,
      stateCode: null,
      fallbackSlug: '',
      displayLabel: '',
    };
  }

  if (isPostalCode(compactInput)) {
    return {
      original: compactInput,
      query: compactInput,
      cityName: compactInput,
      stateName: null,
      stateCode: null,
      fallbackSlug: slugifyLocationPart(compactInput),
      displayLabel: compactInput,
    };
  }

  const normalizedInput = normalizeWhitespace(decodedValue.replace(/[-_/]+/g, ' '));
  const normalizedLower = normalizeRegionValue(normalizedInput.replace(/,/g, ' , '));
  const commaParts = normalizedLower
    .split(',')
    .map((part) => normalizeWhitespace(part))
    .filter(Boolean);

  let cityName = normalizedLower.replace(/,/g, ' ');
  let stateMatch = null;

  if (commaParts.length >= 2) {
    cityName = commaParts[0];
    stateMatch = findStateMatch(commaParts.slice(1).join(' '));
  } else {
    const tokens = normalizedLower.split(' ').filter(Boolean);
    const suffixMatch = findStateSuffix(tokens);

    if (suffixMatch) {
      cityName = tokens.slice(0, -suffixMatch.length).join(' ');
      stateMatch = suffixMatch;
    }
  }

  const cleanCityName = normalizeWhitespace(cityName.replace(/,/g, ' '));
  const query = cleanCityName || normalizedInput;
  const fallbackSlug = stateMatch?.stateCode
    ? `${slugifyLocationPart(cleanCityName)}-${stateMatch.stateCode}`
    : slugifyLocationPart(query);
  const displayLabel = stateMatch
    ? `${titleCase(cleanCityName)}, ${titleCase(stateMatch.stateName)}`
    : titleCase(query);

  return {
    original: compactInput,
    query,
    cityName: cleanCityName,
    stateName: stateMatch?.stateName ?? null,
    stateCode: stateMatch?.stateCode ?? null,
    fallbackSlug,
    displayLabel,
  };
}
