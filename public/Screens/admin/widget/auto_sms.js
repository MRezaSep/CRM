// ============================================================== >> Imports <<
//
import {
  fetchData,
  postData,
} from "../../../modules/Fetch_Module/fetch_module.js";
//
// ============================================================== >> Imports <<
//
// ========================================================== >> Definitions <<
//
// LAS => { Loading Auto SMS }
//
// ASC => { Auto SMS Content }
//
// ========================================================== >> Definitions <<
//
// =============================================================== >> Module <<
export function AutoSMS(CloseListener, ModelType) {
  //
  // ---------------------------------------------- >> Widget <<
  const AutoSMS = document.createElement("div");
  AutoSMS.classList.add("AutoSMS");
  // ---------------------------------------------- >> Widget <<
  //
  // ------------------------------------------------- >> GET <<
  //
  // API >>
  let Api = `https://hiwearedevelopers.monster/sms/auto-text-${ModelType}`;
  // API <<
  //
  fetchData(Api)
    .then((response) => {
      //
      // Class Managemnt >>
      LoadingAutoSMSIcon.classList.add("remove");
      // Class Managemnt <<
      //
      AutoSMSContent.id = response._id;
      CurrentSMSText.textContent = response.text;
      //
    })
    .catch((error) => {
      console.log(error);
    });
  //
  // ------------------------------------------------- >> GET <<
  //
  // ------------------------------------------------- >> ASC <<
  const AutoSMSContent = document.createElement("div");
  AutoSMSContent.classList.add("AutoSMSContent");
  //
  AutoSMS.appendChild(AutoSMSContent);
  //
  // ----------------------------------- > Close Btn <
  const CloseAutoSMS2 = document.createElement("iconify-icon");
  CloseAutoSMS2.classList.add("CloseAutoSMS");
  CloseAutoSMS2.setAttribute("icon", "solar:close-square-bold");
  //
  // ----------------------------- EL >>
  CloseAutoSMS2.addEventListener("click", () => {
    CloseListener();
  });
  // ----------------------------- EL <<
  //
  // ----------------------------- AP >>
  AutoSMSContent.appendChild(CloseAutoSMS2);
  // ----------------------------- AP <<
  //
  // ----------------------------------- > Close Btn <
  //
  // ------------------------------------- > Loading <
  const LoadingAutoSMSIcon = document.createElement("iconify-icon");
  LoadingAutoSMSIcon.classList.add("LoadingAutoSMSIcon");
  LoadingAutoSMSIcon.setAttribute("icon", "eos-icons:three-dots-loading");

  AutoSMSContent.appendChild(LoadingAutoSMSIcon);

  // ------------------------------------- > Loading <
  //
  // -------------------------------- > Current Text <
  //
  // ----------------------- Label >>
  const CurrentSMSLabel = document.createElement("span");
  CurrentSMSLabel.classList.add("CurrentSMSLabel");
  //
  // --------- TextContent >
  CurrentSMSLabel.textContent = "متن فعلی";
  // --------- TextContent <
  //
  // ------------------ AP >
  AutoSMSContent.appendChild(CurrentSMSLabel);
  // ------------------ AP <
  //
  // ----------------------- Label <<
  //
  // ------------------------ Text >>
  const CurrentSMSText = document.createElement("span");
  CurrentSMSText.classList.add("CurrentSMSText");
  //
  //
  // ------------------ AP >
  AutoSMSContent.appendChild(CurrentSMSText);
  // ------------------ AP <
  //
  // ------------------------ Text <<
  //
  // -------------------------------- > Current Text <
  //
  // ------------------------------------- > Divider <
  const AutoSMSDivider = document.createElement("div");
  AutoSMSDivider.classList.add("AutoSMSDivider");
  //
  // ------------------------------- AP >>
  AutoSMSContent.appendChild(AutoSMSDivider);
  // ------------------------------- AP <<
  //
  // ------------------------------------- > Divider <
  //
  // --------------------------------------- > Feild <
  //
  // ------------------------------ Label >>
  const NewSMSLabel = document.createElement("span");
  NewSMSLabel.classList.add("NewSMSLabel");
  //
  // ---------------- TextContent >
  NewSMSLabel.textContent = "متن جدید";
  // ---------------- TextContent <
  //
  // ------------------------- AP >
  AutoSMSContent.appendChild(NewSMSLabel);
  // ------------------------- AP <
  //
  // ------------------------------ Label <<
  //
  // --------------------------- TextArea >>
  const AutoSMSFeild = document.createElement("textarea");
  AutoSMSFeild.classList.add("AutoSMSFeild");
  //
  // --------------- Attribute >
  AutoSMSFeild.placeholder = "متن خود را وارد بنویسید  ... ";
  // --------------- Attribute <
  //
  // ---------------------- AP >
  AutoSMSContent.appendChild(AutoSMSFeild);
  // ---------------------- AP <
  //
  // --------------------------- TextArea >>
  //
  // -------------------------- Validator >>
  function FeildValidator(Input, btn) {
    //
    const Value = Input.value;
    let IsValid = false;
    //
    if (Value == "") {
      IsValid = false;
      btn.classList.add("error");
      Input.classList.add("error");
    } else {
      btn.classList.remove("error");
      Input.classList.remove("error");
      IsValid = true;
    }
    //
    setTimeout(() => {
      btn.classList.remove("error");
      Input.classList.remove("error");
    }, 2000);
    //
    return IsValid;
    //
  }
  // -------------------------- Validator <<
  //
  // --------------------------------------- > Feild <
  //
  // -------------------------------------- > Submit <
  const AutoSMSSubmit = document.createElement("div");
  AutoSMSSubmit.classList.add("AutoSMSSubmit");
  //
  // -------------------------------- EL >>
  AutoSMSSubmit.addEventListener("click", () => {
    //
    // ------------------ Validator >
    let Validator = FeildValidator(AutoSMSFeild, AutoSMSSubmit);
    // ------------------ Validator <
    //
    // ----------------------- Data >
    let Data = {
      str_id: AutoSMSContent.id,
      text: AutoSMSFeild.value,
    };
    // ----------------------- Data <
    //
    // ------------------------ API >
    const Api = "https://hiwearedevelopers.monster/sms/edit-auto-text";
    // ------------------------ API <
    //
    // ----------------------- POST >
    if (Validator == true) {
      LoadingAutoSMSIcon.classList.remove("remove");
      postData(Api, Data)
        .then((response) => {
          //
          // class managment >>
          LoadingAutoSMSIcon.classList.add("remove");
          // class managment <<
          //
          // condition >>
          if (response.status == 200) {
            AutoSMSSubmit.classList.add("check");
            AutoSMSFeild.classList.add("check");
            setTimeout(() => {
              CloseListener();
            }, 1000);
          }
          //
          else {
            AutoSMSSubmit.classList.add("error");
            AutoSMSFeild.classList.add("error");
          }
          // condition <<
          //
        })
        .catch((error) => {
          console.log(error);
        });
    }
    // ----------------------- POST <
  });
  // -------------------------------- EL <<
  //
  // ------------------------------ Text >>
  const AutoSMSSubmitText = document.createElement("span");
  AutoSMSSubmitText.classList.add("AutoSMSSubmitText");
  AutoSMSSubmitText.textContent = "ثبت";
  // ------------------------------ Text >>
  //
  // -------------------------------- AP >>
  AutoSMSSubmit.appendChild(AutoSMSSubmitText);
  AutoSMSContent.appendChild(AutoSMSSubmit);
  // -------------------------------- AP <<
  //
  // -------------------------------------- > Submit <

  //
  // ------------------------------------------------- >> ASC <<
  //
  // ---------------------------------------------- >> Return <<
  return {
    widget: AutoSMS,
    WidgetFeild: AutoSMSFeild,
  };
  // ---------------------------------------------- >> Return <<
}
// =============================================================== >> Module <<
