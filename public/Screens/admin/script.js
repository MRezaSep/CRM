// =================================================================== >> improts <<
//
// ---------------------------------------------------- >> wave SVG <<
import { WaveSvg } from "./../../assets/svg/wave.js";
// ---------------------------------------------------- >> wave SVG <<
//
// ------------------------------------------------------- >> Fetch <<
import {
  DeleteData,
  fetchData,
  postData,
} from "../../modules/Fetch_Module/fetch_module.js";
// ------------------------------------------------------- >> Fetch <<
//
// ----------------------------------------------------- >> Sidebar <<
import { SideBar } from "./../../modules/SideBar/sidebar.js";
// ----------------------------------------------------- >> Sidebar <<
//
// ------------------------------------------------------ >> Cookie <<
import {
  getCookie,
  deleteCookie,
} from "./../../modules/Cookie_module/cookie.js";
// ------------------------------------------------------ >> Cookie <<
//
// ------------------------------------------------- >> Massage Box <<
import { AlertBox } from "../../modules/Alert_Box/Alert_Box.js";
// ------------------------------------------------- >> Massage Box <<
//
// ------------------------------------------------ >> Display Data <<
import { DisplayProducts } from "./../../modules/Display_Data_Module/display_data.js";
// ------------------------------------------------ >> Display Data <<
//
// ---------------------------------------------------- >> User Box <<
import { User } from "./../../modules/User_box/user_box.js";
// ---------------------------------------------------- >> User Box <<
//
// ------------------------------------------------------ >> Search <<
import { Serach } from "../../modules/Search_Feild/Search_Feild.js";
// ------------------------------------------------------ >> Search <<
//
// --------------------------------------------- >> Massage History <<
import { HistoryBox } from "./../../modules/Massage_History/massage_history.js";
// --------------------------------------------- >> Massage History <<
//
// -------------------------------------------------- >> Panel Info <<
import { PanelWidget } from "./widget/panel_info.js";
// -------------------------------------------------- >> Panel Info <<
//
// ------------------------------------------------ >> Notification <<
import { Notification } from "./../../modules/Notification_Box/notification_box.js";
// ------------------------------------------------ >> Notification <<
//
// ---------------------------------------------------- >> Auto SMS <<
import { AutoSMS } from "./widget/auto_sms.js";
// ---------------------------------------------------- >> Auto SMS <<
//
// =================================================================== >> improts <<
//
// =============================================================== >> Check Token <<
function CheckToken() {
  //
  // Token >>
  const Token = getCookie("token");
  // Token <<
  //
  // Conditions >>
  if (Token == null) {
    window.location.assign("./../../index.html");
  } else {
    //
    // API >>
    let Api = "https://hiwearedevelopers.monster/admin/check-admin";
    // API <<

    // GET >>
    fetchData(Api)
      .then((response) => {
        //
        // 200 >>
        if (response == true) {
          Layer2.classList.add("show");
          setTimeout(() => {
            Menu.classList.add("show");
          }, 500);
          SBManagemnet();
          CheckIndex();
        }
        // 200 >>
        //
        // other >>
        else {
          window.location.assign("./../../index.html");
        }
        // other <<
        //
      })
      .catch((error) => {
        console.log(error);
      });
    // GET <<
    //
  }
  // Conditions <<
  //
}
// =============================================================== >> Check Token <<
//
// ================================================================ >> Page Index <<
function CheckIndex() {
  //
  // ------------------------------------------- > Get Page Index <
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const receivedString = urlParams.get("Index");
  const receviedIndex = parseInt(receivedString);
  // ------------------------------------------- > Get Page Index <
  //
  // ---------------------------------------- > Manage Page Index <
  if (isNaN(receviedIndex)) {
    ContentManager(0);
  } else {
    ContentManager(receviedIndex);
  }
  // ---------------------------------------- > Manage Page Index <
}
// ================================================================ >> Page Index <<
//
// ==================================================================== >> Layers <<
//
// ------------------------------------------------------ >> layer 1 <<
const Layer1 = document.querySelector(".Layer1");
const BG_1 = document.querySelector("#BG_1");
// ------------------------------------------------------ >> layer 1 <<
//
// ------------------------------------------------------ >> layer 2 <<
const Layer2 = document.querySelector(".Layer2");
const BG_2 = document.querySelector("#BG_2");
// ------------------------------------------------------ >> layer 2 <<
//
// ------------------------------------------------------ >> layer 3 <<
const Layer3 = document.querySelector(".Layer3");
const BG_3 = document.querySelector("#BG_3");
// ------------------------------------------------------ >> layer 3 <<
//
// ------------------------------------------------------ >> layer 4 <<
const Layer4 = document.querySelector(".Layer4");
const BG_4 = document.querySelector("#BG_4");
// ------------------------------------------------------ >> layer 4 <<
//
// ==================================================================== >> Layers <<
//
// =================================================================== >> Layer 1 <<
//
// ------------------------------------------------- >> SVG CallBack <<
const SVG = WaveSvg();
// ------------------------------------------------- >> SVG CallBack <<
//
// -------------------------------------------------- >> AppendChild <<
BG_1.appendChild(SVG);
// -------------------------------------------------- >> AppendChild <<
//
// =================================================================== >> Layer 1 <<
//
// =================================================================== >> Layer 2 <<
//
// ---------------------------------------------------- >> side bar <<
//
// ------------------------------ > Options Icon List <
const OptionsIconsList = [
  "solar:users-group-two-rounded-bold",
  "solar:chat-line-bold",
  "uil:bill",
  "mdi:ticket-account",
];
// ------------------------------ > Options Icon List <
//
// ------------------------------- > Option Text List <
const OptionsTextList = ["کاربران", "پیامک ها", "حسابداری", "بلیط ها"];
// ------------------------------- > Option Text List <
//
// ---------------------------- > Addtional Icon List <
const AddtionaalIconsList = [
  "solar:round-arrow-left-bold",
  "game-icons:exit-door",
];
// ---------------------------- > Addtional Icon List <
//
// ---------------------------- > Addtional Text List <
const AddtionalTextList = ["برگشت", "خروج"];
// ---------------------------- > Addtional Text List <
//
// ------------------------------- > Sidebar CallBack <
const Menu = SideBar(
  OptionsIconsList,
  OptionsTextList,
  (index) => {
    OptionsIndexHandller(index);
  },
  AddtionaalIconsList,
  AddtionalTextList,
  (index) => {
    AddtionalIndexHandller(index);
  }
);
// ------------------------------- > Sidebar CallBack <
//
// --------------------------------------------- > AP <
BG_2.appendChild(Menu);
// --------------------------------------------- > AP <
//
// -------------------------------------- > variables <
const Sidebar = document.querySelector(".Sidebar");
const options = document.querySelectorAll(".option");
const SideBarToggle = document.querySelectorAll("#addtional.option");
// -------------------------------------- > variables <
//
// ---------------------------- > SB Style Managemnet <
function SBManagemnet() {
  // ------------- Varibales >>
  const windowWidth = window.innerWidth;
  const selectedOption = document.querySelectorAll(".option");
  // ------------- Varibales <<
  //
  // -------- ClassManagment >>
  Sidebar.classList.remove("bigsidebar");
  // -------- ClassManagment <<
  //
  // ------------- Condition >>
  if (windowWidth >= 600 && windowWidth <= 768) {
    selectedOption.forEach((option) => {
      option.classList.add("big");
      SideBarToggle[0].style.display = "none";
    });
  } else if (windowWidth >= 768) {
    SideBarToggle[0].style.display = "flex";
    selectedOption.forEach((option) => {
      option.classList.remove("big");
    });
  } else {
    selectedOption.forEach((option) => {
      option.classList.remove("big");
    });
    SideBarToggle[0].style.display = "none";
  }
  // ------------- Condition <<
}
// ---------------------------- > SB Style Managemnet <
//
// -------------------------- > option index handller <
function OptionsIndexHandller(index) {
  // ---- state management >>
  options.forEach((option, i) => {
    if (i === index) {
      option.classList.add("onclick");
    } else {
      option.classList.remove("onclick");
    }
  });
  // ---- state management <<
  //
  // ----- Content Manager >>
  ContentManager(index);
  // ----- Content Manager <<
}
// -------------------------- > option index handller <
//
// ---------------------- > addtionals index handller <
function AddtionalIndexHandller(index) {
  //
  // Big sider Bar Btn >>
  if (index == 0) {
    Sidebar.classList.toggle("bigsidebar");
    options.forEach((option) => {
      option.classList.toggle("big");
    });
    SideBarToggle[0].classList.toggle("turn");
  }
  // Big sider Bar Btn <<
  //
  // - Exit Screen Btn >>
  else {
    // Exit Alert Varibels >
    const ExitTitleIcon = "game-icons:exit-door";
    const ExitMassageText = "آیا مطمئن هستید که می‌خواهید خارج شوید؟";
    // Exit Alert Varibels <
    //
    // Massage ClaaBack >
    AlertCallBack(ExitTitleIcon, false, "", false, ExitMassageText, ExitSubmit);
    // Massage ClaaBack <
    //
    // Exit Submit Listener >
    function ExitSubmit() {
      deleteCookie("Token");
      window.location.assign("./../../index.html");
    }
    // Exit Submit Listener <
  }
  // - Exit Screen Btn <<
  //
}
// ---------------------- > addtionals index handller <
//
// ---------------------------------------------------- >> side bar <<
//
// ------------------------------------------------------ >> Slider <<
//
// ------------------------------------ > Create Slider <
const SliderContainer = document.createElement("div");
SliderContainer.classList.add("SliderContainer");
//
BG_2.appendChild(SliderContainer);
// ------------------------------------ > Create Slider <
//
// ----------------------------------- > Slider Loading <
const SliderLoading = document.createElement("iconify-icon");
SliderLoading.classList.add("SliderLoading");
//
// --------------------------- Icon Value >>
SliderLoading.setAttribute("icon", "svg-spinners:12-dots-scale-rotate");
// --------------------------- Icon Value <<
//
// ------------------------- Append Child >>
SliderContainer.appendChild(SliderLoading);
// ------------------------- Append Child <<
//
// ----------------------------------- > Slider Loading <

// ----------------------------------- > Slider Content <
const SliderContent = document.createElement("div");
SliderContent.classList.add("SliderContent");

SliderContainer.appendChild(SliderContent);
// ----------------------------------- > Slider Content <
//
// ------------------------------------ > SliderManager <
function ContentManager(index) {
  //
  // ----------------------- Index 0 >>
  if (index == 0) {
    options[index].classList.add("onclick");
    SliderLoading.classList.add("loading");
    SliderContent.classList.remove("show");
    setTimeout(() => {
      SliderContent.innerHTML = "";
      UsersFilter = ``;
      Users(true);
    }, 500);
  }
  // ----------------------- Index 0 >>
  //
  // ----------------------- Index 1 >>
  else if (index == 1) {
    options[index].classList.add("onclick");
    SliderLoading.classList.add("loading");
    SliderContent.classList.remove("show");
    setTimeout(() => {
      SliderContent.innerHTML = "";
      Massages();
    }, 500);
  }
  // ----------------------- Index 1 >>
  //
  // ----------------------- Index 2 >>
  else if (index == 2) {
    options[index].classList.add("onclick");
    SliderLoading.classList.add("loading");
    SliderContent.classList.remove("show");
    setTimeout(() => {
      SliderContent.innerHTML = "";
      EmptyContentCallBack();
    }, 500);
  }
  // ----------------------- Index 2 >>
  //
  // ----------------------- Index 3 >
  else {
    options[index].classList.add("onclick");
    SliderLoading.classList.add("loading");
    SliderContent.classList.remove("show");
    setTimeout(() => {
      SliderContent.innerHTML = "";
      EmptyContentCallBack();
    }, 500);
  }
  // ----------------------- Index 3 >
  //
}
// ------------------------------------ > SliderManager <
//
// ------------------------------------------------------ >> Slider <<
//
// ----------------------------------------------------- >> Loading <<
function Loading(ID) {
  //
  // -------------------------------- > Create Loading <
  const ListLoading = document.createElement("div");
  ListLoading.classList.add("ListLoading");
  ListLoading.id = ID;
  // -------------------------------- > Create Loading <
  //
  //
  // ---------------------------------- > Loading Icon <
  const ListLoadingIcon = document.createElement("iconify-icon");
  ListLoadingIcon.classList.add("ListLoadingIcon");
  ListLoadingIcon.setAttribute("icon", "eos-icons:three-dots-loading");
  // ---------------------------------- > Loading Icon <
  //
  // -------------------------------------------- > AP <
  ListLoading.appendChild(ListLoadingIcon);
  // -------------------------------------------- > AP <
  //
  // ---------------------------------------- > Return <
  return ListLoading;
  // ---------------------------------------- > Return <
  //
}
// ----------------------------------------------------- >> Loading <<
//
// --------------------------------------------------- >> All Users <<
//
// ------------------------------------- > Varibales <
const UsersListId = "Users";
let Userslimit = 10;
let UsersApi = `https://hiwearedevelopers.monster/user/all-users`;
const NotFoundUsers = "کاربری پیدا نشد";
let UsersFilter = ``;
const UsersPaginationBodyId = "UsersPaginationBodyId";
const UsersPageNumberContainerId = "UsersPageNumberContainerId";
// ------------------------------------- > Varibales <
//
// --------------------------------- > Users Builder <
function Users(Rebuild) {
  //
  // ----------------- User Layer >>
  const UsersLayer = document.createElement("div");
  UsersLayer.classList.add("UsersLayer");
  // ----------------- User Layer <<
  //
  // --------------------- Search >>
  function SearchUsers() {
    //
    // -------------------------- CallBack >>
    const SearchUsersFeildId = "SearchUsersFeildId";
    const SearchUsersPlaceHolder = "شماره تلفن کاربر را وارد کنید  ";
    const SearchUserInput = Serach(SearchUsersFeildId, SearchUsersPlaceHolder);
    const SearchInput = SearchUserInput.input;
    // -------------------------- CallBack <<
    //
    // ------------------- Search Listener >>
    SearchInput.addEventListener("keyup", function (event) {
      const DataContainer = document.querySelector(".DataContainer");
      if (event.key === "Enter") {
        //
        // Empty Input >>
        if (SearchInput.value.length < 1) {
          //
          // Class Manamgent >>
          DataContainer.classList.add("loading");
          // Class Manamgent >>
          //
          // TimeOut >>
          setTimeout(() => {
            UsersLayer.removeChild(DataContainer);
            UsersFilter = `phone_number=09`;
            Builder(false);
          }, 500);
          // TimeOut <<
        }
        // Empty Input >>
        //
        // Input value >>
        else {
          //
          // Class Manamgent >>
          DataContainer.classList.add("loading");
          // Class Manamgent >>
          //
          // TimeOut >>
          setTimeout(() => {
            UsersLayer.removeChild(DataContainer);
            UsersFilter = `phone_number=${SearchInput.value}`;
            Builder(false);
          }, 500);
          // TimeOut <<
        }
        // Input value >>
        //
      }
    });
    // ------------------- Search Listener <<
    //
    // -------------------------------- AP >>
    UsersLayer.appendChild(SearchUserInput.widget);
    // -------------------------------- AP <<
  }
  // --------------------- Search <<
  //
  // -------------------- Loading >>
  //
  // --------- CallBack >
  const UsersLoading = Loading("UsersLoading");
  //
  UsersLayer.appendChild(UsersLoading);
  // --------- CallBack <
  //
  // --------- Operator >
  function PaginationBtnListener() {
    UsersLoading.classList.add("show");
  }
  // --------- Operator <
  //
  // -------------------- Loading <<
  //
  // -------------------- Builder >>
  function Builder(Rebuild) {
    // ----------- Builder CallBack >>
    const UsersList = DisplayProducts(
      UsersListId,
      UsersApi,
      UsersFilter,
      Userslimit,
      BuildUsers,
      UsersPageNumberContainerId,
      UsersPaginationBodyId,
      PaginationBtnListener,
      NotFoundUsers
    );
    // ----------- Builder CallBack <<
    //
    // ------------- Users Builder >>
    function BuildUsers(response) {
      //
      // Class Managemnt >
      SliderLoading.classList.remove("loading");
      SliderContent.classList.add("show");
      UsersLoading.classList.remove("show");
      // Class Managemnt <
      //
      // Builder >
      response.users.forEach((UserInfo) => {
        //
        // Variables >
        const UserNumber = UserInfo.phone_number;
        // Variables <
        //
        // >> User Box CallBack >>
        const UserBox = User(
          false,
          function UserLsitner() {},
          UserInfo,
          EditListener,
          PointListener,
          DeleteListener
        );
        // << User Box CallBack <<
        //
        // >> Edit Lsitenner >>
        function EditListener() {
          const EditProductScreen = `./../edit_user/index.html?number=${UserNumber}`;
          window.open(EditProductScreen, "_blank");
        }
        // >> Edit Lsitenner >>
        //
        // >> Point Listener >>
        function PointListener() {
          //
          // Varibels >
          const DeleteIcon = "tabler:medal";
          const HaveTitleText = true;
          const haveFeild = true;
          const TitleText = "تغییر امتیاز";
          const MassageText = "";
          // Varibels <
          //
          // CallBack >
          AlertCallBack(
            DeleteIcon,
            HaveTitleText,
            TitleText,
            haveFeild,
            MassageText,
            SubmitListener
          );
          // CallBack <
          //
          // Listener >
          function SubmitListener() {
            const AlertInput = document.querySelector(".AlertInput");
            // DATA >>
            let Data = {
              points: parseInt(AlertInput.value),
              phone_number: UserNumber,
            };
            // DATA <<
            //
            // API >>
            const Api = "https://hiwearedevelopers.monster/user/post-pints";
            // API <<
            //
            // Post >>
            postData(Api, Data)
              .then((response) => {
                location.reload();
              })
              .catch((error) => {
                console.log(error);
              });
            // Post <<
          }
          // Listener <
        }
        // >> Point Listener >>
        //
        // >> Delete Listener >>
        function DeleteListener() {
          //
          // Varibels >
          const DeleteIcon = "mdi:trash";
          const HaveTitleText = true;
          const haveFeild = false;
          const TitleText = "حذف کاربر";
          const MassageText = `آیا از حذف ${UserNumber} اطمینان دارید ؟`;
          // Varibels <
          //
          // CallBack >
          AlertCallBack(
            DeleteIcon,
            HaveTitleText,
            TitleText,
            haveFeild,
            MassageText,
            SubmitListener
          );
          // CallBack <
          //
          // Listener >
          function SubmitListener() {
            // Class Managemnet >>
            Layer4.classList.add("show");
            // Class Managemnet <<
            //
            // API >>
            let Api = `https://hiwearedevelopers.monster/user/delete-${UserInfo._id}`;
            // API <<

            // GET >>
            DeleteData(Api)
              .then((response) => {
                location.reload();
              })
              .catch((error) => {
                Layer4.classList.remove("show");
                const NotifClassName = "error";
                const NotifText = `! حذف کاربر با مشکل مواجه شد است`;
                const NotifIcon = "icon-park-solid:error";
                NotificationCallBack(NotifClassName, NotifText, NotifIcon);
              });
            // GET <<
          }
          // Listener <
        }
        // >> Delete Listener >>
        //
        // >> AppendChild >>
        UsersList.List.appendChild(UserBox);
        // >> AppendChild >>
        //
      });
      // Builder <
      // AP >>
      UsersLayer.appendChild(UsersList.widget);
      // AP <<
    }
    // ------------- Users Builder <<
    //
    // -------------------- Search >>
    if (Rebuild == true) {
      SearchUsers();
    }
    // -------------------- Search <<
    //
    // ------------------------ AP >>
    const Users = document.querySelector("#Users");
    if (!Users) {
      SliderContent.appendChild(UsersLayer);
    }
    // ------------------------ AP <<
  }
  // -------------------- Builder >>
  //
  // ------------------- CallBack >>
  Builder(true);
  // ------------------- CallBack >>
  //
}
// --------------------------------- > Users Builder <
//
// --------------------------------------------------- >> All Users <<
//
// ---------------------------------------------------- >> Massages <<
function Massages() {
  //
  // ------------------------------- > Massages Layer <
  const MassagesLayer = document.createElement("div");
  MassagesLayer.classList.add("MassagesLayer");
  // ------------------------------- > Massages Layer <
  //
  // -------------------------------------- > Content <
  const MassageContent = document.createElement("div");
  MassageContent.classList.add("MassageContent");
  //
  // ------------------------ Panel Info >>
  function SMSPanelInfo() {
    //
    // API >>
    let Api = "https://hiwearedevelopers.monster/sms/amoot-info";
    // API <<
    //
    // GET >>
    fetchData(Api)
      .then((response) => {
        //
        // Panel CallBack >>
        const Panel = PanelWidget((index) => {
          DropDownLsitener(index);
        }, response);
        // Panel CallBack <<
        //
        // Drop Down Listener >>
        function DropDownLsitener(index) {
          const DropDownOptions = document.querySelector(".DropDownOptions");
          const DropDownBtn = document.querySelector(".DropDownBtn");
          const DropDownBtnIcon = document.querySelector(".DropDownBtnIcon");

          //
          DropDownOptions.classList.remove("Show");
          DropDownBtn.classList.remove("Active");
          DropDownBtnIcon.classList.remove("Turn");
          //
          if (index == 0) {
            const AddMassagesContainer = AddMassages();
            MassagesLayer.appendChild(AddMassagesContainer);
            MassageContent.classList.add("remove");
            setTimeout(() => {
              MassagesLayer.removeChild(MassageContent);
              AddMassagesContainer.classList.add("show");
            }, 500);
          }
          //
          else if (index == 1) {
            window.open("https://www.amootsms.com/", "_blank");
          }
          //
          else if (index == 2) {
            const ChangeAutoBirthDay = ChangeAutoSMS("B");
          }
          //
          else {
            const ChangeAutoBirthDay = ChangeAutoSMS("M");
          }
        }
        // Drop Down Listener <<
        //
        // AP >>
        if ((response.status = 200)) {
          MassageContent.appendChild(Panel);
        }
        // AP <<
      })
      .catch((error) => {
        console.log(error);
      });
    // GET <<
  }
  // ------------------------ Panel Info <<
  //
  // ------------------- Massage History >>
  function SMSHistory() {
    //
    // ----- Variables >
    const MassageHistoryListId = "MassageHistory";
    let Historylimit = 10;
    let HistoryApi = "https://hiwearedevelopers.monster/sms/SMS-history";
    const NotFoundHistory = "تاریخچه پیامکی پیدا نشد";
    let HistoryFilter = ``;
    const MassageHistoryPaginationBodyId = "MassageHistoryPaginationBodyId";
    const MassageHistoryPageNumberContainerId =
      "MassageHistoryPageNumberContainerId";
    // ----- Variables <
    //
    // ------- Builder >
    const MassageHistory = DisplayProducts(
      MassageHistoryListId,
      HistoryApi,
      HistoryFilter,
      Historylimit,
      HistoryBuilder,
      MassageHistoryPageNumberContainerId,
      MassageHistoryPaginationBodyId,
      MassagesPaginationBtnListener,
      NotFoundHistory
    );
    MassageHistory.List.id = "HistoryList";
    // ------- Builder <
    //
    // --- History Box >
    function HistoryBuilder(response) {
      //
      // Class Managemnt >
      SliderLoading.classList.remove("loading");
      SliderContent.classList.add("show");
      MassagesLoading.classList.remove("show");
      // Class Managemnt <
      //
      // Builder >
      response.all_SMS.forEach((MassageInfo) => {
        //
        // Massage History CallBack >>
        const SMS_History = HistoryBox(MassageInfo);
        // Massage History CallBack <<
        //
        // >> AppendChild >>
        MassageHistory.List.appendChild(SMS_History);
        // >> AppendChild >>
        //
      });
      // Builder <
      //
      // AP >>
      MassageContent.appendChild(MassageHistory.widget);
      MassagesLayer.appendChild(MassageContent);
      // AP <<
    }
    // --- History Box <
    //
    // ------------ AP >
    const History = document.querySelector("#MassageHistory");
    //
    if (!History) {
      SliderContent.appendChild(MassagesLayer);
    }
    // ------------ AP <
    //
  }
  // ------------------- Massage History <<
  //
  // ------------------ Massages Content >>
  function SMS_Content() {
    //
    // Panel CallBack >
    SMSPanelInfo();
    // Panel CallBack <
    //
    // History CallBack >
    SMSHistory();
    // History CallBack <
    //
  }
  // ------------------ Massages Content >>
  //
  // ------------------ Content CallBack >>
  SMS_Content();
  // ------------------ Content CallBack <<
  //
  // -------------------------------------- > Content <
  //
  // ---------------------------------- > Add Massage <
  let SelectedIndex = null;
  let SelectedNumbers = [];
  //
  // ---------------------- CallBack >>
  function AddMassages() {
    //
    const AddNewMassageContainer = document.createElement("div");
    AddNewMassageContainer.classList.add("AddNewMassageContainer");
    //
    // Massage Feild >>
    const MassageFeild = TextArea();
    const MassageInput = MassageFeild.Input;
    AddNewMassageContainer.appendChild(MassageFeild.widget);
    // Massage Feild <<
    //
    // Recommended >>
    const recommended = Recommended((index) => {
      RecommendedListener(index);
    });
    //
    // Listener >
    function RecommendedListener(index) {
      SelectedNumbers = [];
      SelectedIndex = index;
      //
      // Variabels
      const RecommendedIcon = document.querySelectorAll(".RecommendedIcon");
      const RecommendedBox = document.querySelectorAll(".RecommendedBox");
      // Variabels
      //
      // Class Managemnt
      RecommendedBox.forEach((box) => {
        box.classList.remove("error");
      });
      //
      RecommendedIcon.forEach((box) => {
        box.classList.remove("Selected");
      });
      RecommendedIcon[index].classList.toggle("Selected");
      // Class Managemnt
      //
      RecommendedValidator(index);
      //
    }
    // Listener <
    //
    // AP >
    AddNewMassageContainer.appendChild(recommended);
    // AP <
    //
    // Recommended <<
    //
    // Mini Users >>
    const CustomSelectUserWidget = CustomSelectUser((value) => {
      // Find the index of the value in the array
      const index = SelectedNumbers.indexOf(value);

      if (index > -1) {
        // If the value exists, remove it
        SelectedNumbers.splice(index, 1);
      } else {
        // If the value does not exist, add it
        SelectedNumbers.push(value);
      }
    });
    AddNewMassageContainer.appendChild(CustomSelectUserWidget.widget);
    AddNewMassageContainer.appendChild(CustomSelectUserWidget.loading);
    // Mini Users <<
    //
    // Submit Massage >>
    //
    // callBack >
    const SubmitMassage = SubmitBtn(SubmitListener);
    const SubmitLoading = SubmitMassage.loading;
    // callBack <
    //
    // Listener >
    function SubmitListener() {
      //
      // Class Managemnet
      SubmitLoading.classList.toggle("active");
      // Class Managemnet
      //
      // txt Validator
      let txtValid = TextAreaValidator(MassageInput);
      // txt Validator
      //
      // recommended Validator
      let RecommendedValid = RecommendedValidator(SelectedIndex);
      // recommended Validator
      //
      // DATA >>
      let Data = {
        txt: MassageInput.value,
        filter_index: SelectedIndex,
        phone_numbers: SelectedNumbers,
      };
      // DATA <<
      //
      // Validator <<
      if (txtValid && RecommendedValid) {
        //
        // Post >
        const Api = "https://hiwearedevelopers.monster/sms/send-to";
        postData(Api, Data)
          .then((response) => {
            //
            // 200
            if (response.status == 200) {
              //
              // class managemnt
              SubmitLoading.classList.remove("active");
              // class managemnt
              //
              // notif callback
              const NotifClassName = "check";
              const NotifText = `ارسال پیامک با موفقیت انجام شد`;
              const NotifIcon = "line-md:check-all";
              NotificationCallBack(NotifClassName, NotifText, NotifIcon);
              // notif callback
              //
              // page reloader
              setTimeout(() => {
                const Index = 1;
                const queryString = new URLSearchParams({
                  Index: Index,
                }).toString();
                const newUrl = `${window.location.origin}${window.location.pathname}?${queryString}`;
                window.location.href = newUrl;
              }, 2750);
              // page reloader
              //
            }
            // 200
            //
            // 502
            else if (response.status == 502) {
              //
              // class managemnt
              SubmitLoading.classList.remove("active");
              // class managemnt
              //
              // notif callback
              const NotifClassName = "error";
              const NotifText = `! سیستم پیامکی آموت با مشکلی مواجه شده است`;
              const NotifIcon = "icon-park-solid:error";
              NotificationCallBack(NotifClassName, NotifText, NotifIcon);
              // notif callback
              //
            }
            // 502
            //
          })
          .catch((error) => {
            console.log(error);
          });
        // Post >
        //
      } else {
        SubmitLoading.classList.remove("active");
      }
      // Validator <<
      //
    }
    // Listener <
    //
    // AP >
    AddNewMassageContainer.appendChild(SubmitMassage.widget);
    // AP <
    //
    // Submit Massage <<
    //
    // Back Btn >>
    //
    // CallBack >
    const BackToHistoryBtn = BackBtn(BackLsitener);
    // CallBack <
    //
    // Function >
    function BackLsitener() {
      AddNewMassageContainer.classList.remove("show");
      MassagesLayer.appendChild(MassageContent);
      setTimeout(() => {
        MassageContent.classList.remove("remove");
        MassagesLayer.removeChild(AddNewMassageContainer);
      }, 500);
    }
    // Function <
    //
    // AP >
    AddNewMassageContainer.appendChild(BackToHistoryBtn);
    // AP <
    //
    // Back Btn <<
    //
    // Return >>
    return AddNewMassageContainer;
    // Return <<
    //
  }
  // ---------------------- CallBack <<
  //
  // ----------------- Massage Feild >>
  function TextArea() {
    //
    // Text Area Container >>
    const TextAreaContainer = document.createElement("div");
    TextAreaContainer.classList.add("TextAreaContainer");
    // Text Area Container <<
    //
    // Text Area Label >>
    const TextAreaLabel = document.createElement("span");
    TextAreaLabel.classList.add("TextAreaLabel");
    TextAreaLabel.textContent = "متن پیامک";
    // Text Area Label <<
    //
    // Create Text Area >>
    const MassageFeild = document.createElement("textarea");
    MassageFeild.classList.add("MassageFeild");
    MassageFeild.placeholder = "... پیام خود را بنویسید";
    // Create Text Area >>
    //
    // AP >>
    TextAreaContainer.appendChild(TextAreaLabel);
    TextAreaContainer.appendChild(MassageFeild);
    // AP >>
    //
    // Return >>
    return {
      widget: TextAreaContainer,
      Input: MassageFeild,
    };
    // Return <<
  }
  //
  function TextAreaValidator(input) {
    //
    // variables >>
    let MassageValue = input.value;
    let IsValid = false;
    // variables <<
    //
    // ---- Not Valid >>
    if (MassageValue == "") {
      //
      // class Management >>
      input.classList.add("error");
      // class Management <<
      //
      // IsValid >>
      IsValid = false;
      // IsValid <<
      //
      MassagesLayer.scrollTo({
        top: 0,
      });
    }
    // ---- Not Valid <<
    //
    // -------- Valid >>
    else {
      //
      // class Management >>
      input.classList.remove("error");
      // class Management <<
      //
      // IsValid >>
      IsValid = true;
      // IsValid <<
      //
    }
    // -------- Valid <<
    //
    // Return >>
    return IsValid;
    // Return <<
  }
  // ----------------- Massage Feild <<
  //
  // ------------------- Recommended >>
  function Recommended(Listener) {
    //
    // Recommended Container >>
    const RecommendedContainer = document.createElement("div");
    RecommendedContainer.classList.add("RecommendedContainer");
    //
    //
    // Recommended Container <<
    //
    // Recommended Label >>
    const RecommendedLabel = document.createElement("span");
    RecommendedLabel.classList.add("RecommendedLabel");
    //
    // Text Content >
    RecommendedLabel.textContent = "انتخاب پیش فرض";
    // Text Content <
    //
    // AP >
    RecommendedContainer.appendChild(RecommendedLabel);
    // AP <
    //
    // Recommended Label <<
    //
    // Recommended Flex Container >>
    const RecommendedFlexContianer = document.createElement("div");
    RecommendedFlexContianer.classList.add("RecommendedFlexContianer");
    // Recommended Flex Container <<
    //
    // Data >>
    const Data = ["هیچکدام", "همه", "مردها", "زنها", "مجردها", "متاهل ها"];
    // Data <<
    //
    // Builder >>
    for (let index = 0; index < Data.length; index++) {
      //
      // Recommended Box >
      const RecommendedBox = document.createElement("div");
      RecommendedBox.classList.add("RecommendedBox");
      // Recommended Box <
      //
      // EL >
      RecommendedBox.addEventListener("click", () => {
        Listener(index);
      });
      // EL <
      //
      // Text >
      const RecommendedText = document.createElement("span");
      RecommendedText.classList.add("RecommendedText");
      RecommendedText.textContent = Data[index];
      // Text <
      //
      // Icon >
      const RecommendedIcon = document.createElement("iconify-icon");
      RecommendedIcon.classList.add("RecommendedIcon");
      RecommendedIcon.setAttribute("icon", "akar-icons:check-box-fill");

      // Icon <
      //
      // AP >
      RecommendedBox.appendChild(RecommendedText);
      RecommendedBox.appendChild(RecommendedIcon);
      RecommendedFlexContianer.appendChild(RecommendedBox);
      RecommendedContainer.appendChild(RecommendedFlexContianer);
      // AP <
    }
    // Builder <<
    //
    return RecommendedContainer;
  }
  //
  function RecommendedValidator(index) {
    //
    // Variabels
    let IsValid = false;
    const RecommendedBox = document.querySelectorAll(".RecommendedBox");
    const SeachUsersContainer = document.querySelector(".SeachUsersContainer");
    // Variabels
    //
    // Conditions
    if (index == null) {
      //
      RecommendedBox.forEach((box) => {
        box.classList.add("error");
      });
      //
      MassagesLayer.scrollTo({
        top: 0,
      });
      //
      IsValid = false;
      //
    } else if (index >= 1) {
      //
      RecommendedBox.forEach((box) => {
        box.classList.remove("error");
      });
      //
      SeachUsersContainer.classList.add("fade");
      //
      IsValid = true;
      //
    } else {
      IsValid = true;
      SeachUsersContainer.classList.remove("fade");
    }
    // Conditions
    //
    return IsValid;
  }
  // ------------------- Recommended <<
  //
  // ------------ Mini Users Builder >>
  function CustomSelectUser(SelectedUser) {
    //
    const CustomUserSelectContainer = document.createElement("div");
    CustomUserSelectContainer.classList.add("CustomUserSelectContainer");
    //
    const CustomUserSelectLabel = document.createElement("span");
    CustomUserSelectLabel.classList.add("CustomUserSelectLabel");
    CustomUserSelectLabel.textContent = "انتخاب دستی";
    //
    CustomUserSelectContainer.appendChild(CustomUserSelectLabel);
    //
    // Create Container >>
    const SeachUsersContainer = document.createElement("div");
    SeachUsersContainer.classList.add("SeachUsersContainer");
    //
    CustomUserSelectContainer.appendChild(SeachUsersContainer);
    //
    // Varibales >>
    const UsersListId = "MiniUsers";
    let Userslimit = 10;
    let UsersApi = `https://hiwearedevelopers.monster/user/all-users`;
    const NotFoundUsers = "کاربری پیدا نشد";
    let UsersFilter = ``;
    const UsersPaginationBodyId = "UsersPaginationBodyId";
    const UsersPageNumberContainerId = "UsersPageNumberContainerId";
    // Varibales >>
    //
    // Search >>
    function SearchMiniUsers() {
      //
      // -------------------------- CallBack >>
      const SearchMiniUsersFeildId = "SearchMiniUsersFeildId";
      const SearchUsersPlaceHolder = "شماره تلفن کاربر را وارد کنید  ";
      const SearchUserInput = Serach(
        SearchMiniUsersFeildId,
        SearchUsersPlaceHolder
      );
      const SearchInput = SearchUserInput.input;
      // -------------------------- CallBack <<
      //
      // ------------------- Search Listener >>
      SearchInput.addEventListener("keyup", function (event) {
        const DataContainer = document.querySelector("#MiniUsers");
        const MiniUsersLoading = document.querySelector("#MiniUsersLoading");
        if (event.key === "Enter") {
          //
          // Empty Input >>
          if (SearchInput.value.length < 1) {
            //
            // Class Manamgent >>
            MiniUsersLoading.classList.add("show");
            SeachUsersContainer.classList.add("loading");
            // Class Manamgent >>
            //
            // TimeOut >>
            setTimeout(() => {
              SeachUsersContainer.removeChild(DataContainer);
              UsersFilter = `phone_number=09`;
              Builder(false);
            }, 500);
            // TimeOut <<
          }
          // Empty Input >>
          //
          // Input value >>
          else {
            //
            // Class Manamgent >>
            MiniUsersLoading.classList.add("show");
            SeachUsersContainer.classList.add("loading");
            // Class Manamgent >>
            //
            // TimeOut >>
            setTimeout(() => {
              SeachUsersContainer.removeChild(DataContainer);
              UsersFilter = `phone_number=${SearchInput.value}`;
              Builder(false);
            }, 500);
            // TimeOut <<
          }
          // Input value >>
          //
        }
      });
      // ------------------- Search Listener <<
      //
      // -------------------------------- AP >>
      SeachUsersContainer.appendChild(SearchUserInput.widget);
      // -------------------------------- AP <<
    }
    // Search <<
    //
    // Builder >>
    function Builder(Rebuild) {
      // ----------- Builder CallBack >>
      const UsersList = DisplayProducts(
        UsersListId,
        UsersApi,
        UsersFilter,
        Userslimit,
        BuildUsers,
        UsersPageNumberContainerId,
        UsersPaginationBodyId,
        MiniUsersPaginationBtnListener,
        NotFoundUsers
      );
      UsersList.List.id = "MiniUsersListContent";
      // ----------- Builder CallBack <<
      //
      // ------------- Users Builder >>
      function BuildUsers(response) {
        //
        SelectedNumbers = [];
        //
        if (response.list_length < Userslimit) {
          UsersList.List.classList.add("havepadding");
        } else {
          UsersList.List.classList.remove("havepadding");
        }
        //
        // Class Managemnt >
        MiniUsersLoading.classList.remove("show");
        SeachUsersContainer.classList.remove("loading");
        // Class Managemnt <
        //
        // Builder >
        response.users.forEach((UserInfo, index) => {
          //
          // >> User Box CallBack >>
          const UserBox = User(true, UserContainerListener, UserInfo);
          // << User Box CallBack <<
          //
          // User Container Listener >>
          function UserContainerListener() {
            const UserContainer = document.querySelectorAll(".UserContainer");
            UserContainer[index].classList.toggle("Select");
            SelectedUser(UserInfo.phone_number);
          }
          // User Container Listener <<
          //
          // >> AppendChild >>
          UsersList.List.appendChild(UserBox);
          // >> AppendChild >>
          //
        });
        // Builder <
        //
        // AP >>
        SeachUsersContainer.appendChild(UsersList.widget);
        // AP <<
      }
      // ------------- Users Builder <<
      //
      // -------------------- Search >>
      if (Rebuild == true) {
        SearchMiniUsers();
      }
      // -------------------- Search <<
      //
    }
    // Builder <<
    //
    Builder(true);
    //
    // Loading >>
    //
    const MiniUsersLoading = Loading("MiniUsersLoading");
    //
    //
    function MiniUsersPaginationBtnListener() {
      const MiniUsersLoading = document.querySelector("#MiniUsersLoading");
      MiniUsersLoading.classList.add("show");
    }
    //
    // Loading <<
    return {
      widget: CustomUserSelectContainer,
      loading: MiniUsersLoading,
    };
  }
  // ------------ Mini Users Builder <<
  //
  // -------------------- Submit Btn >>
  function SubmitBtn(SubmitListener) {
    //
    // Craete Btn >>
    const SubmitMassageBtn = document.createElement("div");
    SubmitMassageBtn.classList.add("SubmitMassageBtn");
    // Craete Btn <<
    //
    // EL >>
    SubmitMassageBtn.addEventListener("click", () => {
      SubmitListener();
    });
    // EL <<
    //
    // Text >>
    const SubmitMassageText = document.createElement("span");
    SubmitMassageText.classList.add("SubmitMassageText");
    SubmitMassageText.textContent = "ارسال پیامک";
    // Text <<
    //
    // Icon >>
    const SubmitMassageIcon = document.createElement("iconify-icon");
    SubmitMassageIcon.classList.add("SubmitMassageIcon");
    SubmitMassageIcon.setAttribute("icon", "mdi:send-circle");
    // Icon <<
    //
    // Gradeint >>
    const SubmitBtnLinearGradeint = document.createElement("div");
    SubmitBtnLinearGradeint.classList.add("SubmitBtnLinearGradeint");
    //
    const SubmitBtnLinearGradeintIcon = document.createElement("iconify-icon");
    SubmitBtnLinearGradeintIcon.classList.add("SubmitBtnLinearGradeintIcon");
    SubmitBtnLinearGradeintIcon.setAttribute("icon", "line-md:uploading-loop");
    // Gradeint <<
    //
    // AP >>
    SubmitMassageBtn.appendChild(SubmitMassageText);
    SubmitMassageBtn.appendChild(SubmitMassageIcon);
    SubmitMassageBtn.appendChild(SubmitBtnLinearGradeint);
    SubmitBtnLinearGradeint.appendChild(SubmitBtnLinearGradeintIcon);
    // AP <<
    //
    // Return >>
    return {
      widget: SubmitMassageBtn,
      loading: SubmitBtnLinearGradeint,
    };
    // Return <<
  }
  // -------------------- Submit Btn <<
  //
  // ---------------------- Back Btn >>
  function BackBtn(BackListener) {
    //
    //
    const BackBtn = document.createElement("div");
    BackBtn.classList.add("BackBtn");
    //
    //
    //
    BackBtn.addEventListener("click", () => {
      BackListener();
    });
    //
    //
    // Text >>
    const BackBtnText = document.createElement("span");
    BackBtnText.classList.add("BackBtnText");
    BackBtnText.textContent = "بازگشت";
    // Text <<
    //
    // Icon >>
    const BackBtnIcon = document.createElement("iconify-icon");
    BackBtnIcon.classList.add("BackBtnIcon");
    BackBtnIcon.setAttribute("icon", "flowbite:chevron-left-outline");
    // Icon <<
    //
    // AP >>
    BackBtn.appendChild(BackBtnText);
    BackBtn.appendChild(BackBtnIcon);
    // AP <<
    //
    // Return >>
    return BackBtn;
    // Return <<
    //
  }
  // ---------------------- Back Btn <<
  //
  // ---------------------------------- > Add Massage <
  //
  // -------------------------------------- > Loading <
  //
  // -------------------------- CallBack >>
  const MassagesLoading = Loading("MassagesLoading");
  //
  MassagesLayer.appendChild(MassagesLoading);
  // -------------------------- CallBack <<
  //
  // -------------------------- Operator >>
  function MassagesPaginationBtnListener() {
    const MassagesLoading = document.querySelector("#MassagesLoading");
    MassagesLoading.classList.add("show");
  }
  // -------------------------- Operator <<
  //
  // -------------------------------------- > Loading <
  //
  // ------------------------------------------- > AP <
  SliderContent.appendChild(MassagesLayer);
  // ------------------------------------------- > AP <
}
// ---------------------------------------------------- >> Massages <<
//
// ----------------------------------------------- >> Empty Content <<
function EmptyContentCallBack() {
  //
  // Create Container >>
  const EmptyContent = document.createElement("div");
  EmptyContent.classList.add("EmptyContent");
  // Create Container <<
  //
  // Class Managemnt >>
  SliderLoading.classList.remove("loading");
  SliderContent.classList.add("show");
  // Class Managemnt <<
  //
  // Empty Content >>
  const EmptyContentAnimation = document.createElement("iframe");
  EmptyContentAnimation.classList.add("EmptyContentAnimation");
  EmptyContentAnimation.src =
    "https://lottie.host/embed/03a4754e-58fc-427a-985f-1d7e3f5aef22/v9RJDB2eIm.json";
  // Empty Content <<
  //
  // AP >>
  EmptyContent.appendChild(EmptyContentAnimation);
  SliderContent.appendChild(EmptyContent);
  // AP <<
}
//
// ----------------------------------------------- >> Empty Content <<
//
// =================================================================== >> Layer 2 <<
//
// =================================================================== >> Layer 3 <<
//
// ------------------------------------------------------- >> Alert <<
function AlertCallBack(Icon, HaveTT, TT, haveFeild, Text, Checklistener) {
  //
  // ------------------------ > Class Managment <
  Layer3.classList.add("show");
  // ------------------------ > Class Managment <
  //
  // ------------------------ > Widget CallBack <
  const AlertMassage = AlertBox(
    Icon,
    HaveTT,
    TT,
    haveFeild,
    Text,
    SubmitMassage,
    CloseMassage
  );
  // ------------------------ > Widget CallBack <
  //
  // ------------------------- > Close Function <
  //
  // --------- Btn Operator >>
  function CloseMassage() {
    Layer3.classList.remove("show");
    setTimeout(() => {
      BG_3.removeChild(AlertMassage);
    }, 400);
  }
  // --------- Btn Operator >>
  //
  // -------- auto Operator >>
  setTimeout(() => {
    Layer3.classList.remove("show");
    setTimeout(() => {
      BG_3.removeChild(AlertMassage);
    }, 400);
  }, 10000);
  // -------- auto Operator <<
  //
  // ------------------------- > Close Function <
  //
  // ----------------------- > Subbmit Function <
  function SubmitMassage() {
    Checklistener();
  }
  // ----------------------- > Subbmit Function <
  //
  // ------------------------------------- > AP <
  BG_3.appendChild(AlertMassage);
  // ------------------------------------- > AP <
}
// ------------------------------------------------------- >> Alert <<
//
// ------------------------------------------------ >> Notification <<
function NotificationCallBack(ClassName, Text, Icon) {
  //
  // Class Management >>
  Layer3.classList.add("show");
  // Class Management <<
  //
  // Callback >>
  const Notif = Notification(Text, Icon);
  Notif.classList.add(ClassName);
  Notif.classList.add("show");
  // Callback <<
  //
  // Ap >>
  BG_3.appendChild(Notif);
  // Ap <<
  //
  // Remove Child >>
  setTimeout(() => {
    Notif.classList.remove("show");
    Layer3.classList.remove("show");
  }, 2000);

  setTimeout(() => {
    BG_3.removeChild(Notif);
    Notif.classList.remove("show");
    Notif.classList.remove(ClassName);
  }, 2500);
  // Remove Child <<
}
// ------------------------------------------------ >> Notification <<
//
// ---------------------------------------------------- >> Auto SMS <<
function ChangeAutoSMS(ModelType) {
  //
  // ------------------------------ > Class Managemnt <
  Layer3.classList.add("show");
  // ------------------------------ > Class Managemnt <
  //
  // ------------------------------------- > CallBack <
  const AutoSMSCallBack = AutoSMS(CloseAutoSMS, ModelType);
  const AutoSMSFeild = AutoSMSCallBack.WidgetFeild;
  // ------------------------------------- > CallBack <
  //
  // ------------------------------------- > Listener <
  function CloseAutoSMS() {
    Layer3.classList.remove("show");
    setTimeout(() => {
      BG_3.removeChild(AutoSMSCallBack.widget);
    }, 500);
  }
  // ------------------------------------- > Listener <
  //
  // ------------------------------------------- > AP <
  BG_3.appendChild(AutoSMSCallBack.widget);
  // ------------------------------------------- > AP <
  //
  // --------------------------------------- > Return <
  return {
    widget: AutoSMSCallBack,
    Feild: AutoSMSFeild,
  };
  // --------------------------------------- > Return <
}
// ---------------------------------------------------- >> Auto SMS <<
//
// =================================================================== >> Layer 3 <<
//
// =================================================================== >> Layer 4 <<
//
// =================================================================== >> Layer 4 <<
//
// ======================================================================= >> DOM <<
window.addEventListener("DOMContentLoaded", () => {
  CheckToken();
});
// ======================================================================= >> DOM <<
//
// ==================================================================== >> Resize <<
window.addEventListener("resize", () => {
  SBManagemnet();
});
// ==================================================================== >> Resize <<
