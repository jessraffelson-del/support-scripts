# API Support Scripts

A collection of lightweight Python scripts for API troubleshooting, endpoint validation, and integration debugging. Built for support engineering contexts where speed, readability, and clear output matter more than elegance.

---

## Philosophy

In support engineering, **understanding beats elegance**. Every script here is written to be readable by any teammate at a glance, with explicit error handling and clear output that makes failures as informative as successes.

---

## Scripts

### `nametag_test.py` — Endpoint Health Check

Tests a list of HTTP endpoints and reports status codes with clear pass/fail output. Handles common failure modes explicitly including timeouts, connection errors, SSL certificate issues, and redirect loops.

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
