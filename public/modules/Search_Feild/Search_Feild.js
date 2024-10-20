// =============================================================== >> Module <<
export function Serach(id, placeHolder) {
  // ------------------------------------------- >> Container <<
  const SearchContainer = document.createElement("div");
  SearchContainer.classList.add("SearchContainer");
  SearchContainer.id = id;
  // ------------------------------------------- >> Container <<
  //
  // ----------------------------------------------- >> Input <<
  const SearchInput = document.createElement("input");
  SearchInput.classList.add("SearchInput");
  //
  // ------------------------------- > Attributes <
  SearchInput.setAttribute("type", "text");
  SearchInput.setAttribute("maxlength", "11");

  SearchInput.placeholder = placeHolder;
  // ------------------------------- > Attributes <
  //
  // ----------------------------------------------- >> Input <<
  //
  // -------------------------------------------------- >> AP <<
  SearchContainer.appendChild(SearchInput);
  // -------------------------------------------------- >> AP <<
  //
  // ---------------------------------------------- >> Return <<
  return {
    widget: SearchContainer,
    input: SearchInput,
  };
  // ---------------------------------------------- >> Return <<
}
// =============================================================== >> Module <<
