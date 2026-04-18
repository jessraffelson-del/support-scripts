import requests

def check_endpoint(url, expected_status=200):
    try:
        response = requests.get(url, timeout=5)
        status = response.status_code
        result = "✅ OK" if status == expected_status else f"❌ UNEXPECTED ({status})"
        print(f"{result} - {url}")
        return status
    except requests.exceptions.Timeout:
        print(f"⏱️ TIMEOUT - {url}")
    except requests.exceptions.ConnectionError:
        print(f"🔴 CONNECTION ERROR - {url}")
    except requests.exceptions.TooManyRedirects:
        print(f"🔄 TOO MANY REDIRECTS - {url}")
    except requests.exceptions.SSLError:
        print(f"🔒 SSL CERTIFICATE ERROR - {url}")
    except requests.exceptions.InvalidURL:
        print(f"⚠️ INVALID URL - {url}")
    except requests.exceptions.RequestException as e:
        print(f"❌ UNKNOWN ERROR - {url} - {e}")