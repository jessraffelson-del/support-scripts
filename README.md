# API Support Scripts

A collection of lightweight scripts for API troubleshooting, endpoint validation, and integration debugging. Built for support engineering contexts where speed, readability, and clear output matter[...]

---

## Philosophy

In support engineering, **understanding beats elegance**. Every script here is written to be readable by any teammate at a glance, with explicit error handling and clear output that makes failures [...]

---

## Scripts

### `nametag_test.py` — Endpoint Health Check

Tests a list of HTTP endpoints and reports status codes with clear pass/fail output. Handles common failure modes explicitly including timeouts, connection errors, SSL certificate issues, and redi[...]

**Use case:** Quickly verify whether a set of API endpoints are reachable and returning expected status codes. Useful as a first diagnostic step when a customer reports integration failures.

**Usage:**
```bash
python3 nametag_test.py
```

**Output:**
```
Nametag Endpoint Health Check
-----------------------------------
✅ OK - https://getnametag.com
✅ OK - https://getnametag.com/careers
✅ OK - https://getnametag.com/docs/
❌ UNEXPECTED (404) - https://getnametag.com/nonexistent
```

**Error handling covers:**
- Timeout — server didn't respond within 5 seconds
- Connection error — server unreachable, DNS failure, network down
- SSL error — invalid, expired, or mismatched certificate
- Too many redirects — redirect loop or misconfiguration
- Invalid URL — malformed URL in configuration
- Unknown errors — catch-all for unexpected failures

---

### `jesttest.js` — Lightweight API integration smoke tests (Jest)

A small set of Jest-based smoke tests that exercise basic REST endpoints for a local API. These tests are intended as a quick sanity check during development or when validating a local integration before running heavier e2e suites.

Use case: Rapidly confirm the API server on localhost:4000 serves the expected product and order payloads and returns appropriate HTTP status codes.

What it checks:
- GET /api/products returns a 200 and an array of products (expected length: 3)
- GET /api/products/1 returns a 200 and the expected product shape (id '1', name 'Wireless Headphones')
- GET /api/orders returns a 200 and an array
- GET /api/products/999 returns a 404 for unknown product

Dependencies
- Node.js (recommended: Node 18+ which provides a global fetch)
- jest

If you are running on Node <18, add a fetch polyfill such as node-fetch or cross-fetch and configure Jest to load it before tests (see "Notes" below).

Usage
```bash
# Install dev dependencies (run in repo root)
npm init -y
npm install --save-dev jest

# If using a fetch polyfill on Node <18:
# npm install --save-dev node-fetch
# Add a jest setup file that sets global.fetch = require('node-fetch');

# Run the tests
npx jest jesttest.js
```

Example output (abbreviated)
```
 PASS  ./jesttest.js
  ✓ REST products endpoint returns all products (xx ms)
  ✓ REST single product endpoint returns correct product (xx ms)
  ✓ REST orders endpoint returns all orders (xx ms)
  ✓ REST unknown product returns 404 (xx ms)

Test Suites: 1 passed, 1 total
Tests:       4 passed, 4 total
```

Notes and troubleshooting
- The test file uses BASE_URL = 'http://localhost:4000'. If your API runs on a different host/port, edit jesttest.js or override the constant before running.
- If you see fetch is not defined, either:
  - Run on Node 18+ (global fetch available), or
  - Install a polyfill (node-fetch/cross-fetch) and add a Jest setup file that assigns it to globalThis.fetch.
- These are smoke tests — they assert simple expectations (including an expected products count and a string id). Adjust assertions to match your API contract if it differs.

---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/jessraffelson-del/support-scripts.git
cd support-scripts

# Create and activate virtual environment
python3 -m venv venv
source venv/bin/activate

# Install dependencies
pip3 install requests

# Run a script
python3 nametag_test.py
```

---

## Adding Scripts

Each script should:
- Handle failures explicitly with informative output
- Include a comment explaining the use case
- Prioritize readability over brevity
- Be runnable independently

---

## Background

Built while preparing for technical support engineering roles to develop practical scripting skills for API debugging and integration troubleshooting.
