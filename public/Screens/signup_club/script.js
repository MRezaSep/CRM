// =================================================================== >> improts <<
//
// wave SVG >
import { WaveSvg } from "./../../assets/svg/wave.js";
// wave SVG <
//
// Cookie >
import {
  deleteCookie,
  getCookie,
} from "./../../modules/Cookie_module/cookie.js";
// Cookie <
//
// fetch data >
import { postData } from "./../../modules/Fetch_Module/fetch_module.js";
// fetch data <
//
// Convertor >
import {
  EnToFa,
  FaToEn,
} from "./../../modules/Perisian_Convertor/perisan_convertor.js";
// Convertor <
//
// Simple Feild >
import { SimpleFeild } from "./../../modules/SimpleFeild/SimpleFeild.js";
// Simple Feild <
//
// CheckBox >
import { CheckBox } from "./../../modules/CheckBox/checkbox.js";
// CheckBox <
//
// DatePicker >
import { DatePicker } from "./../../modules/Date_Picker/date_picker.js";
// DatePicker <
//
// =================================================================== >> improts <<

// ================================================================= >> Get Query <<
const ReceivedCookie = getCookie("phone_number");
// ================================================================= >> Get Query <<

// ==================================================================== >> Layers <<

// layer 1 >>
const Layer1 = document.querySelector(".Layer1");
const BG_1 = document.querySelector("#BG_1");
// layer 1 <<

// layer 2 >>
const Layer2 = document.querySelector(".Layer2");
const BG_2 = document.querySelector("#BG_2");
// layer 2 <<

// layer 3 >>
const Layer3 = document.querySelector(".Layer3");
const BG_3 = document.querySelector("#BG_3");
// layer 3 <<

// layer 4 >>
const Layer4 = document.querySelector(".Layer4");
const BG_4 = document.querySelector("#BG_4");
// layer 4 <<

// ==================================================================== >> Layers <<

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

// =================================================================== >> Layer 2 <<
//
// ----------------------------------------------------- > Variables <
const FormContianer = document.querySelector(".FormContianer");
// ----------------------------------------------------- > Variables <
//
// ---------------------------------------------------- > Form Title <
const FormTitle = document.createElement("h1");
FormTitle.classList.add("FormTitle");
//
// -------------------------------------- TextContent >
FormTitle.textContent = "مجموعه آبی و ورزشی نشاط";
// -------------------------------------- TextContent <
//
// -------------------------------------- appendChild >
FormContianer.appendChild(FormTitle);
// -------------------------------------- appendChild <
//
// ---------------------------------------------------- > Form Title <
//
// ----------------------------------------------------- > Form Text <
const FormText = document.createElement("h1");
FormText.classList.add("FormText");
//
// -------------------------------------- TextContent >
FormText.textContent = "اطلاعات را کامل کنید";
// -------------------------------------- TextContent <
//
// -------------------------------------- appendChild >
FormContianer.appendChild(FormText);
// -------------------------------------- appendChild <
//
// ----------------------------------------------------- > Form Text <
//
// ----------------------------------------------------- > User Name <
//
// ---------------------------------------- variables >>
const UserNameLabel = "نام و نام خانوادگی";
const UserNamePlaceholder = "نام کامل خود را وارد کنید   ";
// ---------------------------------------- variables <<
//
// ----------------------------------------- CallBack >>
const UserNameFeild = SimpleFeild(UserNameLabel, UserNamePlaceholder);
// ----------------------------------------- CallBack >>
//
// -------------------------------------- appendChild >>
FormContianer.appendChild(UserNameFeild.widget);
// -------------------------------------- appendChild <<
//
// ----------------------------------------------------- > User Name <
//
// ------------------------------------------------------- > Address <
//
// ---------------------------------------- variables >>
const AddressLabel = "آدرس";
const AddressPlaceholder = "آدرس خود را وارد کنید   ";
// ---------------------------------------- variables <<
//
// ----------------------------------------- CallBack >>
const AddressFeild = SimpleFeild(AddressLabel, AddressPlaceholder);
// ----------------------------------------- CallBack >>
//
// -------------------------------------- appendChild >>
FormContianer.appendChild(AddressFeild.widget);
// -------------------------------------- appendChild <<
//
// ------------------------------------------------------- > Address <
//
// ------------------------------------------------ > Flex Container <
const FormFlexContainer = document.createElement("div");
FormFlexContainer.classList.add("FormFlexContainer");
//
// --------------------------------- appendChild >>
FormContianer.appendChild(FormFlexContainer);
// --------------------------------- appendChild <<
//
// ------------------------------------------------ > Flex Container <
//
// -------------------------------------------------- > NationalCode <
//
// ---------------------------------------- variables >>
const NationalCodeLabel = "کد ملی";
const NationalCodePlaceholder = "کد ملی خود را وارد کنید   ";
// ---------------------------------------- variables <<
//
// ----------------------------------------- CallBack >>
const NationalCodeFeild = SimpleFeild(
  NationalCodeLabel,
  NationalCodePlaceholder
);

// ----------------------------------------- CallBack >>
//
// -------------------------------------- appendChild >>
FormFlexContainer.appendChild(NationalCodeFeild.widget);
NationalCodeFeild.Feild.setAttribute("maxlength", "10");
// -------------------------------------- appendChild <<
//
// -------------------------------------------------- > NationalCode <
//
// ----------------------------------------------------------- > Job <
//
// ---------------------------------------------- variables >>
const JobLabel = "شغل";
const JobPlaceholder = "شغل خود را وارد کنید   ";
// ---------------------------------------------- variables <<
//
// ----------------------------------------------- CallBack >>
const JobFeild = SimpleFeild(JobLabel, JobPlaceholder);
// ----------------------------------------------- CallBack >>
//
// -------------------------------------------- appendChild >>
FormFlexContainer.appendChild(JobFeild.widget);
// -------------------------------------------- appendChild <<
//
// ----------------------------------------------------------- > Job <
//
// ---------------------------------------------- > Flex Container 2 <
const FormFlexContainer2 = document.createElement("div");
FormFlexContainer2.classList.add("FormFlexContainer");
FormFlexContainer2.id = "FormFlexContainer2";
//
// --------------------------------- appendChild >>
FormContianer.appendChild(FormFlexContainer2);
// --------------------------------- appendChild <<
//
// -----------------------------------------------  Flex Container 2 <
//
// ------------------------------------------------------ > Marridge <
//
// ---------------------------------------------- variables >>
const MarridgeLabel = "وضعیت تاهل";
const MarridgeoxList = ["متاهل", "مجرد"];
const MarridgeOptionId = "MarridgeOptions";
let MarridgeValue = null;
// ---------------------------------------------- variables <<
//
// ----------------------------------------------- CallBack >>
const MarridgeFeild = CheckBox(
  MarridgeLabel,
  MarridgeoxList,
  MarridgeOptionId,
  (index) => {
    MarridgeListener(index);
  }
);
// ----------------------------------------------- CallBack >>
//
// ----------------------------------------------- Function >>
function MarridgeListener(index) {
  const MarridgeOptions = document.querySelectorAll("#MarridgeOptions");
  if (index == 0) {
    MarridgeOptions.forEach((element) => {
      element.classList.remove("active");
      element.classList.remove("error");
    });
    MarridgeOptions[0].classList.add("active");
    MarridgeDayDatePicker.classList.remove("remove");
    MarridgeValue = true;
  } else {
    MarridgeOptions.forEach((element) => {
      element.classList.remove("active");
      element.classList.remove("error");
    });
    MarridgeOptions[1].classList.add("active");
    MarridgeDayDatePicker.classList.add("remove");
    MarridgeValue = false;
  }
}
// ----------------------------------------------- Function <<
//
// -------------------------------------------- appendChild >>
FormFlexContainer2.appendChild(MarridgeFeild);
// -------------------------------------------- appendChild <<
//
// ------------------------------------------------------ > Marridge <
//
// -------------------------------------------------------- > Gender <
//
// ---------------------------------------------- variables >>
const GenderLabel = "جنسیت";
const CheckBoxList = ["مرد", "زن"];
const CheckBoxOptionId = "GenderOptions";
let GederValue = null;
// ---------------------------------------------- variables <<
//
// ----------------------------------------------- CallBack >>
const GenderFeild = CheckBox(
  GenderLabel,
  CheckBoxList,
  CheckBoxOptionId,
  (index) => {
    GenderListener(index);
  }
);
// ----------------------------------------------- CallBack >>
//
// ----------------------------------------------- Function >>
function GenderListener(index) {
  const GenderOptions = document.querySelectorAll(`#${CheckBoxOptionId}`);
  if (index == 0) {
    GenderOptions.forEach((element) => {
      element.classList.remove("active");
      element.classList.remove("error");
    });
    GenderOptions[0].classList.add("active");
    GederValue = true;
  } else {
    GenderOptions.forEach((element) => {
      element.classList.remove("active");
      element.classList.remove("error");
    });
    GenderOptions[1].classList.add("active");
    GederValue = false;
  }
}
// ----------------------------------------------- Function <<
//
// -------------------------------------------- appendChild >>
FormFlexContainer2.appendChild(GenderFeild);
// -------------------------------------------- appendChild <<
//
// -------------------------------------------------------- > Gender <
//
// ---------------------------------------------- > Flex Container 3 <
const FormFlexContainer3 = document.createElement("div");
FormFlexContainer3.classList.add("FormFlexContainer");
FormFlexContainer3.style.justifyContent = "end";
//
// --------------------------------- appendChild >>
FormContianer.appendChild(FormFlexContainer3);
// --------------------------------- appendChild <<
//
// -----------------------------------------------  Flex Container 2 <
//
// ------------------------------------------------ > MarridgeDay DP <
//
// -------------------------------------- Variables >>
const MarridgeDayLabel = "تاریخ ازدواج";
let MarridgeDate = "";
// -------------------------------------- Variables <<
//
// --------------------------------------- CallBack >>
const MarridgeDayDatePicker = DatePicker(MarridgeDayLabel, (value) => {
  MarridgeDate = value;
});
MarridgeDayDatePicker.classList.add("remove");
// --------------------------------------- CallBack <<
//
// --------------------------------------------- AP >>
FormFlexContainer3.appendChild(MarridgeDayDatePicker);
// --------------------------------------------- AP <<
//
// ------------------------------------------------ > MarridgeDay DP <
//
// --------------------------------------------------- > BirthDay DP <
//
// -------------------------------------- Variables >>
const BirthDateLabel = "تاریخ تولد";
let BirthDay = "";
// -------------------------------------- Variables <<
//
// --------------------------------------- CallBack >>
const BirthDayDatePicker = DatePicker(BirthDateLabel, (value) => {
  BirthDay = value;
});
// --------------------------------------- CallBack <<
//
// --------------------------------------------- AP >>
FormFlexContainer3.appendChild(BirthDayDatePicker);
// --------------------------------------------- AP <<
//
// --------------------------------------------------- > BirthDay DP <
//
// ---------------------------------------------------- > Validators <
//
// --------------------------------- Feild Validator >>
function FeildValidator(Feild, maxlength) {
  //
  // Variables >>
  const FeildInput = Feild;
  const FeildValue = Feild.value;
  let IsValid = false;
  let MassageClass = "";
  let MassageText = "";
  let MassageIcon = "";
  // Variables <<
  //
  // conditions >>
  if (FeildValue == "") {
    FeildInput.classList.add("error");
    MassageClass = "error";
    MassageText = "لطفا همه اطلاعات را کامل کنید";
    MassageIcon = "icon-park-solid:error";
    MassageCallBack(MassageClass, MassageText, MassageIcon);
  } else if (FeildValue.length < maxlength) {
    FeildInput.classList.add("error");
    MassageClass = "error";
    MassageText = `اطلاعات وارد شده نمیتواند کمتر از ${EnToFa(
      `${maxlength}`
    )} رقم باشد `;
    MassageIcon = "icon-park-solid:error";
    MassageCallBack(MassageClass, MassageText, MassageIcon);
  } else {
    IsValid = true;
    FeildInput.classList.remove("error");
  }
  // conditions <<
  //
  // Return >>
  return IsValid;
  // Return <<
}
// --------------------------------- Feild Validator <<
//
// ------------------------------ CheckBox Validator >>
function CheckBoxValidator(CheckBoxContainer, value) {
  //
  // Variables >>
  let IsValid = false;
  const CheckBoxBtn = CheckBoxContainer.childNodes;
  let MassageClass = "";
  let MassageText = "";
  let MassageIcon = "";
  // Variables <<
  //
  // Condition >>
  if (value == null) {
    CheckBoxBtn.forEach((Item) => {
      Item.classList.add("error");
    });
    MassageClass = "error";
    MassageText = "لطفا همه اطلاعات را کامل کنید";
    MassageIcon = "icon-park-solid:error";
    MassageCallBack(MassageClass, MassageText, MassageIcon);
  } else {
    CheckBoxBtn.forEach((Item) => {
      Item.classList.remove("error");
    });
    IsValid = true;
  }
  // Condition <<
  //
  // Return >>
  return IsValid;
  // Return <<
}
// ------------------------------ CheckBox Validator <<
//
// ---------------------------- DatePicker Validator >>
function DatePickerValidator(DatePicker, Date) {
  //
  // Variables >
  let IsValid = false;
  const DatePickerTitleWidget = DatePicker.childNodes[1];
  let MassageClass = "";
  let MassageText = "";
  let MassageIcon = "";
  // Variables <
  //
  // Condition >
  if (Date == "") {
    DatePickerTitleWidget.classList.add("error");
    MassageClass = "error";
    MassageText = "لطفا همه اطلاعات را کامل کنید";
    MassageIcon = "icon-park-solid:error";
    MassageCallBack(MassageClass, MassageText, MassageIcon);
  } else {
    DatePickerTitleWidget.classList.remove("error");
    IsValid = true;
  }
  // Condition <
  //
  // Return >>
  return IsValid;
  // Return <<
}
// ---------------------------- DatePicker Validator <<
//
// -------------------------------- Finall Validator >>
function Validator() {
  //
  // ---------------- Variables >
  let IsValid = false;
  // ---------------- Variables <
  //
  // --------------- FullName V >
  let UserValid = FeildValidator(UserNameFeild.Feild, 5);
  // --------------- FullName V <
  //
  // ---------------- Address V >
  let AddressValid = FeildValidator(AddressFeild.Feild, 10);
  // ---------------- Address V <
  //
  // -------------------- Jpb V >
  let JobValid = FeildValidator(JobFeild.Feild, 3);
  // -------------------- Jpb V >
  //
  // ---------- National Code V >
  let NationalCodeValid = FeildValidator(NationalCodeFeild.Feild, 10);
  // ---------- National Code V >
  //
  // ----------------- Gender V >
  let GenderValid = CheckBoxValidator(GenderFeild.childNodes[1], GederValue);
  // ----------------- Gender V <
  //
  // ------------- IsMarridge V >
  let MarridgeValid = CheckBoxValidator(
    MarridgeFeild.childNodes[1],
    MarridgeValue
  );
  // ------------- IsMarridge V <
  //
  // -------------- BirthDate V >
  let BirthValid = DatePickerValidator(BirthDayDatePicker, BirthDay);
  // -------------- BirthDate V <
  //
  // ----------- MarridgeDate V >
  let MarridgeDateValid = true;
  if (MarridgeValue == null || MarridgeValue == false) {
    MarridgeDayDatePicker.childNodes[1].classList.remove("error");
  } else {
    MarridgeDateValid = DatePickerValidator(
      MarridgeDayDatePicker,
      MarridgeDate
    );
  }
  // ----------- MarridgeDate V <
  //
  // ---------------- Condition >
  if (
    UserValid &&
    AddressValid &&
    JobValid &&
    NationalCodeValid &&
    GenderValid &&
    MarridgeValid &&
    BirthValid &&
    MarridgeDateValid
  ) {
    IsValid = true;
  } else {
    IsValid = false;
  }
  // ---------------- Condition <
  //
  // ------------------- Return >
  return IsValid;
  // ------------------- Return <
}
// -------------------------------- Finall Validator <<
//
// --------------------------------------- Psot Data >>
function PostInformation() {
  // ------------------- ClassManagemnet >
  Layer4.classList.add("show");
  // ------------------- ClassManagemnet <
  //
  // ------------------------- Variables >
  const NameValue = UserNameFeild.Feild.value;
  const Addressvalue = AddressFeild.Feild.value;
  const NationalCodeValue = NationalCodeFeild.Feild.value;
  const JobValue = JobFeild.Feild.value;
  const Gender = GederValue;
  const Marridge = MarridgeValue;
  const BirthValue = BirthDay;
  const MarridgeDateValue = MarridgeDate;
  // ------------------------- Variables <
  //
  // --------------------------- Massage >
  let MassageClass = "";
  let MassageText = "";
  let MassageIcon = "";

  // --------------------------- Massage <
  //
  // ------------------------------ Data >
  const Data = {
    name: NameValue,
    phone_number: ReceivedCookie,
    address: Addressvalue,
    national_code: NationalCodeValue,
    job: JobValue,
    is_male: Gender,
    is_marriage: Marridge,
    birth_date: FaToEn(`${BirthValue}`),
    mrg_date: FaToEn(`${MarridgeDateValue}`),
  };
  // ------------------------------ Data <
  //
  // -------------------------- CallBack >
  let API = "https://hiwearedevelopers.monster/auth/signup-club";
  //
  postData(API, Data)
    .then((response) => {
      //
      // classManagement >>
      Layer4.classList.remove("show");
      // classManagement <<
      //
      // 200 >>
      if (response.status == 200) {
        MassageClass = "check";
        MassageText = "ثبت اطلاعات با موفقیت انجام شد";
        MassageIcon = "line-md:check-all";
        MassageCallBack(MassageClass, MassageText, MassageIcon);
        setTimeout(() => {
          deleteCookie("phone_number");
          window.location.assign("./../../index.html");
        }, 3000);
      }
      // 200 >>
      //
      // 401 >>
      else if (response.status == 401) {
        MassageClass = "error";
        MassageText = "شما قبلا ثبت نام کرده اید";
        MassageIcon = "icon-park-solid:error";
        MassageCallBack(MassageClass, MassageText, MassageIcon);
      }
      // 401 <<
      //
      // 403 >>
      else if (response.status == 403) {
        MassageClass = "error";
        MassageText = "ثبت اطلاعات با مشکل مواجه شد";
        MassageIcon = "icon-park-solid:error";
        MassageCallBack(MassageClass, MassageText, MassageIcon);
      }
      // 403 <<
    })
    //
    // error >>
    .catch((error) => {
      MassageClass = "error";
      MassageText = "ثبت اطلاعات با مشکل مواجه شد";
      MassageIcon = "icon-park-solid:error";
      MassageCallBack(MassageClass, MassageText, MassageIcon);
    });
  // error >>
  //
  // -------------------------- CallBack <
}
// --------------------------------------- Psot Data <<
//
// ---------------------------------------------------- > Validators <
//
// ---------------------------------------------------- > Submit Btn <
const FormSubmit = document.createElement("div");
FormSubmit.classList.add("FormSubmit");
//
// ---------------------------------------------- EL >>
FormSubmit.addEventListener("click", () => {
  FormSubmit.classList.add("loading");
  setTimeout(() => {
    FormSubmit.classList.remove("loading");
  }, 2500);
  // ------------------------------- Validator >
  let IsValid = Validator();
  // ------------------------------- Validator <
  //
  // ------------------------------- Post Data >
  if (IsValid) {
    PostInformation();
  } else {
  }
  // ------------------------------- Post Data <
});
// ---------------------------------------------- EL <<
//
// -------------------------------------------- Text >>
const FormBtnText = document.createElement("span");
FormBtnText.textContent = "ثبت نام";
// -------------------------------------------- Text >>
//
// -------------------------------------------- Icon >>
const FormBtnIcon = document.createElement("iconify-icon");
FormBtnIcon.setAttribute("icon", "akar-icons:check-box-fill");
// -------------------------------------------- Icon <<
//
// ---------------------------------------------- AP >>
FormSubmit.appendChild(FormBtnIcon);
FormSubmit.appendChild(FormBtnText);
FormContianer.appendChild(FormSubmit);
// ---------------------------------------------- AP <<
//
// ---------------------------------------------------- > Submit Btn <
//
// =================================================================== >> Layer 2 <<

// =================================================================== >> Layer 3 <<
//
// ----------------------------------------------------- > Variables <
const massageContainer = document.querySelector(".massageContainer");
const MassageText = document.querySelector(".MassageText");
const MassageIcon = document.querySelector(".MassageIcon");
// ----------------------------------------------------- > Variables <
//
// ---------------------------------------------- > Massage CallBack <
function MassageCallBack(Class, Text, Icon) {
  Layer3.classList.add("show");
  massageContainer.classList.add(`${Class}`);
  MassageText.textContent = Text;
  MassageIcon.setAttribute("icon", `${Icon}`);

  setTimeout(() => {
    Layer3.classList.remove("show");
  }, 2000);

  setTimeout(() => {
    massageContainer.classList.remove(`${Class}`);
  }, 2500);
}
// ---------------------------------------------- > Massage CallBack <
//
// =================================================================== >> Layer 3 <<

// =================================================================== >> Layer 4 <<

// =================================================================== >> Layer 4 <<

// ======================================================================= >> DOM <<
window.addEventListener("DOMContentLoaded", () => {
  WidthChecker();
  Layer2.classList.add("show");
  //
  if (ReceivedCookie == null) {
    window.location.assign("./../../index.html");
  } else {
    Layer2.classList.add("show");
    setTimeout(() => {
      window.location.reload();
      deleteCookie("phone_number");
    }, 300000);
  }
});
// ======================================================================= >> DOM <<
//
// ==================================================================== >> Resize <<
function WidthChecker() {
  let WindowWidth = window.innerWidth;
  if (WindowWidth <= 768) {
    BirthDayDatePicker.style.width = "100%";
    MarridgeDayDatePicker.style.width = "100%";
  } else {
    BirthDayDatePicker.style.width = "50%";
    MarridgeDayDatePicker.style.width = "50%";
  }
}

window.addEventListener("resize", () => {
  WidthChecker();
});
// ==================================================================== >> Resize <<
