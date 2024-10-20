# import from packages
import requests
from dotenv import load_dotenv


# init
config = load_dotenv()


# SMS panel URL
url = config["panel_url"]


# this function can send OTP code to client by API
async def send_code(code: str, phone_number: str, template: str):

    # set request's data
    headers = {
        "content-type": "application/x-www-form-urlencoded",
        "apikey": config["panel_api_key"],
        "cache-control": "no-cache",
    }
    payload = f"receptor={phone_number}&template={template}&type=1&param1={code}"

    response = requests.request("POST", url, data=payload, headers=headers)
    res = response.json()

    if res["result"]["code"] == 200:
        return 200
    else:
        return 409
