/* ============================================================
   Merlin KPI Compass - script.js
   Performance Dashboard
   ============================================================ */

// ---- Entities ----
const ENTITIES = [
  { id: 'global-hq', name: 'Corporate HQ', level: 'global', factor: 1.0, variance: 0.015 },
  { id: 'region-1', name: 'Region 1', level: 'regional', factor: 1.02, variance: 0.035 },
  { id: 'region-2', name: 'Region 2', level: 'regional', factor: 0.98, variance: 0.04 },
  { id: 'region-3', name: 'Region 3', level: 'regional', factor: 1.01, variance: 0.03 },
  { id: 'park-1', name: 'Theme Park 1', level: 'local', factor: 1.03, variance: 0.06 },
  { id: 'park-2', name: 'Theme Park 2', level: 'local', factor: 0.97, variance: 0.055 },
  { id: 'park-3', name: 'Theme Park 3', level: 'local', factor: 1.01, variance: 0.05 }
];

// ---- KPI Library ----
const KPI_LIBRARY = [];

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function addKpi(level, category, name, description, options = {}) {
  const id = slugify(`${level}-${name}`);
  KPI_LIBRARY.push({
    id,
    level,
    category,
    name,
    description,
    importance: options.importance || '',
    format: options.format || 'count',
    direction: options.direction || 'higher',
    base: options.base || 0,
    target: options.target,
    warn: options.warn,
    owner: options.owner || 'Performance Office',
    cadence: options.cadence || 'Monthly',
    drivers: options.drivers || 'Price, volume, mix',
    notes: options.notes || ''
  });
}

// Global KPIs - Revenue Growth
addKpi('global', 'Revenue Growth', 'Total Attendance', 'Total visits across all parks.', { format: 'count', base: 19500000, drivers: 'Capacity, marketing reach, tourism flow' });
addKpi('global', 'Revenue Growth', 'Attendance Growth %', 'Year-over-year attendance growth.', { format: 'percent', base: 6.8 });
addKpi('global', 'Revenue Growth', 'Market Share %', 'Share of regional amusement spend.', { format: 'percent', base: 13.5 });
addKpi('global', 'Revenue Growth', 'International Visitor %', 'International visitors as % of total.', { format: 'percent', base: 21 });
addKpi('global', 'Revenue Growth', 'Repeat Visit Rate', 'Guests who return within 12 months.', { format: 'percent', base: 28 });
addKpi('global', 'Revenue Growth', 'Brand Awareness Index', 'Unaided awareness index.', { format: 'index', base: 68 });

addKpi('global', 'Revenue Growth', 'Revenue per Visitor', 'Average revenue per guest.', { format: 'currency', base: 62 });
addKpi('global', 'Revenue Growth', 'Average Ticket Yield', 'Net ticket yield after discounts.', { format: 'currency', base: 38 });
addKpi('global', 'Revenue Growth', 'Dynamic Pricing Uplift %', 'Incremental uplift from dynamic pricing.', { format: 'percent', base: 7.5 });
addKpi('global', 'Revenue Growth', 'Non-Ticket Revenue %', 'Share of revenue from F&B, merch, and extras.', { format: 'percent', base: 36 });
addKpi('global', 'Revenue Growth', 'Cross-Sell Rate %', 'Guests purchasing add-ons.', { format: 'percent', base: 18 });

// Global KPIs - Margin Expansion
addKpi('global', 'Margin Expansion', 'EBITDA Margin', 'EBITDA as % of revenue.', { format: 'percent', base: 25 });
addKpi('global', 'Margin Expansion', 'Operating Margin', 'Operating income as % of revenue.', { format: 'percent', base: 18 });
addKpi('global', 'Margin Expansion', 'Labor Cost % (Group)', 'Labor cost as % of revenue.', { format: 'percent', base: 22, direction: 'lower' });
addKpi('global', 'Margin Expansion', 'Energy Cost per Visitor (Group Avg)', 'Energy spend per guest.', { format: 'currency', base: 3.4, direction: 'lower' });
addKpi('global', 'Margin Expansion', 'Contribution Margin', 'Revenue less variable costs.', { format: 'percent', base: 41 });

// Global KPIs - Capital Efficiency
addKpi('global', 'Capital Efficiency', 'ROI on New Attractions', 'Return on major attraction investments.', { format: 'percent', base: 14 });
addKpi('global', 'Capital Efficiency', 'ROIC', 'Return on invested capital.', { format: 'percent', base: 11.5 });
addKpi('global', 'Capital Efficiency', 'Capex per Park', 'Annual capital spend per park.', { format: 'currency', base: 48000000, direction: 'lower' });
addKpi('global', 'Capital Efficiency', 'Asset Turnover Ratio', 'Revenue per dollar of assets.', { format: 'ratio', base: 0.85 });
addKpi('global', 'Capital Efficiency', 'Revenue per Square Foot', 'Revenue per square foot of park area.', { format: 'currency', base: 580 });
addKpi('global', 'Capital Efficiency', 'EBITDA per Attraction', 'Profitability per attraction.', { format: 'currency', base: 8200000 });

// Global KPIs - Risk and Portfolio Stability
addKpi('global', 'Risk and Portfolio Stability', 'Safety Incident Rate (Group)', 'Incidents per 10k visits.', { format: 'rate', base: 0.42, direction: 'lower' });
addKpi('global', 'Risk and Portfolio Stability', 'Safety Severity Index', 'Severity-weighted incident index.', { format: 'index', base: 1.8, direction: 'lower' });
addKpi('global', 'Risk and Portfolio Stability', 'Tourism Sensitivity Index', 'Sensitivity to tourism demand shifts.', { format: 'index', base: 0.62, direction: 'lower' });
addKpi('global', 'Risk and Portfolio Stability', 'Brand NPS (Group)', 'Net promoter score across brands.', { format: 'score', base: 52 });
addKpi('global', 'Risk and Portfolio Stability', 'Revenue by Brand %', 'Revenue share from top brand.', { format: 'percent', base: 43 });
addKpi('global', 'Risk and Portfolio Stability', 'Indoor vs Outdoor Revenue Mix %', 'Indoor revenue share for weather resilience.', { format: 'percent', base: 47 });

// Global KPIs - Customer Metrics
addKpi('global', 'Global Customer Metrics', 'Global NPS', 'Net promoter score across all parks.', { format: 'score', base: 50 });
addKpi('global', 'Global Customer Metrics', 'Global Repeat Visit Rate', 'Repeat visits within 12 months.', { format: 'percent', base: 29 });
addKpi('global', 'Global Customer Metrics', 'Customer Lifetime Value', 'Estimated lifetime value per guest.', { format: 'currency', base: 610 });
addKpi('global', 'Global Customer Metrics', 'Global Customer Acquisition Cost', 'Average acquisition cost per guest.', { format: 'currency', base: 44, direction: 'lower' });
addKpi('global', 'Global Customer Metrics', 'Customer Retention Rate', 'Retention rate across membership tiers.', { format: 'percent', base: 74 });
addKpi('global', 'Global Customer Metrics', 'Global App Engagement %', 'Monthly active app usage.', { format: 'percent', base: 32 });
addKpi('global', 'Global Customer Metrics', 'Global Cross-Sell Rate %', 'Cross-sell conversion for add-ons.', { format: 'percent', base: 17 });
addKpi('global', 'Global Customer Metrics', 'Customer Complaint Rate (Global)', 'Complaints per 100 visits.', { format: 'percent', base: 1.9, direction: 'lower' });
addKpi('global', 'Global Customer Metrics', 'Global Satisfaction Score', 'Average satisfaction score out of 10.', { format: 'score', base: 8.6 });
addKpi('global', 'Global Customer Metrics', 'Churn Rate', 'Membership churn rate.', { format: 'percent', base: 9.5, direction: 'lower' });

// Regional KPIs - Revenue Performance
addKpi('regional', 'Regional Revenue Performance', 'Revenue per Park', 'Average revenue per park in region.', { format: 'currency', base: 210000000 });
addKpi('regional', 'Regional Revenue Performance', 'Regional EBITDA Margin', 'Regional EBITDA margin.', { format: 'percent', base: 23 });
addKpi('regional', 'Regional Revenue Performance', 'Revenue per Visitor (Regional)', 'Average spend per guest.', { format: 'currency', base: 59 });
addKpi('regional', 'Regional Revenue Performance', 'Yield per Available Capacity (YPAC)', 'Revenue yield per capacity unit.', { format: 'ratio', base: 0.74 });
addKpi('regional', 'Regional Revenue Performance', 'Event Revenue Multiplier', 'Event revenue uplift factor.', { format: 'ratio', base: 1.18 });
addKpi('regional', 'Regional Revenue Performance', 'Group Booking Ratio', 'Group bookings as % of attendance.', { format: 'percent', base: 12 });
addKpi('regional', 'Regional Revenue Performance', 'Advance Booking Ratio', 'Advance bookings as % of total.', { format: 'percent', base: 48 });

// Regional KPIs - Demand Pricing
addKpi('regional', 'Regional Demand Pricing', 'Peak Season Attendance %', 'Peak season attendance share.', { format: 'percent', base: 34 });
addKpi('regional', 'Regional Demand Pricing', 'Off-Season Utilization %', 'Utilization during off-season.', { format: 'percent', base: 52 });
addKpi('regional', 'Regional Demand Pricing', 'Pricing Power Index', 'Price elasticity index.', { format: 'index', base: 1.12 });
addKpi('regional', 'Regional Demand Pricing', 'Online vs Onsite Ticket Mix %', 'Share of online ticket sales.', { format: 'percent', base: 64 });
addKpi('regional', 'Regional Demand Pricing', 'Dynamic Pricing Effectiveness %', 'Effectiveness of dynamic pricing.', { format: 'percent', base: 6.5 });

// Regional KPIs - Operational Efficiency
addKpi('regional', 'Regional Operational Efficiency', 'Avg Queue Time', 'Average guest queue time.', { format: 'minutes', base: 38, direction: 'lower' });
addKpi('regional', 'Regional Operational Efficiency', 'Ride Capacity Utilization %', 'Utilization of ride capacity.', { format: 'percent', base: 82 });
addKpi('regional', 'Regional Operational Efficiency', 'Preventive Maintenance Ratio', 'Scheduled maintenance as % of total.', { format: 'percent', base: 68 });
addKpi('regional', 'Regional Operational Efficiency', 'Unplanned Downtime %', 'Unplanned downtime percentage.', { format: 'percent', base: 3.4, direction: 'lower' });
addKpi('regional', 'Regional Operational Efficiency', 'Staff Turnover %', 'Annualized staff turnover.', { format: 'percent', base: 18, direction: 'lower' });
addKpi('regional', 'Regional Operational Efficiency', 'Labor Utilization Rate', 'Labor utilization rate.', { format: 'percent', base: 87 });

// Regional KPIs - Risk and Market Health
addKpi('regional', 'Regional Risk and Market Health', 'Regional Safety Severity Index', 'Severity-weighted incident index.', { format: 'index', base: 2.1, direction: 'lower' });
addKpi('regional', 'Regional Risk and Market Health', 'Weather Impact %', 'Revenue impacted by weather events.', { format: 'percent', base: 4.8, direction: 'lower' });
addKpi('regional', 'Regional Risk and Market Health', 'Currency Impact %', 'Currency effect on revenue.', { format: 'percent', base: 2.6, direction: 'lower' });
addKpi('regional', 'Regional Risk and Market Health', 'Regional Marketing ROI', 'Marketing ROI multiple.', { format: 'ratio', base: 3.6 });
addKpi('regional', 'Regional Risk and Market Health', 'Regional Customer Acquisition Cost', 'Acquisition cost per guest.', { format: 'currency', base: 38, direction: 'lower' });

// Local KPIs - Daily Revenue
addKpi('local', 'Daily Revenue KPIs', 'Daily Revenue', 'Daily revenue per park.', { format: 'currency', base: 1250000 });
addKpi('local', 'Daily Revenue KPIs', 'Revenue per Capita', 'Revenue per guest.', { format: 'currency', base: 58 });
addKpi('local', 'Daily Revenue KPIs', 'F&B Spend per Guest', 'Food and beverage spend per guest.', { format: 'currency', base: 19 });
addKpi('local', 'Daily Revenue KPIs', 'Merchandise Conversion Rate %', 'Merchandise conversion rate.', { format: 'percent', base: 8.4 });
addKpi('local', 'Daily Revenue KPIs', 'Fast Pass Attach Rate %', 'Fast pass attach rate.', { format: 'percent', base: 21 });
addKpi('local', 'Daily Revenue KPIs', 'Cross-Sell Rate %', 'Cross-sell conversion rate.', { format: 'percent', base: 16 });

// Local KPIs - Guest Experience
addKpi('local', 'Guest Experience KPIs', 'Park-Level NPS', 'Net promoter score for park.', { format: 'score', base: 56 });
addKpi('local', 'Guest Experience KPIs', 'Avg Ride Wait Time', 'Average ride wait time.', { format: 'minutes', base: 42, direction: 'lower' });
addKpi('local', 'Guest Experience KPIs', 'Queue Variability Index', 'Queue variability index.', { format: 'ratio', base: 1.35, direction: 'lower' });
addKpi('local', 'Guest Experience KPIs', 'Ride Satisfaction Score', 'Guest satisfaction score for rides.', { format: 'score', base: 8.7 });
addKpi('local', 'Guest Experience KPIs', 'Complaint Rate', 'Guest complaints per 100 visits.', { format: 'percent', base: 2.2, direction: 'lower' });
addKpi('local', 'Guest Experience KPIs', 'Complaint Resolution Time', 'Average time to resolve complaints.', { format: 'minutes', base: 26, direction: 'lower' });
addKpi('local', 'Guest Experience KPIs', 'Cleanliness Score', 'Cleanliness rating out of 10.', { format: 'score', base: 8.9 });
addKpi('local', 'Guest Experience KPIs', 'App Usage %', 'App usage during visit.', { format: 'percent', base: 36 });

// Local KPIs - Ride and Operational
addKpi('local', 'Ride and Operational KPIs', 'Ride Uptime %', 'Ride uptime percentage.', { format: 'percent', base: 98.2 });
addKpi('local', 'Ride and Operational KPIs', 'Ride Throughput per Hour', 'Ride throughput per hour.', { format: 'count', base: 980 });
addKpi('local', 'Ride and Operational KPIs', 'Preventive Maintenance Ratio', 'Scheduled maintenance ratio.', { format: 'percent', base: 72 });
addKpi('local', 'Ride and Operational KPIs', 'Cost per Ride Cycle', 'Cost per ride cycle.', { format: 'currency', base: 0.74, direction: 'lower' });
addKpi('local', 'Ride and Operational KPIs', 'Ticket Scan Throughput Time', 'Average ticket scan time.', { format: 'seconds', base: 12, direction: 'lower' });
addKpi('local', 'Ride and Operational KPIs', 'Staff-to-Guest Ratio (per 1k)', 'Staff per 1,000 guests.', { format: 'count', base: 24, direction: 'lower' });

// Local KPIs - Cost Control
addKpi('local', 'Cost Control KPIs', 'Labor Cost % of Revenue', 'Labor cost share of revenue.', { format: 'percent', base: 26, direction: 'lower' });
addKpi('local', 'Cost Control KPIs', 'Utility Cost per Visitor', 'Utilities per guest.', { format: 'currency', base: 3.1, direction: 'lower' });
addKpi('local', 'Cost Control KPIs', 'Maintenance Cost per Visitor', 'Maintenance spend per guest.', { format: 'currency', base: 2.2, direction: 'lower' });
addKpi('local', 'Cost Control KPIs', 'Food Waste %', 'Food waste percentage.', { format: 'percent', base: 4.6, direction: 'lower' });
addKpi('local', 'Cost Control KPIs', 'Energy Efficiency Ratio', 'Energy efficiency ratio.', { format: 'ratio', base: 0.86 });
addKpi('local', 'Cost Control KPIs', 'Waste Cost per Visitor', 'Waste cost per guest.', { format: 'currency', base: 0.85, direction: 'lower' });

// ---- State ----
let currentEntityId = 'global-hq';
let currentFilter = 'all';

// ---- DOM refs ----
const $tableBody = document.getElementById('tableBody');
const $scoreVal = document.getElementById('scoreVal');
const $countOn = document.getElementById('countOn');
const $countRisk = document.getElementById('countRisk');
const $countOff = document.getElementById('countOff');
const $countT = document.getElementById('countTotal');
const $scanProgress = document.getElementById('scanProgress');

// ---- Helpers ----
function hashString(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function seededOffset(seed) {
  const normalized = (hashString(seed) % 1000) / 1000;
  return (normalized - 0.5) * 2;
}

function getImportance(kpi) {
  if (kpi.importance) return kpi.importance;

  const keywordRules = [
    { match: /safety|incident/i, text: 'Critical to guest/staff safety and brand trust.' },
    { match: /nps|satisfaction|complaint|cleanliness/i, text: 'Strong predictor of loyalty, word-of-mouth, and repeat visits.' },
    { match: /attendance|visitor|visit/i, text: 'Primary volume driver that amplifies revenue and fixed-cost leverage.' },
    { match: /cross-sell|attach|merchandise|f&b/i, text: 'Boosts per-guest spend and overall profitability.' },
    { match: /pricing|yield|mix|dynamic/i, text: 'Improves yield and balances demand across seasons.' },
    { match: /labor|staff|turnover/i, text: 'Largest controllable cost and a key service quality lever.' },
    { match: /energy|utility|waste/i, text: 'Major controllable cost with sustainability impact.' },
    { match: /uptime|downtime|maintenance|throughput|capacity/i, text: 'Ensures reliable operations and maximizes guest capacity.' },
    { match: /queue|wait|scan/i, text: 'Directly shapes guest experience and perceived value.' },
    { match: /capex|roi|roic|asset|turnover/i, text: 'Signals capital discipline and long-term value creation.' },
    { match: /market share|awareness|brand/i, text: 'Measures competitive position and long-term demand strength.' },
    { match: /repeat|retention|churn|lifetime/i, text: 'Indicates durable demand and predictable cash flows.' },
    { match: /acquisition cost|marketing roi/i, text: 'Tracks efficiency of growth and demand generation spend.' },
    { match: /weather|currency|tourism/i, text: 'Highlights external volatility and portfolio resilience.' }
  ];

  const matched = keywordRules.find(rule => rule.match.test(kpi.name));
  if (matched) return matched.text;

  const categoryDefaults = {
    'Revenue Growth': 'Drives top-line scale and supports margin leverage.',
    'Margin Expansion': 'Protects profitability and funds strategic reinvestment.',
    'Capital Efficiency': 'Ensures capital is deployed where returns are strongest.',
    'Risk and Portfolio Stability': 'Reduces volatility and protects the brand portfolio.',
    'Global Customer Metrics': 'Signals loyalty and long-term customer value.',
    'Regional Revenue Performance': 'Tracks the core revenue engine and park portfolio health.',
    'Regional Demand Pricing': 'Optimizes yield across peak and off-peak demand.',
    'Regional Operational Efficiency': 'Improves throughput, service levels, and cost control.',
    'Regional Risk and Market Health': 'Monitors external shocks and marketing efficiency.',
    'Daily Revenue KPIs': 'Measures daily monetization and cash generation.',
    'Guest Experience KPIs': 'Maintains guest satisfaction and repeat intent.',
    'Ride and Operational KPIs': 'Ensures reliability, safety, and capacity utilization.',
    'Cost Control KPIs': 'Protects margins through controllable cost discipline.'
  };

  return categoryDefaults[kpi.category] || 'Supports overall performance and strategic alignment.';
}

function getThresholds(kpi) {
  const target = kpi.target !== undefined ? kpi.target : kpi.base;
  const warn = kpi.warn !== undefined
    ? kpi.warn
    : (kpi.direction === 'higher' ? target * 0.92 : target * 1.12);
  return { target, warn };
}

function formatValue(value, kpi) {
  if (!Number.isFinite(value)) return '--';
  switch (kpi.format) {
    case 'currency':
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: value >= 1000 ? 'compact' : 'standard',
        maximumFractionDigits: value >= 1000 ? 1 : 2
      }).format(value);
    case 'percent':
      return `${value.toFixed(1)}%`;
    case 'count':
      return new Intl.NumberFormat('en-US', {
        notation: value >= 1000 ? 'compact' : 'standard',
        maximumFractionDigits: value >= 1000 ? 1 : 0
      }).format(value);
    case 'index':
      return value.toFixed(2);
    case 'score':
      return value.toFixed(1);
    case 'ratio':
      return `${value.toFixed(2)}x`;
    case 'minutes':
      return `${value.toFixed(0)} min`;
    case 'seconds':
      return `${value.toFixed(0)} sec`;
    case 'rate':
      return `${value.toFixed(2)} /10k`;
    default:
      return value.toFixed(2);
  }
}

function getActualValue(kpi, entity) {
  const delta = seededOffset(`${kpi.id}-${entity.id}`) * entity.variance;
  const adjusted = kpi.base * (entity.factor + delta);
  return Math.max(0, adjusted);
}

function getStatus(kpi, actual) {
  const thresholds = getThresholds(kpi);
  if (kpi.direction === 'higher') {
    if (actual >= thresholds.target) return 'on-track';
    if (actual >= thresholds.warn) return 'at-risk';
    return 'off-track';
  }
  if (actual <= thresholds.target) return 'on-track';
  if (actual <= thresholds.warn) return 'at-risk';
  return 'off-track';
}

function statusLabel(status) {
  if (status === 'on-track') return 'On Target';
  if (status === 'at-risk') return 'At Risk';
  return 'Off Target';
}

function statusNote(status, kpi) {
  if (status === 'on-track') return kpi.direction === 'higher' ? 'Above target threshold.' : 'Below target threshold.';
  if (status === 'at-risk') return 'Inside watch band.';
  return kpi.direction === 'higher' ? 'Below watch band.' : 'Above watch band.';
}

function getCurrentEntity() {
  return ENTITIES.find(entity => entity.id === currentEntityId);
}

function getEntityKpis(entity) {
  return KPI_LIBRARY.filter(kpi => kpi.level === entity.level);
}

// ---- Dashboard Update ----
function updateDashboard() {
  const entity = getCurrentEntity();
  if (!entity) return;

  const kpis = getEntityKpis(entity);
  let onTrack = 0;
  let atRisk = 0;
  let offTrack = 0;

  kpis.forEach(kpi => {
    const actual = getActualValue(kpi, entity);
    const status = getStatus(kpi, actual);
    if (status === 'on-track') onTrack++;
    else if (status === 'at-risk') atRisk++;
    else offTrack++;
  });

  const total = kpis.length;
  const score = total ? Math.round(((onTrack + atRisk * 0.5) / total) * 100) : 0;

  $countOn.textContent = onTrack;
  $countRisk.textContent = atRisk;
  $countOff.textContent = offTrack;
  $countT.textContent = total;

  $scoreVal.textContent = `${score}%`;
  if (score >= 80) {
    $scoreVal.style.color = 'var(--green)';
  } else if (score >= 60) {
    $scoreVal.style.color = 'var(--amber)';
  } else {
    $scoreVal.style.color = 'var(--red)';
  }
}

// ---- Render Table ----
function renderTable(animate) {
  $tableBody.innerHTML = '';
  let rowNum = 0;

  const entity = getCurrentEntity();
  if (!entity) return;

  const kpis = getEntityKpis(entity);

  const categories = {};

  kpis.forEach(kpi => {
    const actual = getActualValue(kpi, entity);
    const status = getStatus(kpi, actual);

    if (currentFilter !== 'all' && status !== currentFilter) return;

    if (!categories[kpi.category]) {
      categories[kpi.category] = {
        name: kpi.category,
        items: []
      };
    }

    categories[kpi.category].items.push({
      kpi,
      actual,
      status,
      thresholds: getThresholds(kpi)
    });
  });

  Object.values(categories).forEach(cat => {
    const groupElement = document.createElement('div');
    groupElement.className = 'theme-group';

    const divider = document.createElement('div');
    divider.className = 'category-divider collapsed';

    let itemsHTML = '<div style="display: flex; flex-wrap: wrap; overflow: visible; gap: 10px; align-items: stretch; justify-content: flex-start; width: 100%; padding-bottom: 4px;">';

    cat.items.forEach(item => {
      const { kpi, actual, status, thresholds } = item;
      const tooltipContent = `Definition: ${kpi.description}\nWhy it matters: ${getImportance(kpi)}\nDrivers: ${kpi.drivers}\nTarget: ${formatValue(thresholds.target, kpi)} | Watch: ${formatValue(thresholds.warn, kpi)}`;

      itemsHTML += `
        <div class="pill-tooltip" data-kpi-id="${kpi.id}">
          <div class="item-pill ${status}">
            <div style="display:flex; justify-content:flex-start; align-items:center; gap: 6px; margin-bottom: 6px; font-weight: 700; font-size: 12px;">
              <span>${statusLabel(status)}</span>
            </div>
            <div class="pill-title">${kpi.name}</div>
            <div class="pill-meta">Actual: ${formatValue(actual, kpi)}</div>
          </div>
          <span class="tooltiptext">${tooltipContent}</span>
        </div>
      `;
    });
    itemsHTML += '</div>';

    divider.innerHTML = `
      <div style="display: flex; flex-direction: row; align-items: flex-start; width: 100%; gap: 16px;">
        <div class="category-tag-wrapper" style="width: 260px; flex-shrink: 0; padding-top: 2px;">
          <div class="category-tag">${cat.name}</div>
        </div>
        <div style="flex-grow: 1; min-width: 0;">
          ${itemsHTML}
        </div>
        <span class="theme-chevron" style="flex-shrink: 0; align-self: center;">&#9660;</span>
      </div>
    `;
    groupElement.appendChild(divider);

    const contentElement = document.createElement('div');
    contentElement.className = 'theme-content collapsed';

    const headerRow = document.createElement('div');
    headerRow.className = 'table-header-row';
    headerRow.style.background = 'var(--surface)';
    headerRow.innerHTML = `
      <div class="th">#</div>
      <div class="th">KPI / Definition</div>
      <div class="th">Target and Thresholds</div>
      <div class="th">Actual and Notes</div>
    `;
    contentElement.appendChild(headerRow);

    divider.addEventListener('click', (e) => {
      const collapseOthers = () => {
        const allContents = $tableBody.querySelectorAll('.theme-content');
        const allDividers = $tableBody.querySelectorAll('.category-divider');
        allContents.forEach(c => {
          if (c !== contentElement) c.classList.add('collapsed');
        });
        allDividers.forEach(d => {
          if (d !== divider) d.classList.add('collapsed');
        });
      };

      const tooltip = e.target.closest('.pill-tooltip');
      if (tooltip) {
        e.stopPropagation();
        const kpiId = tooltip.getAttribute('data-kpi-id');
        collapseOthers();
        contentElement.classList.remove('collapsed');
        divider.classList.remove('collapsed');

        const kpiRow = contentElement.querySelector(`.reg-row[data-id="${kpiId}"]`);
        if (kpiRow) {
          setTimeout(() => {
            kpiRow.scrollIntoView({ behavior: 'smooth', block: 'center' });
            kpiRow.classList.add('expanded');
            const detail = kpiRow.querySelector('.row-detail');
            if (detail) detail.classList.add('open');

            kpiRow.style.backgroundColor = 'rgba(15, 118, 110, 0.12)';
            setTimeout(() => { kpiRow.style.backgroundColor = ''; }, 1500);
          }, 50);
        }
        return;
      }

      const isCurrentlyCollapsed = contentElement.classList.contains('collapsed');
      if (isCurrentlyCollapsed) {
        collapseOthers();
        contentElement.classList.remove('collapsed');
        divider.classList.remove('collapsed');
      } else {
        contentElement.classList.add('collapsed');
        divider.classList.add('collapsed');
      }
    });

    cat.items.forEach(item => {
      const { kpi, actual, status, thresholds } = item;
      rowNum++;

      const row = document.createElement('div');
      row.className = 'reg-row';
      row.setAttribute('data-id', kpi.id);
      row.setAttribute('data-status', status);

      if (animate) {
        row.classList.add('scanning');
        row.style.animationDelay = (rowNum * 30) + 'ms';
      }

      const thresholdText = kpi.direction === 'higher'
        ? `Target >= ${formatValue(thresholds.target, kpi)} | Watch ${formatValue(thresholds.warn, kpi)}-${formatValue(thresholds.target, kpi)}`
        : `Target <= ${formatValue(thresholds.target, kpi)} | Watch ${formatValue(thresholds.target, kpi)}-${formatValue(thresholds.warn, kpi)}`;

      const evidenceHTML = `
        <div class="evidence-cell">
          Actual: <strong>${formatValue(actual, kpi)}</strong>
          <div class="metric-kv">${statusNote(status, kpi)}</div>
        </div>
      `;

      row.innerHTML = `
        <div class="row-num">${String(rowNum).padStart(2, '0')}</div>
        <div>
          <div class="reg-name">${kpi.name}</div>
          <div class="reg-desc">${kpi.description}</div>
        </div>
        <div class="reg-trigger">${thresholdText}</div>
        <div class="status-evidence-cell">
          <div>
            <div class="status-badge ${status}">
              <div class="status-dot"></div>
              ${statusLabel(status)}
            </div>
          </div>
          ${evidenceHTML}
        </div>
        <span class="chevron">&#9660;</span>
        <div class="row-detail" id="detail-${kpi.id}">
          <div class="detail-grid">
            <div class="detail-box">
              <div class="detail-box-title">Definition</div>
              <div class="detail-box-body">${kpi.description}</div>
            </div>
            <div class="detail-box">
              <div class="detail-box-title">Why It Matters</div>
              <div class="detail-box-body">${getImportance(kpi)}</div>
            </div>
            <div class="detail-box">
              <div class="detail-box-title">Thresholds</div>
              <div class="detail-box-body">Target: ${formatValue(thresholds.target, kpi)}<br>Watch: ${formatValue(thresholds.warn, kpi)}</div>
            </div>
            <div class="detail-box">
              <div class="detail-box-title">Owner and Cadence</div>
              <div class="detail-box-body">${kpi.owner} - ${kpi.cadence}</div>
            </div>
            <div class="detail-box">
              <div class="detail-box-title">Primary Drivers</div>
              <div class="detail-box-body">${kpi.drivers}</div>
            </div>
          </div>
        </div>
      `;

      row.addEventListener('click', (e) => {
        if (e.target.closest('.pill-tooltip')) return;
        row.classList.toggle('expanded');
        const detail = row.querySelector('.row-detail');
        detail.classList.toggle('open');
      });

      contentElement.appendChild(row);
    });

    groupElement.appendChild(contentElement);
    $tableBody.appendChild(groupElement);
  });
}

// ---- Modals ----
function openDictionary() {
  const body = document.getElementById('dictionaryBody');
  let html = '';
  let lastGroup = '';
  let num = 0;

  const sorted = [...KPI_LIBRARY].sort((a, b) => {
    if (a.level !== b.level) return a.level.localeCompare(b.level);
    if (a.category !== b.category) return a.category.localeCompare(b.category);
    return a.name.localeCompare(b.name);
  });

  sorted.forEach(kpi => {
    const group = `${kpi.level.toUpperCase()} - ${kpi.category}`;
    if (group !== lastGroup) {
      if (lastGroup) html += '</div>';
      html += `<div class="rules-group"><div class="rules-group-title">${group}</div>`;
      lastGroup = group;
    }
    num++;
    const thresholds = getThresholds(kpi);
    html += `
      <div class="rule-item">
        <div class="rule-num">${String(num).padStart(2, '0')}</div>
        <div class="rule-content">
          <div class="rule-name">${kpi.name}</div>
          <div class="rule-meta">
            <span class="rule-cite">Target ${formatValue(thresholds.target, kpi)} | Watch ${formatValue(thresholds.warn, kpi)}</span>
            <span class="level-badge ${kpi.level}">${kpi.level.toUpperCase()}</span>
          </div>
          <div class="rule-trigger-text">${kpi.description} — ${getImportance(kpi)}</div>
        </div>
      </div>`;
  });
  if (lastGroup) html += '</div>';
  body.innerHTML = html;
  openModal('dictionaryModal');
}

function openLogic() {
  const body = document.getElementById('logicBody');
  body.innerHTML = `
    <div class="detail-grid">
      <div class="detail-box">
        <div class="detail-box-title">Strategic Alignment</div>
        <div class="detail-box-body">Corporate KPIs align to EBITDA and ROIC. Regional KPIs focus on revenue per park and margin. Local KPIs anchor on revenue per guest and cost control.</div>
      </div>
      <div class="detail-box">
        <div class="detail-box-title">Cascading Logic</div>
        <div class="detail-box-body">Park improves cross-sell => regional revenue improves. Region improves pricing mix => corporate margin improves. Corporate allocates capex wisely => regions improve ROI.</div>
      </div>
      <div class="detail-box">
        <div class="detail-box-title">Threshold Rules</div>
        <div class="detail-box-body">On Target = meeting target. At Risk = within watch band. Off Target = outside watch band. Targets are tuned by KPI direction (higher or lower is better).</div>
      </div>
      <div class="detail-box">
        <div class="detail-box-title">Status Colors</div>
        <div class="detail-box-body">Green indicates on target, amber indicates watch, red indicates off target. Values auto-scale by scope and seasonality.</div>
      </div>
    </div>
  `;
  openModal('logicModal');
}

function openModal(id) {
  document.getElementById(id).classList.add('open');
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
}

// ---- Entity Switching ----
function selectEntity(entityId) {
  currentEntityId = entityId;

  document.querySelectorAll('.school-tab').forEach(tab => {
    tab.classList.toggle('active', tab.getAttribute('data-entity') === entityId);
  });

  updateDashboard();
  renderTable();
}

// ---- Boot ----
(function init() {
  updateDashboard();
  renderTable();
})();

// ---- EVENT BINDINGS ----

document.getElementById('schoolTabs').addEventListener('click', (e) => {
  const tab = e.target.closest('.school-tab');
  if (!tab) return;
  selectEntity(tab.getAttribute('data-entity'));
});

document.getElementById('filterBar').addEventListener('click', (e) => {
  const chip = e.target.closest('.filter-chip');
  if (!chip) return;

  const filter = chip.getAttribute('data-filter');
  const scope = chip.getAttribute('data-scope');

  if (filter) {
    currentFilter = filter;
    document.querySelectorAll('.filter-chip[data-filter]').forEach(c => c.classList.remove('active-filter'));
    chip.classList.add('active-filter');
    renderTable();
  }

  if (scope) {
    const entity = ENTITIES.find(item => item.level === scope);
    if (entity) selectEntity(entity.id);
  }
});

// Header buttons
document.getElementById('btnDictionary').addEventListener('click', openDictionary);
document.getElementById('btnLogic').addEventListener('click', openLogic);

// Modal close buttons
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    const modalId = btn.getAttribute('data-close');
    closeModal(modalId);
  });
});

// Click outside modal to close
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal(overlay.id);
    }
  });
});

// ESC to close modals
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => {
      closeModal(m.id);
    });
  }
});
