# import from packages
from typing import List
from datetime import date
from pydantic import BaseModel


# today in string
current_date_str = str(date.today())


# SMS history model --> for save history of SMS sending
class SMShistoryModel(BaseModel):
    text: str
    msg_amoot_id: str
    sentNumber: List[str]
    sendDay: str = current_date_str


class AutoSMSModel(BaseModel):
    text: str
    sms_type: str


# ! DEV model
class auto_body(BaseModel):
    text: str
    msg_amoot_id: str
