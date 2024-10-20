// =============================================================== >> import <<

// Cookie >>
import { getCookie } from "./../Cookie_module/cookie.js";
// Cookie <<

// =============================================================== >> import <<
//
// ========================================================== >> Definitions <<

// SBC = > ( Side Bar Container )

// SB = > ( Side Bar )

// OB = > ( Option Btn )

// SBB = > ( Side Bar Btn )

// AP = > ( Append Child )

// EL = > ( Event Listener )

// BG = > ( Background )

// B = > ( Button )

// I = > ( Icon )

// T = > ( Text )

// D = > ( Divider )

// AB = > ( Addtional Btn )

// ========================================================== >> Definitions <<
//
// =============================================================== >> Module <<
export function SideBar(
  OptionIconList,
  OptionTextList,
  OptionListener,
  AdttionalIconList,
  AddtionalTextList,
  AddtionalBtnListener
) {
  // ---------------------------------------------------- >> SB <<
  const Sidebar = document.createElement("div");
  Sidebar.classList.add("Sidebar");

  // --------------------------------------------- > OB <
  //
  // ---------------------------------- Builder >>
  for (let index = 0; index < OptionIconList.length; index++) {
    //
    // -------------------- container >
    const option = document.createElement("div");
    option.classList.add("option");
    // -------------------- container <
    //
    // --------------------------- EL >
    option.addEventListener("click", () => {
      OptionListener(index);
    });
    // --------------------------- EL <
    //
    // ---------------------------- T >
    const optionT = document.createElement("span");
    optionT.textContent = OptionTextList[index];
    // ---------------------------- T <
    //
    // ---------------------------- I >
    const optionI = document.createElement("iconify-icon");
    optionI.setAttribute("icon", `${OptionIconList[index]}`);
    // ---------------------------- I <
    //
    // ----------------------- Marker >
    const marker = document.createElement("div");
    marker.classList.add("activemarker");
    // ----------------------- Marker <
    //
    // --------------------------- AP >
    //
    // > text <
    option.appendChild(optionT);
    // > text <
    //
    // > icon <
    option.appendChild(optionI);
    // > icon <
    //
    // > marker <
    option.appendChild(marker);
    // > marker <
    //
    Sidebar.appendChild(option);
    //
    // --------------------------- AP <
  }
  // ---------------------------------- Builder <<
  //
  // --------------------------------------------- > OB <
  //
  // ---------------------------------------------- > D <
  const SiderBarDivider2 = document.createElement("div");
  SiderBarDivider2.classList.add("SiderBarDivider");
  //
  // ----------------------------------------- AP >
  //
  // > AP <
  Sidebar.appendChild(SiderBarDivider2);
  // > AP <
  //
  // ----------------------------------------- AP <
  //
  // ---------------------------------------------- > D <
  //
  // --------------------------------------------- > AB <
  //
  // ---------------------------------- Builder >>
  for (let index = 0; index < AdttionalIconList.length; index++) {
    //
    // -------------------- container >
    const option = document.createElement("div");
    option.classList.add("option");
    option.setAttribute("id", "addtional");
    //
    // -------------------- container <
    //
    // --------------------------- EL >
    option.addEventListener("click", () => {
      AddtionalBtnListener(index);
    });
    // --------------------------- EL <
    //
    // ---------------------------- T >
    const optionT = document.createElement("span");
    optionT.textContent = AddtionalTextList[index];
    // ---------------------------- T <
    //
    // ---------------------------- I >
    const optionI = document.createElement("iconify-icon");
    optionI.setAttribute("icon", `${AdttionalIconList[index]}`);
    // ---------------------------- I <
    //
    // --------------------------- AP >
    //
    // > text <
    option.appendChild(optionT);
    // > text <
    //
    // > icon <
    option.appendChild(optionI);
    // > icon <
    //
    Sidebar.appendChild(option);
    //
    // --------------------------- AP <
  }
  // ---------------------------------- Builder <<
  //
  // --------------------------------------------- > AB <
  //
  // ---------------------------------------------------- >> SB <<
  //
  // ------------------------------------------------ >> return <<
  return Sidebar;
  // ------------------------------------------------ >> return <<
}
// =============================================================== >> Module <<
