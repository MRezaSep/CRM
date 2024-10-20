# import from packages
from typing import List
from datetime import date
from pydantic import BaseModel, Field


# today in string
current_date_str = str(date.today())


# User Model
class User(BaseModel):
    name: str
    phone_number: str
    address: str
    national_code: str
    job: str
    is_male: bool
    is_marriage: bool
    birth_date: str
    mrg_date: str = Field(default="")
    signup_date: str = current_date_str
    user_type: str = Field(default="user")
    avatar_image: str = Field(default="")
    points: int = Field(default=0)
    wallet: int = Field(default=0)
    discounts: List = []
