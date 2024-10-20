// =================================================================== >> improts <<
//
// Fetch Data >
import { postData } from "./modules/Fetch_Module/fetch_module.js";
// Fetch Data <
//
// Cookie >
import {
  setMinuteCookie,
  setMonthCookie,
} from "./modules/Cookie_module/cookie.js";
// Cookie <
//
// wave SVG >
import { WaveSvg } from "./assets/svg/wave.js";
// wave SVG <
//
// Animation >
import { AuthAnimation } from "./Widget/Auth_Animation.js";
// Animation <
//
// convertor >
import { FaToEn } from "./modules/Perisian_Convertor/perisan_convertor.js";
// convertor <
//
// =================================================================== >> improts <<
//
// ==================================================================== >> Layers <<
//
// layer 1 >>
const Layer1 = document.querySelector(".Layer1");
const BG_1 = document.querySelector("#BG_1");
// layer 1 <<
//
// layer 2 >>
const Layer2 = document.querySelector(".Layer2");
const BG_2 = document.querySelector("#BG_2");
// layer 2 <<
//
// layer 3 >>
const Layer3 = document.querySelector(".Layer3");
const BG_3 = document.querySelector("#BG_3");
// layer 3 <<
//
// layer 4 >>
const Layer4 = document.querySelector(".Layer4");
const BG_4 = document.querySelector("#BG_4");
// layer 4 <<
//
// ==================================================================== >> Layers <<
//
// =================================================================== >> Layer 1 <<
//
// ---------------------------------------------------- >> call back <<
const SVG = WaveSvg();
// ---------------------------------------------------- >> call back <<
//
// ------------------------------------------------- >> append child <<
BG_1.appendChild(SVG);
// ------------------------------------------------- >> append child <<
//
// =================================================================== >> Layer 1 <<
//
// =================================================================== >> Layer 2 <<
//
// ----------------------------------------------------- > Variables <
const massageContainer = document.querySelector(".massageContainer");
const MassageText = document.querySelector(".MassageText");
const MassageIcon = document.querySelector(".MassageIcon");
const otpContainer = document.querySelector(".otpContainer");
const OTPBtn = document.querySelector("#OTPBtn");
const optFeild = document.querySelectorAll(".optFeild");
// ----------------------------------------------------- > Variables <
//
// --------------------------------------------------------- > Phone <
//
// --------------------------------------------- variables >
const PhoneNumberSubmit = document.querySelector("#PhoneNumberSubmit");
const PhoneFeild = document.querySelector(".PhoneFeild");
const BtnText = document.querySelector(".CheckBtn span");
let PhoneNumberApi = "https://hiwearedevelopers.monster/auth/send-otp";
let phonenumber = "";
// --------------------------------------------- variables <
//
// ---------------------------------------------------- EL >
PhoneNumberSubmit.addEventListener("click", () => {
  phoneValidator(PhoneFeild);
});
// ---------------------------------------------------- EL <
//
// --------------------------------------------- Validator >
function phoneValidator(Input) {
  // > variables <
  PhoneNumberSubmit.classList.add("pop");
  const feildinput = Input.value.trim();
  const data = {
    phone_number: FaToEn(`${feildinput}`),
  };
  phonenumber = feildinput;
  // > variables <

  const regex = /^\d+$/;

  if (regex.test(!feildinput) || feildinput.length < 11) {
    setTimeout(() => {
      PhoneNumberSubmit.classList.remove("pop");
    }, 2500);
    const className = "error";
    const ErrorText = "شماره وارد شده اشتباه است";
    const MassageIcon = "icon-park-solid:error";
    MassageCallBack(className, ErrorText, MassageIcon);
  }
  //
  // > post data <
  else {
    postData(PhoneNumberApi, data)
      .then((response) => {
        //
        // ClassManagemnet >>
        setTimeout(() => {
          PhoneNumberSubmit.classList.remove("pop");
        }, 2500);
        // ClassManagemnet <<
        //
        // status 200 >>
        if (response.status == 200) {
          OTPBtn.classList.add("show");
          PhoneNumberSubmit.classList.add("remove");
          PhoneFeild.classList.add("remove");
          PhoneFeild.classList.remove("error");
          otpContainer.classList.add("show");
          setMinuteCookie("phone_number", `${feildinput}`, 5);
        }
        // status 200 <<
        //
        // status 401 >>
        else if (response.status == 401) {
          const className = "error";
          const ErrorText = "شماره وارد شده در باشگاه مشتریان وجود دارد";
          const MassageIcon = "icon-park-solid:error";
          PhoneFeild.classList.add(`${className}`);
          MassageCallBack(className, ErrorText, MassageIcon);
        }
        // status 401 <<
        //
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // > post data <
}
// --------------------------------------------- Validator <
//
// --------------------------------------------------------- > Phone <
//
// ----------------------------------------------------------- > otp <
//
// ------------------------------------------------- OTP btn >
OTPBtn.addEventListener("click", () => {
  // class managemnet >
  optFeild.forEach((feild) => {
    feild.classList.remove("loading");

    if (feild.classList.contains("error")) {
      feild.classList.remove(`error`);
    }

    if (feild.classList.contains("check")) {
      feild.classList.remove(`check`);
    }
  });
  inputs.forEach((inputValue) => {
    inputValue.value = "";
  });
  PhoneNumberSubmit.classList.remove("remove");
  PhoneNumberSubmit.classList.remove("pop");
  OTPBtn.classList.remove("show");
  PhoneFeild.classList.remove("remove");
  otpContainer.classList.remove("show");
  // class managemnet <
});
// ------------------------------------------------- OTP btn <
//
// ----------------------------------------------- variables >
const inputs = document.querySelectorAll(".otpContainer input");
// ----------------------------------------------- variables <
//
// ------------------------------------- otp input functions >
inputs.forEach((input, index) => {
  input.dataset.index = index;
  input.addEventListener("paste", handleOtpPaste);
  input.addEventListener("keyup", handleOtp);
});
// ------------------------------------- otp input functions <
//
// ---------------------------------------- handle otp paste >
function handleOtpPaste(e) {
  const data = e.clipboardData.getData("text");
  const value = data.split("");
  if (value.length === inputs.length) {
    inputs.forEach((input, index) => (input.value = value[index]));
    // otpSubmit();
  }
}
// ---------------------------------------- handle otp paste <
//
// ---------------------------------------- handle otp paste >
function handleOtp(e) {
  let input = e.target;
  let value = input.value;
  input.value = "";
  input.value = value ? value[0] : "";

  let feildIndex = input.dataset.index;
  if (value.length > 0 && feildIndex < inputs.length - 1) {
    input.nextElementSibling.focus();
  }
  if (e.key === "Backspace" && feildIndex > 0) {
    input.previousElementSibling.focus();
  }
  if (
    feildIndex == inputs.length - 1 &&
    value.length > 0 &&
    e.key !== "Backspace"
  ) {
    otpSubmit();
  }
}
// ---------------------------------------- handle otp paste <
//
// ---------------------------------------------- otp submit >
function otpSubmit() {
  // >> otp value <<
  let otp = "";
  inputs.forEach((inputValue) => {
    otp += inputValue.value;
  });
  // >> otp value <<
  //
  // >> data for post <<
  let SendOtpApi = "https://hiwearedevelopers.monster/auth/verify-otp";
  const englishOtp = otp;
  const data = {
    phone_number: FaToEn(`${phonenumber}`),
    code: FaToEn(`${englishOtp}`),
  };
  // >> data for post <<
  //
  // ClassManagemnet >>
  optFeild.forEach((feild) => {
    feild.classList.add("loading");
  });
  // ClassManagemnet <<
  //
  // >> post code <<
  postData(SendOtpApi, data)
    .then((response) => {
      // status 200 >>
      if (response.status == 200) {
        const className = "check";
        const ResponseText = "احراز هویت با موفقیت انجام شد";
        const ResponseIcon = "line-md:check-all";
        optFeild.forEach((feild) => {
          feild.classList.remove("loading");
          if (feild.classList.contains("error")) {
            feild.classList.remove(`error`);
            feild.classList.add(`${className}`);
          } else {
            feild.classList.add(`${className}`);
          }
        });
        MassageCallBack(className, ResponseText, ResponseIcon);
        Layer2.classList.add("remove");
        setTimeout(() => {
          setMonthCookie("phone_number", phonenumber, 5);
          const Page = `./Screens/signup_club/index.html`;
          window.open(Page, "_blank");
          window.location.reload();
        }, 1000);
      }
      // status 200 >>
      //
      // status 201 >>
      if (response.status == 201) {
        const className = "check";
        const ResponseText = "احراز هویت با موفقیت انجام شد";
        const ResponseIcon = "line-md:check-all";
        optFeild.forEach((feild) => {
          feild.classList.remove("loading");
          if (feild.classList.contains("error")) {
            feild.classList.remove(`error`);
            feild.classList.add(`${className}`);
          } else {
            feild.classList.add(`${className}`);
          }
        });
        MassageCallBack(className, ResponseText, ResponseIcon);
        Layer2.classList.add("remove");
        setTimeout(() => {
          setMonthCookie("token", response.data.token, 1);
          const Page = `${response.data.url}`;
          window.open(Page, "_blank");
          window.location.reload();
        }, 500);
      }
      // status 201 <<
      //
      // status 400 >>
      else if (response.status == 400) {
        const className = "error";
        const ResponseText = "کد پیدا نشد یا منقضی شده است";
        const ResponseIcon = "icon-park-solid:error";
        optFeild.forEach((feild) => {
          feild.classList.remove("loading");
          feild.classList.add(`${className}`);
        });
        MassageCallBack(className, ResponseText, ResponseIcon);
      }
      // status 400 <<
      //
      // status 401 >>
      else if (response.status == 401) {
        const className = "error";
        const ResponseText = "کد پیدا منقضی شده است";
        const ResponseIcon = "icon-park-solid:error";
        optFeild.forEach((feild) => {
          feild.classList.remove("loading");
          feild.classList.add(`${className}`);
        });
        MassageCallBack(className, ResponseText, ResponseIcon);
      }
      // status 401 <<
      //
      // status 402 >>
      else if (response.status == 402) {
        const className = "error";
        const ResponseText = "کد اشتباه است";
        const ResponseIcon = "icon-park-solid:error";
        optFeild.forEach((feild) => {
          feild.classList.remove("loading");
          feild.classList.add(`${className}`);
        });
        MassageCallBack(className, ResponseText, ResponseIcon);
      }
      // status 402 <<
      //
    })
    .catch((error) => {
      const className = "error";
      const ResponseText = "خطای سیستمی";
      const ResponseIcon = "icon-park-solid:error";
      optFeild.forEach((feild) => {
        feild.classList.remove("loading");
        feild.classList.add(`${className}`);
      });
      MassageCallBack(className, ResponseText, ResponseIcon);
    });
  // >> post code <<
}
// ---------------------------------------------- otp submit <
//
// ----------------------------------------------------------- > otp <
//
// ----------------------------------------------------- > Animation <
//
// ----------------------------------------- variables >
const AuthContainer = document.querySelector(".AuthContainer");
// ----------------------------------------- variables <
//
// ------------------------------------------ callback >
const Animation = AuthAnimation();
// ------------------------------------------ callback <
//
// -------------------------------------- append child >
AuthContainer.appendChild(Animation);
// -------------------------------------- append child <
//
// ----------------------------------------------------- > Animation <
//
// =================================================================== >> Layer 2 <<
//
// =================================================================== >> Layer 3 <<
function MassageCallBack(classname, Text, Icon) {
  Layer3.classList.add("pop");
  massageContainer.classList.add(`${classname}`);
  MassageText.textContent = Text;
  MassageIcon.setAttribute("icon", `${Icon}`);

  setTimeout(() => {
    Layer3.classList.remove("pop");
  }, 2000);

  setTimeout(() => {
    massageContainer.classList.remove(`${classname}`);
  }, 2500);
}
// =================================================================== >> Layer 3 <<
//
// =================================================================== >> Layer 4 <<
//
// =================================================================== >> Layer 4 <<
//
// ======================================================================= >> DOM <<
window.addEventListener("DOMContentLoaded", () => {});
// ======================================================================= >> DOM <<
