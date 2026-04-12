export const SITE_URL = 'https://www.winterdaycalculator.com';
export const SITE_NAME = 'Winter Day Calculator';
export const SITE_DESCRIPTION = 'Snow day calculator and school closing predictor for the United States and Canada. Estimate closure risk from snowfall, temperature, and wind in one place.';
export const SITE_TAGLINE = 'Track local snow day risk with forecast-based school closing insights.';
export const FORECAST_REFRESH_HOURS = 1;
export const DEFAULT_OG_IMAGE = `${SITE_URL}/opengraph-image`;
export const DEFAULT_TWITTER_IMAGE = `${SITE_URL}/twitter-image`;

export const HOME_FAQS = [
  {
    question: 'How does Winter Day Calculator estimate snow day risk?',
    answer: 'The calculator reviews snowfall totals, overnight temperature, and peak wind in the latest forecast, then turns those signals into a closure-risk estimate you can understand quickly.'
  },
  {
    question: 'Does the calculator work for both US and Canada locations?',
    answer: 'Yes. The search and forecast logic support cities and postal or ZIP-style searches across the United States and Canada.'
  },
  {
    question: 'Is this an official school closing announcement?',
    answer: 'No. Winter Day Calculator is an independent forecast tool meant to help you plan ahead. Always confirm with your school district, employer, or local alert system.'
  },
  {
    question: 'How often is the forecast updated?',
    answer: 'Forecast data refreshes about every hour so the model can react to shifting snowfall bands, temperature drops, and wind changes.'
  }
];

export const METHODOLOGY_PILLARS = [
  {
    title: 'Snowfall intensity',
    description: 'Higher forecast snowfall increases the closure estimate because it affects road conditions, visibility, plowing, and bus routes.'
  },
  {
    title: 'Temperature risk',
    description: 'Very cold mornings raise the risk even when snowfall is lighter because districts may react to ice, dangerous wind chill, or transportation safety.'
  },
  {
    title: 'Wind and drifting',
    description: 'Strong gusts can turn moderate snowfall into low-visibility conditions and drifting problems, which is why wind is a separate input.'
  },
  {
    title: 'Human-readable output',
    description: 'Instead of hiding behind a black box, the site explains the signals behind each estimate so families can make faster decisions.'
  }
];

export const SUPPORT_PAGES = [
  {
    href: '/methodology',
    title: 'Methodology',
    navLabel: 'Methodology',
    description: 'See how snowfall, temperature, and wind shape the forecast score.'
  },
  {
    href: '/faq',
    title: 'Snow Day FAQ',
    navLabel: 'Snow Day FAQ',
    description: 'Answers about forecast confidence, school closures, and local planning.'
  },
  {
    href: '/guides/preparing-for-snow-days',
    title: 'Family Snow Day Guide',
    navLabel: 'Family Guide',
    description: 'A practical guide for families getting ready for a possible snow day.'
  },
  {
    href: '/guides/how-schools-decide-snow-days',
    title: 'How Schools Decide Snow Days',
    navLabel: 'School Closures',
    showInHeader: false,
    description: 'A plain-language guide to the district factors that influence delays, closures, and snow days.'
  },
  {
    href: '/guides/snow-vs-ice-school-closures',
    title: 'Snow vs Ice School Closures',
    navLabel: 'Snow vs Ice',
    showInHeader: false,
    description: 'See why thin ice and freezing roads can trigger closures faster than raw snowfall totals.'
  },
  {
    href: '/guides/what-parents-should-check-before-6-am',
    title: 'What Parents Should Check Before 6 AM',
    navLabel: 'Before 6 AM',
    showInHeader: false,
    description: 'A calm early-morning checklist for families who want to read the forecast without spiraling.'
  },
  {
    href: '/guides/delay-vs-closure',
    title: 'Delay vs Closure',
    navLabel: 'Delay vs Closure',
    showInHeader: false,
    description: 'Understand why districts sometimes delay the start instead of canceling school completely.'
  },
  {
    href: '/press',
    title: 'Press and Resource Page',
    navLabel: 'Press',
    showInHeader: false,
    description: 'A simple page for bloggers, newsrooms, and community sites who want to reference Winter Day Calculator clearly.'
  },
  {
    href: '/contact-us',
    title: 'Contact Winter Day Calculator',
    navLabel: 'Contact',
    description: 'The best way to report a site issue, broken forecast page, or indexing problem.'
  },
  {
    href: '/about',
    title: 'About Winter Day Calculator',
    navLabel: 'About',
    description: 'What the tool does, who it is for, and how to use it responsibly.'
  }
];

export const POPULAR_LOCATIONS = [
  {
    slug: 'buffalo-ny',
    city: 'Buffalo',
    region: 'New York',
    regionCode: 'NY',
    stateSlug: 'new-york',
    searchIntent: 'snow day calculator buffalo ny',
    reason: 'Lake-effect bursts and blowing snow can change the school-morning picture quickly across Buffalo.',
    watchFor: ['Lake-effect bursts', 'Drifting visibility', 'Bus-route timing']
  },
  {
    slug: 'rochester-ny',
    city: 'Rochester',
    region: 'New York',
    regionCode: 'NY',
    stateSlug: 'new-york',
    searchIntent: 'snow day predictor rochester ny',
    reason: 'Rochester often sits near sharp snow-band edges, so small forecast shifts matter before sunrise.',
    watchFor: ['Snow-band shifts', 'Icy side streets', 'Pre-dawn temperature drops']
  },
  {
    slug: 'syracuse-ny',
    city: 'Syracuse',
    region: 'New York',
    regionCode: 'NY',
    stateSlug: 'new-york',
    searchIntent: 'snow day calculator syracuse ny',
    reason: 'Syracuse can stack overnight snow quickly enough to change morning bus-route conditions.',
    watchFor: ['Overnight accumulation', 'Heavy bands before dawn', 'Visibility changes']
  },
  {
    slug: 'erie-pa',
    city: 'Erie',
    region: 'Pennsylvania',
    regionCode: 'PA',
    stateSlug: 'pennsylvania',
    searchIntent: 'snow day calculator erie pa',
    reason: 'Erie mornings can flip fast when lake-effect snow bands lock into place near daybreak.',
    watchFor: ['Lake-effect snow', 'Wind-driven roads', 'Plow timing']
  },
  {
    slug: 'pittsburgh-pa',
    city: 'Pittsburgh',
    region: 'Pennsylvania',
    regionCode: 'PA',
    stateSlug: 'pennsylvania',
    searchIntent: 'will school be closed tomorrow pittsburgh',
    reason: 'Pittsburgh travel risk often comes from hills, bridges, and mixed precipitation rather than raw snow totals alone.',
    watchFor: ['Bridge icing', 'Hill routes', 'Snow-to-mix transitions']
  },
  {
    slug: 'cleveland-oh',
    city: 'Cleveland',
    region: 'Ohio',
    regionCode: 'OH',
    stateSlug: 'ohio',
    searchIntent: 'snow day calculator cleveland ohio',
    reason: 'Cleveland can see commute conditions change quickly when Lake Erie bands drift inland.',
    watchFor: ['Lake Erie bands', 'Morning road treatment', 'Wind chill']
  },
  {
    slug: 'toledo-oh',
    city: 'Toledo',
    region: 'Ohio',
    regionCode: 'OH',
    stateSlug: 'ohio',
    searchIntent: 'snow day predictor toledo ohio',
    reason: 'Toledo families often need to watch for fast-moving fronts that arrive right before the school run.',
    watchFor: ['Fast fronts', 'Light snow on roads', 'Temperature dips']
  },
  {
    slug: 'detroit-mi',
    city: 'Detroit',
    region: 'Michigan',
    regionCode: 'MI',
    stateSlug: 'michigan',
    searchIntent: 'snow day calculator detroit mi',
    reason: 'Detroit balances city commuting pressure with winter bursts that can still slow school transportation.',
    watchFor: ['Metro commute delays', 'Refreeze risk', 'Wind-driven snow']
  },
  {
    slug: 'grand-rapids-mi',
    city: 'Grand Rapids',
    region: 'Michigan',
    regionCode: 'MI',
    stateSlug: 'michigan',
    searchIntent: 'snow day predictor grand rapids mi',
    reason: 'Grand Rapids can diverge from east-side forecasts when west Michigan snow bands hold together overnight.',
    watchFor: ['West Michigan snow bands', 'Rural bus routes', 'Morning visibility']
  },
  {
    slug: 'chicago-il',
    city: 'Chicago',
    region: 'Illinois',
    regionCode: 'IL',
    stateSlug: 'illinois',
    searchIntent: 'snow day calculator chicago',
    reason: 'Chicago mornings can be shaped as much by wind chill and commute conditions as by total snowfall.',
    watchFor: ['Wind chill', 'Lakefront gusts', 'Early commute conditions']
  },
  {
    slug: 'rockford-il',
    city: 'Rockford',
    region: 'Illinois',
    regionCode: 'IL',
    stateSlug: 'illinois',
    searchIntent: 'snow day predictor rockford il',
    reason: 'Rockford can pick up inland snowfall and slick-road risk that does not always match Chicago.',
    watchFor: ['Inland snow totals', 'County road conditions', 'Refreeze risk']
  },
  {
    slug: 'boston-ma',
    city: 'Boston',
    region: 'Massachusetts',
    regionCode: 'MA',
    stateSlug: 'massachusetts',
    searchIntent: 'snow day calculator boston ma',
    reason: 'Boston forecasts matter most when coastal timing and city commuting collide before sunrise.',
    watchFor: ['Coastal timing', 'Urban commuting', 'Rain-snow line']
  },
  {
    slug: 'worcester-ma',
    city: 'Worcester',
    region: 'Massachusetts',
    regionCode: 'MA',
    stateSlug: 'massachusetts',
    searchIntent: 'snow day predictor worcester ma',
    reason: 'Worcester can run colder and snowier than Boston, which often changes the morning outlook.',
    watchFor: ['Inland accumulation', 'Colder dawn temps', 'Hill-town travel']
  },
  {
    slug: 'minneapolis-mn',
    city: 'Minneapolis',
    region: 'Minnesota',
    regionCode: 'MN',
    stateSlug: 'minnesota',
    searchIntent: 'snow day calculator minneapolis',
    reason: 'Minneapolis needs a forecast that respects bitter cold as much as snowfall totals.',
    watchFor: ['Dangerous cold', 'Overnight snow', 'Wind chill']
  },
  {
    slug: 'duluth-mn',
    city: 'Duluth',
    region: 'Minnesota',
    regionCode: 'MN',
    stateSlug: 'minnesota',
    searchIntent: 'snow day predictor duluth mn',
    reason: 'Duluth can combine lake influence, steep hills, and strong cold snaps in the same morning.',
    watchFor: ['Lake influence', 'Hilly streets', 'Extreme cold']
  },
  {
    slug: 'milwaukee-wi',
    city: 'Milwaukee',
    region: 'Wisconsin',
    regionCode: 'WI',
    stateSlug: 'wisconsin',
    searchIntent: 'snow day calculator milwaukee',
    reason: 'Milwaukee families often need to watch for a mix of lake influence, slick roads, and commuter pressure.',
    watchFor: ['Lake influence', 'Slick roads', 'Morning commute']
  },
  {
    slug: 'green-bay-wi',
    city: 'Green Bay',
    region: 'Wisconsin',
    regionCode: 'WI',
    stateSlug: 'wisconsin',
    searchIntent: 'snow day predictor green bay wi',
    reason: 'Green Bay travel risk rises quickly when snow and wind line up during the early hours.',
    watchFor: ['Blowing snow', 'Open-road drifting', 'Cold dawns']
  },
  {
    slug: 'toronto-on',
    city: 'Toronto',
    region: 'Ontario',
    regionCode: 'ON',
    stateSlug: 'ontario',
    searchIntent: 'snow day calculator toronto',
    reason: 'Toronto needs a practical read on whether a messy commute is building before the city fully wakes up.',
    watchFor: ['Transit impacts', 'Wet-to-snow flips', 'School-board timing']
  },
  {
    slug: 'ottawa-on',
    city: 'Ottawa',
    region: 'Ontario',
    regionCode: 'ON',
    stateSlug: 'ontario',
    searchIntent: 'snow day predictor ottawa',
    reason: 'Ottawa can move from manageable snow to harsh cold and difficult road conditions very quickly.',
    watchFor: ['Deep cold', 'Morning accumulation', 'Wind-chill decisions']
  },
  {
    slug: 'montreal-qc',
    city: 'Montreal',
    region: 'Quebec',
    regionCode: 'QC',
    stateSlug: 'quebec',
    searchIntent: 'snow day calculator montreal',
    reason: 'Montreal mornings often hinge on how quickly snow piles up and how cold the first commute becomes.',
    watchFor: ['Heavy overnight snow', 'Cold morning starts', 'Urban snow clearing']
  },
  {
    slug: 'albany-ny',
    city: 'Albany',
    region: 'New York',
    regionCode: 'NY',
    stateSlug: 'new-york',
    searchIntent: 'snow day calculator albany ny',
    reason: 'Albany can swing quickly between wet snow, refreeze risk, and early-bus-route icing before sunrise.',
    watchFor: ['Capital region icing', 'Wet snow changeover', 'Morning bridge travel'],
    showOnHome: false
  },
  {
    slug: 'scranton-pa',
    city: 'Scranton',
    region: 'Pennsylvania',
    regionCode: 'PA',
    stateSlug: 'pennsylvania',
    searchIntent: 'snow day calculator scranton pa',
    reason: 'Scranton often sees hill-route travel and overnight accumulation combine into tougher school-morning conditions.',
    watchFor: ['Hill routes', 'Overnight accumulation', 'Cold dawn roads'],
    showOnHome: false
  },
  {
    slug: 'akron-oh',
    city: 'Akron',
    region: 'Ohio',
    regionCode: 'OH',
    stateSlug: 'ohio',
    searchIntent: 'snow day predictor akron ohio',
    reason: 'Akron families need a closer read on lake-influenced snow bands and icy suburban road conditions.',
    watchFor: ['Suburban refreeze', 'Lake-effect edges', 'Morning road treatment'],
    showOnHome: false
  },
  {
    slug: 'lansing-mi',
    city: 'Lansing',
    region: 'Michigan',
    regionCode: 'MI',
    stateSlug: 'michigan',
    searchIntent: 'snow day calculator lansing mi',
    reason: 'Lansing can pick up disruptive overnight snow and wind that affects school travel before the city fully wakes up.',
    watchFor: ['Overnight snow bands', 'Wind-driven visibility', 'School-route timing'],
    showOnHome: false
  },
  {
    slug: 'naperville-il',
    city: 'Naperville',
    region: 'Illinois',
    regionCode: 'IL',
    stateSlug: 'illinois',
    searchIntent: 'snow day calculator naperville il',
    reason: 'Naperville commuters and school families often deal with slick suburban roads before Chicago conditions fully catch up.',
    watchFor: ['Suburban side streets', 'Refreeze risk', 'Early commuter overlap'],
    showOnHome: false
  },
  {
    slug: 'springfield-ma',
    city: 'Springfield',
    region: 'Massachusetts',
    regionCode: 'MA',
    stateSlug: 'massachusetts',
    searchIntent: 'snow day calculator springfield ma',
    reason: 'Springfield can run snowier and colder than the coast, which changes the school-morning risk profile fast.',
    watchFor: ['Inland cold', 'Heavier valley snow', 'Morning accumulation'],
    showOnHome: false
  },
  {
    slug: 'saint-paul-mn',
    city: 'Saint Paul',
    region: 'Minnesota',
    regionCode: 'MN',
    stateSlug: 'minnesota',
    searchIntent: 'snow day calculator saint paul mn',
    reason: 'Saint Paul winter decisions often come down to bitter cold, fresh overnight snow, and bus-route safety before dawn.',
    watchFor: ['Dangerous wind chill', 'Overnight snow', 'Morning route safety'],
    showOnHome: false
  },
  {
    slug: 'madison-wi',
    city: 'Madison',
    region: 'Wisconsin',
    regionCode: 'WI',
    stateSlug: 'wisconsin',
    searchIntent: 'snow day calculator madison wi',
    reason: 'Madison can flip from manageable snow to icy roads and difficult early travel with just a small overnight forecast shift.',
    watchFor: ['Campus-area travel', 'Icy roads', 'Overnight forecast swings'],
    showOnHome: false
  },
  {
    slug: 'london-on',
    city: 'London',
    region: 'Ontario',
    regionCode: 'ON',
    stateSlug: 'ontario',
    searchIntent: 'snow day calculator london ontario',
    reason: 'London can see Ontario snow-day risk build fast when fresh accumulation and school-bus timing line up overnight.',
    watchFor: ['Fresh morning accumulation', 'Bus timing', 'Wind-chill decisions'],
    showOnHome: false
  },
  {
    slug: 'quebec-city-qc',
    city: 'Quebec City',
    region: 'Quebec',
    regionCode: 'QC',
    stateSlug: 'quebec',
    searchIntent: 'snow day calculator quebec city',
    reason: 'Quebec City often combines steep streets, fresh snow, and colder dawn temperatures into a sharper morning closure signal.',
    watchFor: ['Steep street travel', 'Fresh morning snow', 'Colder dawn temps'],
    showOnHome: false
  },
  {
    slug: 'binghamton-ny',
    city: 'Binghamton',
    region: 'New York',
    regionCode: 'NY',
    stateSlug: 'new-york',
    searchIntent: 'snow day calculator binghamton ny',
    reason: 'Binghamton often deals with hillier travel, overnight accumulation, and fast changes in road treatment needs before sunrise.',
    watchFor: ['Hillier routes', 'Overnight accumulation', 'Cold morning roads'],
    showOnHome: false
  },
  {
    slug: 'allentown-pa',
    city: 'Allentown',
    region: 'Pennsylvania',
    regionCode: 'PA',
    stateSlug: 'pennsylvania',
    searchIntent: 'snow day calculator allentown pa',
    reason: 'Allentown can swing between wet snow, icy bridges, and commuter-route disruption in the same overnight system.',
    watchFor: ['Bridge icing', 'Wet snow transitions', 'Morning commuter routes'],
    showOnHome: false
  },
  {
    slug: 'columbus-oh',
    city: 'Columbus',
    region: 'Ohio',
    regionCode: 'OH',
    stateSlug: 'ohio',
    searchIntent: 'snow day calculator columbus ohio',
    reason: 'Columbus school-morning risk often comes from refreeze and timing, especially when a large metro commute starts before roads recover.',
    watchFor: ['Refreeze risk', 'Metro commute timing', 'Early road treatment'],
    showOnHome: false
  },
  {
    slug: 'ann-arbor-mi',
    city: 'Ann Arbor',
    region: 'Michigan',
    regionCode: 'MI',
    stateSlug: 'michigan',
    searchIntent: 'snow day calculator ann arbor mi',
    reason: 'Ann Arbor families often need a closer read on overnight snow, campus-area traffic, and colder dawn temperatures.',
    watchFor: ['Campus traffic', 'Overnight snow', 'Colder dawn temps'],
    showOnHome: false
  },
  {
    slug: 'aurora-il',
    city: 'Aurora',
    region: 'Illinois',
    regionCode: 'IL',
    stateSlug: 'illinois',
    searchIntent: 'snow day calculator aurora il',
    reason: 'Aurora can see suburban road issues and early commuter overlap build faster than downtown Chicago conditions suggest.',
    watchFor: ['Suburban roads', 'Commuter overlap', 'Refreeze pockets'],
    showOnHome: false
  },
  {
    slug: 'lowell-ma',
    city: 'Lowell',
    region: 'Massachusetts',
    regionCode: 'MA',
    stateSlug: 'massachusetts',
    searchIntent: 'snow day calculator lowell ma',
    reason: 'Lowell often sits in a colder inland pocket where slippery roads can outlast what coastal forecasts imply.',
    watchFor: ['Inland cold pockets', 'Morning slippery roads', 'Rain-snow line shifts'],
    showOnHome: false
  },
  {
    slug: 'st-cloud-mn',
    city: 'St. Cloud',
    region: 'Minnesota',
    regionCode: 'MN',
    stateSlug: 'minnesota',
    searchIntent: 'snow day calculator st cloud mn',
    reason: 'St. Cloud can move from manageable snow to severe cold and difficult bus-route conditions before daybreak.',
    watchFor: ['Severe cold', 'Bus-route conditions', 'Morning snow bursts'],
    showOnHome: false
  },
  {
    slug: 'eau-claire-wi',
    city: 'Eau Claire',
    region: 'Wisconsin',
    regionCode: 'WI',
    stateSlug: 'wisconsin',
    searchIntent: 'snow day calculator eau claire wi',
    reason: 'Eau Claire schools often need to weigh open-road drifting, colder dawns, and slick county routes all at once.',
    watchFor: ['Open-road drifting', 'County route safety', 'Colder dawns'],
    showOnHome: false
  },
  {
    slug: 'hamilton-on',
    city: 'Hamilton',
    region: 'Ontario',
    regionCode: 'ON',
    stateSlug: 'ontario',
    searchIntent: 'snow day calculator hamilton ontario',
    reason: 'Hamilton can pick up a messy mix of snow, hills, and commuter disruption that changes the school-morning call quickly.',
    watchFor: ['Escarpment travel', 'Mixed precipitation', 'Commuter disruption'],
    showOnHome: false
  },
  {
    slug: 'laval-qc',
    city: 'Laval',
    region: 'Quebec',
    regionCode: 'QC',
    stateSlug: 'quebec',
    searchIntent: 'snow day calculator laval qc',
    reason: 'Laval mornings can hinge on how fast overnight snow piles up and whether colder roads linger into the first commute.',
    watchFor: ['Overnight snowfall', 'Colder road surfaces', 'Metro commute timing'],
    showOnHome: false
  }
];

export const STATE_GUIDES = [
  {
    slug: 'new-york',
    name: 'New York',
    summary: 'New York snow day searches are driven by lake-effect systems, overnight icing, and district-to-district variability.',
    weatherFactors: ['Lake-effect snow bands', 'Pre-dawn temperature swings', 'Wind-driven visibility problems'],
    regionNote: 'Conditions can change dramatically between lake-effect zones, interior districts, and downstate commuter corridors.'
  },
  {
    slug: 'pennsylvania',
    name: 'Pennsylvania',
    summary: 'Pennsylvania combines metro commute risk with snow-belt conditions that can shift quickly overnight.',
    weatherFactors: ['Western lake-effect snow', 'Hilly road conditions', 'Mixed precipitation risk'],
    regionNote: 'Western snow belts, mountain roads, and metro bridge icing create very different school-morning setups across the state.'
  },
  {
    slug: 'ohio',
    name: 'Ohio',
    summary: 'Ohio snow day demand spikes when lake-effect snow, wind, and icy morning travel combine.',
    weatherFactors: ['Lake-effect snow', 'Bus route safety', 'Wind and drifting'],
    regionNote: 'Lakeshore districts, inland suburbs, and rural bus routes can see meaningfully different travel conditions on the same day.'
  },
  {
    slug: 'michigan',
    name: 'Michigan',
    summary: 'Michigan districts often respond to both snow accumulation and wind-driven visibility on long bus routes.',
    weatherFactors: ['Lake-enhanced snowfall', 'Morning wind chill', 'Rural route visibility'],
    regionNote: 'West-side lake snow, metro traffic, and long rural routes all influence how quickly a forecast turns into a closure risk.'
  },
  {
    slug: 'illinois',
    name: 'Illinois',
    summary: 'Illinois searches lean on metro commuting, wind chill, and fast-moving winter fronts.',
    weatherFactors: ['Wind chill', 'Urban commute impact', 'Regional snowfall variation'],
    regionNote: 'Chicago-area commuting, suburban bus routes, and downstate snowfall often behave very differently in the same weather event.'
  },
  {
    slug: 'massachusetts',
    name: 'Massachusetts',
    summary: 'Massachusetts snow day decisions can differ sharply between coastal and inland communities.',
    weatherFactors: ['Coastal storm tracks', 'Inland accumulation gaps', 'Mixed precipitation timing'],
    regionNote: 'Coastal mixing, inland cold, and town-by-town road treatment timing create big differences across Massachusetts.'
  },
  {
    slug: 'minnesota',
    name: 'Minnesota',
    summary: 'Minnesota needs a snow day model that respects extreme cold, not just snowfall totals.',
    weatherFactors: ['Dangerous cold', 'Blowing snow', 'Wide regional forecast gaps'],
    regionNote: 'In Minnesota, brutal cold can matter as much as snow, especially when wind chill hits long bus routes before dawn.'
  },
  {
    slug: 'wisconsin',
    name: 'Wisconsin',
    summary: 'Wisconsin school closure risk depends on snow totals, drifting, and early-morning travel conditions.',
    weatherFactors: ['Lake Michigan influence', 'Blowing snow', 'Road treatment timing'],
    regionNote: 'Lakeshore influence, open-road drifting, and different road-treatment windows make local context especially important in Wisconsin.'
  },
  {
    slug: 'ontario',
    name: 'Ontario',
    summary: 'Ontario searches often combine city-level snowfall questions with broader transportation and school board concerns.',
    weatherFactors: ['Lake-effect snowfall', 'Transit and school board decisions', 'Cold snaps'],
    regionNote: 'Large metro transit systems, lake-effect pockets, and school-board policies can produce very different outcomes across Ontario.'
  },
  {
    slug: 'quebec',
    name: 'Quebec',
    summary: 'Quebec winter intent grows when heavy snow and low temperatures combine in large metro areas.',
    weatherFactors: ['Cold-driven closures', 'Urban snow removal timing', 'Heavy overnight accumulation'],
    regionNote: 'Heavy overnight accumulation and cold morning starts can land differently between dense city cores and outer districts in Quebec.'
  }
];

const locationMap = new Map(POPULAR_LOCATIONS.map((location) => [location.slug, location]));
const stateGuideMap = new Map(STATE_GUIDES.map((guide) => [guide.slug, guide]));

export function getLocationBySlug(slug) {
  return locationMap.get(slug) || null;
}

export function getStateGuideBySlug(slug) {
  return stateGuideMap.get(slug) || null;
}

export function getLocationsForState(stateSlug) {
  return POPULAR_LOCATIONS.filter((location) => location.stateSlug === stateSlug);
}

export function getRelatedLocations(slug, stateSlug) {
  return POPULAR_LOCATIONS.filter((location) => location.stateSlug === stateSlug && location.slug !== slug).slice(0, 4);
}

export function buildPredictionFaqs(locationName, options = {}) {
  const watchList = options.watchFor?.length
    ? options.watchFor.slice(0, 2).join(' and ')
    : 'snow, cold, and wind';
  const regionNote = options.regionNote ? ` ${options.regionNote}` : '';

  return [
    {
      question: `How should I use the ${locationName} snow day estimate?`,
      answer: `Use the ${locationName} score as a planning estimate for the next school-morning window, not an official closure notice. It is most helpful when you compare the percentage with the local factors on the page, such as ${watchList}.`
    },
    {
      question: `Why can the ${locationName} estimate change during the day?`,
      answer: `Snow bands, temperature drops, and wind forecasts can all shift quickly. When the forecast updates, the estimate can move with it.${regionNote}`
    },
    {
      question: `Does a high percentage guarantee school cancellation in ${locationName}?`,
      answer: `No. Districts weigh road treatment, bus routes, staffing, and local policy. A higher score means conditions are becoming more supportive of a closure, not guaranteed.`
    }
  ];
}

export function buildStateGuideFaqs(guide) {
  return [
    {
      question: `What usually changes snow day decisions in ${guide.name}?`,
      answer: `${guide.name} decisions are often shaped by ${guide.weatherFactors.slice(0, 2).join(' and ')}. ${guide.regionNote}`
    },
    {
      question: `Why does local context matter inside ${guide.name}?`,
      answer: `A statewide forecast can miss how conditions vary between neighborhoods, commuter corridors, and longer bus routes. That is why the guide links out to city pages with more localized context.`
    },
    {
      question: `Should I treat the ${guide.name} guide as an official closure source?`,
      answer: `No. Use the guide to understand the forecast setup and where risk is building, then confirm with the school district, employer, or transportation authority responsible for the final decision.`
    }
  ];
}
