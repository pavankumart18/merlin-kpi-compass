# Merlin KPI Compass - Performance Dashboard

A static KPI dashboard for Merlin Entertainments that visualizes Global, Regional, and Local performance metrics with threshold-based status (On Target, At Risk, Off Target). The UI keeps the original structure but replaces all compliance content with the Merlin KPI hierarchy.

![Theme](https://img.shields.io/badge/theme-light-0f766e) ![Stack](https://img.shields.io/badge/stack-HTML%20%2B%20CSS%20%2B%20JS-orange) ![KPIs](https://img.shields.io/badge/kpis-60%2B-brightgreen)

---

## Quick Start

### Prerequisites

- Node.js (v16 or later)
- npm (comes with Node.js)

### Setup

```bash
# 1. Install dependencies
npm install

# 2. Start a local server
npx serve .
```

Then open **http://localhost:3000** in your browser.

> **Note:** The app must be served over HTTP (not `file://`) for `fetch()` calls to work correctly.

---

## Project Structure

```
school-compliance-checker/
+-- index.html       # Main dashboard page
+-- styles.css       # Dashboard styles
+-- script.js        # KPI logic + thresholds
+-- package.json
+-- README.md
```

---

## Features

### Dashboard (`index.html`)

- **Scope Switching** - Corporate HQ, Regions, and Theme Parks
- **KPI Health Score** - Color-coded rollup by scope
- **Summary Strip** - On Target / At Risk / Off Target counts
- **Filter Chips** - Filter KPIs by status or jump to scope
- **KPI Matrix** - Grouped by category with expandable detail rows
- **KPI Dictionary** - Definitions + thresholds + level
- **Cascading Logic** - Corporate -> Regional -> Local linkage

---

## KPI Coverage

The dashboard includes KPI families from the provided PPT scope:

- Global: Revenue Growth, Margin Expansion, Capital Efficiency, Risk & Portfolio Stability, Global Customer Metrics
- Regional: Revenue Performance, Demand Pricing, Operational Efficiency, Risk & Market Health
- Local: Daily Revenue, Guest Experience, Ride & Operational, Cost Control

---

## Customizing KPI Values

KPI definitions live in `script.js`. Each KPI is declared using `addKpi(...)` with:

- `description` - what the KPI measures
- `importance` - why it matters (optional override)
- `base`, `target`, `warn` - thresholds and actuals
- `format`, `direction` - formatting and “higher/lower is better”

---

## License

ISC
