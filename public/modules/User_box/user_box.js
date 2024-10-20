// ============================================================== >> Imports <<
//
// Convertor >>
import { EnToFa } from "../Perisian_Convertor/perisan_convertor.js";
// Convertor <<
//
// ============================================================== >> Imports <<
//
// ================================================================== >> Btn <<
function Btn(ID, Text, Listener) {
  //
  // -------------------------------------------- >> Btn Container <<
  const UserBtn = document.createElement("div");
  UserBtn.classList.add("UserBtn");
  UserBtn.id = ID;
  // -------------------------------------------- >> Btn Container <<
  //
  // ------------------------------------------------------- >> EL <<
  UserBtn.addEventListener("click", () => {
    Listener();
  });
  // ------------------------------------------------------- >> EL <<
  //
  // ------------------------------------------------- >> Btn Text <<
  const UserBtnText = document.createElement("span");
  UserBtnText.classList.add("UserBtnText");
  UserBtnText.textContent = Text;
  // ------------------------------------------------- >> Btn Text <<
  //
  // ------------------------------------------------------- >> AP <<
  UserBtn.appendChild(UserBtnText);
  // ------------------------------------------------------- >> AP <<
  //
  // --------------------------------------------------- >> Return <<
  return UserBtn;
  // --------------------------------------------------- >> Return <<
}
// ================================================================== >> Btn <<
//
// =============================================================== >> Module <<
export function User(
  IsMini,
  UserContainerListener,
  response,
  EditListener,
  PointListener,
  DeleteListener
) {
  // ---------------------------------------------- >> Widget <<
  const UserContainer = document.createElement("div");
  UserContainer.classList.add("UserContainer");
  if (IsMini) {
    UserContainer.classList.add("clickable");
    UserContainer.addEventListener("click", () => {
      UserContainerListener();
    });
  }
  // ---------------------------------------------- >> Widget <<
  //
  // ---------------------------------------------- >> Avatar <<
  const UserAvatar = document.createElement("div");
  UserAvatar.classList.add("UserAvatar");
  //
  // ------------------------------- > User Image <
  const UserImg = document.createElement("img");
  UserImg.classList.add("UserImg");
  UserImg.src = response.avatar_image;
  // ------------------------------- > User Image <
  //
  // -------------------------------- > User Icon <
  const UserAvatarIcon = document.createElement("iconify-icon");
  UserAvatarIcon.setAttribute("icon", "fluent:person-12-filled");
  UserAvatarIcon.classList.add("UserAvatarIcon");
  // -------------------------------- > User Icon <
  //
  // --------------------------------------- > AP <
  if (response.avatar_image == "") {
    UserAvatar.appendChild(UserAvatarIcon);
  } else {
    UserAvatar.appendChild(UserImg);
  }
  //
  if (!IsMini) {
    UserContainer.appendChild(UserAvatar);
  }
  // --------------------------------------- > AP <
  //
  // ---------------------------------------------- >> Avatar <<
  //
  // --------------------------------------------- >> Divider <<
  const UserDivider1 = document.createElement("div");
  UserDivider1.classList.add("UserDivider");
  //
  if (!IsMini) {
    UserContainer.appendChild(UserDivider1);
  }
  //
  // --------------------------------------------- >> Divider <<
  //
  // ------------------------------------------- >> User Data <<
  const UserData = document.createElement("div");
  UserData.classList.add("UserData");
  //
  // ------------------------------------ > AP <
  UserContainer.appendChild(UserData);
  // ------------------------------------ > AP <
  //
  // ----------------------------- > Full Name <
  const UserFullName = document.createElement("span");
  UserFullName.classList.add("UserDataText");
  //
  // ------------ Fill The Text >>
  UserFullName.textContent = response.name;
  // ------------ Fill The Text <<
  //
  // ----------------------- AP >>
  UserData.appendChild(UserFullName);
  // ----------------------- AP <<
  //
  // ----------------------------- > Full Name <
  //
  // ------------------------------- > Divider <
  const UserDataDivider1 = document.createElement("div");
  UserDataDivider1.classList.add("UserDataDivider");
  //
  UserData.appendChild(UserDataDivider1);
  // ------------------------------- > Divider <
  //
  // -------------------------------- > Number <
  const UserNumber = document.createElement("span");
  UserNumber.classList.add("UserDataText");
  //
  // ------------ Fill The Text >>
  UserNumber.textContent = response.phone_number;
  // ------------ Fill The Text <<
  //
  // ----------------------- AP >>
  UserData.appendChild(UserNumber);
  // ----------------------- AP <<
  //
  // -------------------------------- > Number <
  //
  // ------------------------------- > Divider <
  const UserDataDivider2 = document.createElement("div");
  UserDataDivider2.classList.add("UserDataDivider");
  //
  if (!IsMini) {
    UserData.appendChild(UserDataDivider2);
  }
  // ------------------------------- > Divider <
  //
  // --------------------------------- > Point <
  const UserPoint = document.createElement("span");
  UserPoint.classList.add("UserDataText");
  //
  // ------------ Fill The Text >>
  UserPoint.textContent = EnToFa(`${response.points}`);
  // ------------ Fill The Text <<
  //
  // ----------------------- AP >>
  if (!IsMini) {
    UserData.appendChild(UserPoint);
  }
  // ----------------------- AP <<
  //
  // --------------------------------- > Point <
  //
  // ------------------------------------------- >> User Data <<
  //
  // --------------------------------------------- >> Divider <<
  const UserDivider2 = document.createElement("div");
  UserDivider2.classList.add("UserDivider");
  //
  if (!IsMini) {
    UserContainer.appendChild(UserDivider2);
  }
  //
  // --------------------------------------------- >> Divider <<
  //
  // -------------------------------------------- >> Edit Btn <<
  //
  // ------------------------------ > Varibales <
  const EditBtnText = "ویرایش کاربر";
  const EditBtnId = "EditUserBtn";
  // ------------------------------ > Varibales <
  //
  // ------------------------------- > CallBack <
  const EditBtn = Btn(EditBtnId, EditBtnText, EditListener);
  // ------------------------------- > CallBack <
  //
  // ---------------------------- > AppendChild <
  if (!IsMini) {
    UserContainer.appendChild(EditBtn);
  }
  // ---------------------------- > AppendChild <
  //
  // -------------------------------------------- >> Edit Btn <<
  //
  // ------------------------------------------- >> Point Btn <<
  //
  // ------------------------------ > Varibales <
  const PointBtnText = "ویرایش امتیاز";
  const PointBtnId = "PointUserBtn";
  // ------------------------------ > Varibales <
  //
  // ------------------------------- > CallBack <
  const PointBtn = Btn(PointBtnId, PointBtnText, PointListener);
  // ------------------------------- > CallBack <
  //
  // ---------------------------- > AppendChild <
  if (!IsMini) {
    UserContainer.appendChild(PointBtn);
  }
  // ---------------------------- > AppendChild <
  //
  // ------------------------------------------- >> Point Btn <<
  //
  // ------------------------------------------ >> Delete Btn <<
  //
  // ------------------------------ > Varibales <
  const DeleteBtnText = "حذف کاربر";
  const DeleteBtnId = "DeleteUserBtn";
  // ------------------------------ > Varibales <
  //
  // ------------------------------- > CallBack <
  const DeleteBtn = Btn(DeleteBtnId, DeleteBtnText, DeleteListener);
  // ------------------------------- > CallBack <
  //
  // ---------------------------- > AppendChild <
  if (!IsMini) {
    UserContainer.appendChild(DeleteBtn);
  }
  // ---------------------------- > AppendChild <
  //
  // ------------------------------------------ >> Delete Btn <<
  //
  // ---------------------------------------------- >> Return <<
  return UserContainer;
  // ---------------------------------------------- >> Return <<
}
// =============================================================== >> Module <<\
