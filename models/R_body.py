#
# * --> This file is for request's bodys model
#


# import from packages
from typing import List
from typing import Optional
from pydantic import BaseModel

# * Define a Pydantic model for the request body


# send OTP
class OTPRequest(BaseModel):
    phone_number: str


# verify OTP
class VerifyOTPRequest(BaseModel):
    code: str
    phone_number: str


# signup club
class SignupClubRequest(BaseModel):
    job: str
    name: str
    address: str
    is_male: bool
    mrg_date: str
    birth_date: str
    is_marriage: bool
    phone_number: str
    national_code: str


# edit user
class EditUserRequest(BaseModel):
    job: Optional[str] = None
    name: Optional[str] = None
    address: Optional[str] = None
    is_male: Optional[bool] = None
    mrg_date: Optional[str] = None
    birth_date: Optional[str] = None
    is_marriage: Optional[bool] = None
    phone_number: Optional[str] = None
    national_code: Optional[str] = None


# edit user's points
class EditUserPointRequest(BaseModel):
    points: int
    phone_number: str


# send SMS to...
class SendSMSToRequest(BaseModel):
    txt: str
    filter_index: int
    phone_numbers: List[str]


# edit auto SMS text body
class EditAutoSMSBody(BaseModel):
    str_id: str
    text: str
