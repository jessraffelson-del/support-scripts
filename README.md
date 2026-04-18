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
