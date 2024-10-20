// ======================================================================= >> Imports <<
//
// ------------------------------------------------------- >> Convertor <<
import { EnToFa } from "./../Perisian_Convertor/perisan_convertor.js";
// ------------------------------------------------------- >> Convertor <<
//
// ======================================================================= >> Imports <<
//
// ================================================================== >> Btn Function <<
function Btn(ID, Text, Icon, Listener) {
  //
  // -------------------------------------------- >> Btn Container <<
  const PaginationBtn = document.createElement("div");
  PaginationBtn.classList.add("PaginationBtn");
  PaginationBtn.id = ID;
  // -------------------------------------------- >> Btn Container <<
  //
  // ------------------------------------------------------- >> EL <<
  PaginationBtn.addEventListener("click", () => {
    Listener();
  });
  // ------------------------------------------------------- >> EL <<
  //
  // ------------------------------------------------- >> Btn Text <<
  const PaginationBtnText = document.createElement("span");
  PaginationBtnText.classList.add("PaginationBtnText");
  PaginationBtnText.textContent = Text;
  // ------------------------------------------------- >> Btn Text <<
  //
  // ------------------------------------------------- >> Btn Icon <<
  const PaginationBtnIcon = document.createElement("iconify-icon");
  PaginationBtnIcon.classList.add("PaginationBtnIcon");
  //
  // ---------------------------------- > Icon Value <
  PaginationBtnIcon.setAttribute("icon", `${Icon}`);
  // ---------------------------------- > Icon Value <
  //
  // ------------------------------------------------- >> Btn Icon <<
  //
  // ------------------------------------------------------- >> AP <<
  PaginationBtn.appendChild(PaginationBtnText);
  //
  PaginationBtn.appendChild(PaginationBtnIcon);
  // ------------------------------------------------------- >> AP <<
  //
  // --------------------------------------------------- >> Return <<
  return PaginationBtn;
  // --------------------------------------------------- >> Return <<
}
// ================================================================== >> Btn Function <<
//
// ==================================================================== >> Pagination <<
export function paginationModule(
  FirstPageListener,
  PreviousPageListner,
  NextPageListner,
  LastPageListner,
  OnPageClick,
  TotalPage,
  PageNumber = 1,
  PagenumberContainerId,
  PagesNumberContainerId
) {
  // --------------------------------------------------------- >> PC << ( Pagination Container )
  const PaginationContiner = document.createElement("div");
  PaginationContiner.classList.add("PaginationContiner");
  // --------------------------------------------------------- >> PC << ( Pagination Container )
  //
  // ------------------------------------------------------ >> F P B << ( First Page Btn )
  //
  // ---------------------------------------- > Varibales <
  const FirstPageBtnText = "اولین";
  const FirstPageBtnIcon = "icon-park-outline:double-left";
  const FirstPageBtnId = "FirstPageBtn";
  // ---------------------------------------- > Varibales <
  //
  // ----------------------------------------- > CallBack <
  const FirstPageBtn = Btn(
    FirstPageBtnId,
    FirstPageBtnText,
    FirstPageBtnIcon,
    FirstPageListener
  );
  // ----------------------------------------- > CallBack <
  //
  // -------------------------------------- > AppendChild <
  PaginationContiner.appendChild(FirstPageBtn);
  // -------------------------------------- > AppendChild <
  //
  // ------------------------------------------------------ >> F P B << ( First Page Btn )
  //
  // -------------------------------------------------------- >> P B << ( Previous Page )
  //
  // ------------------------------------------ > Varibales <
  const PreviousBtnText = "قبلی";
  const PreviousBtnIcon = "icon-park-outline:left";
  const PreviousBtnId = "PreviousBtn";
  // ------------------------------------------ > Varibales <
  //
  // ------------------------------------------- > CallBack <
  const PreviousBtn = Btn(
    PreviousBtnId,
    PreviousBtnText,
    PreviousBtnIcon,
    PreviousPageListner
  );
  // ------------------------------------------- > CallBack <
  //
  // ---------------------------------------- > AppendChild <
  PaginationContiner.appendChild(PreviousBtn);
  // ---------------------------------------- > AppendChild <
  //
  // -------------------------------------------------------- >> P B << ( Previous Page )
  //
  // ------------------------------------------------------ >> P N C << ( Pages Number Container )
  //
  // --------------------------------- > Create Container <
  const PagesNumberContainer = document.createElement("div");
  PagesNumberContainer.classList.add("PagesNumberContainer");
  PagesNumberContainer.id = PagesNumberContainerId;
  // --------------------------------- > Create Container <
  //
  // ------------------------------------------ > Builder <
  for (let pageNum = PageNumber; pageNum <= TotalPage; pageNum++) {
    //
    // --------------- Page Number Container >>
    const PageNumberContiner = document.createElement("div");
    PageNumberContiner.classList.add("PageNumberContainer");
    PageNumberContiner.id = PagenumberContainerId;
    // --------------- Page Number Container <<
    //
    // -------------------- Page Number Text >>
    const PageNumberText = document.createElement("span");
    PageNumberText.classList.add("PageNumberText");
    //
    // -- Fill With Value >
    PageNumberText.textContent = EnToFa(`${pageNum}`);
    // -- Fill With Value <
    //
    // -------------------- Page Number Text <<
    //
    // ---------------------------- listener >>
    PageNumberContiner.addEventListener("click", () => {
      OnPageClick(pageNum, PageNumberContiner);
    });
    // ---------------------------- listener <<
    //
    // ------------------------ Append Child >>
    PageNumberContiner.appendChild(PageNumberText);
    PagesNumberContainer.appendChild(PageNumberContiner);
    // ------------------------ Append Child <<
  }
  // ------------------------------------------ > Builder <
  //
  // ------------------------------------- > Append Child <
  PaginationContiner.appendChild(PagesNumberContainer);
  // ------------------------------------- > Append Child <
  //
  // ------------------------------------------------------ >> P N C << ( Pages Number Container )
  //
  // -------------------------------------------------------- >> N P << ( Next Page )
  //
  // ------------------------------------------ > Varibales <
  const NextBtnText = "بعدی";
  const NextBtnIcon = "icon-park-outline:right";
  const NextBtnId = "NextBtn";
  // ------------------------------------------ > Varibales <
  //
  // ------------------------------------------- > CallBack <
  const NextBtn = Btn(NextBtnId, NextBtnText, NextBtnIcon, NextPageListner);
  // ------------------------------------------- > CallBack <
  //
  // ---------------------------------------- > AppendChild <
  PaginationContiner.appendChild(NextBtn);
  // ---------------------------------------- > AppendChild <
  //
  // -------------------------------------------------------- >> N P << ( Next Page )
  //
  // -------------------------------------------------------- >> L P << ( Last Page )
  //
  // ------------------------------------------ > Varibales <
  const LastPageBtnText = "آخرین";
  const LastPageBtnIcon = "icon-park-outline:double-right";
  const LastPageBtnId = "LastPageBtnId";
  // ------------------------------------------ > Varibales <
  //
  // ------------------------------------------- > CallBack <
  const LastPageBtn = Btn(
    LastPageBtnId,
    LastPageBtnText,
    LastPageBtnIcon,
    LastPageListner
  );
  // ------------------------------------------- > CallBack <
  //
  // ---------------------------------------- > AppendChild <
  PaginationContiner.appendChild(LastPageBtn);
  // ---------------------------------------- > AppendChild <
  //
  // -------------------------------------------------------- >> L P << ( Last Page )
  //
  // ----------------------------------------------------- >> retrun <<
  return PaginationContiner;
  // ----------------------------------------------------- >> retrun <<
}
// ==================================================================== >> Pagination <<
