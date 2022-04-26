
const questions = document.querySelectorAll(".question"),
   itemForPage = 5,
   questionList = document.getElementById("list");
buttonsPaginationBlock = document.getElementById("pages")
let maxPages = (document.querySelectorAll(".question").length - document.querySelectorAll(".question").length % itemForPage) / itemForPage + 1
activePage = 1;

createPaginationButtons()


function fillPage(wrapper) {
   wrapper.innerHTML = "";
   let startBlock = (activePage - 1) * itemForPage;
   // console.log(startBlock);
   for (i = startBlock; i < itemForPage + startBlock; i++) {
      if (i >= questions.length) {
         break;
      }
      wrapper.append(questions[i]);
   };
};

function createPaginationButtons() {
   buttonsPaginationBlock.innerHTML = "";

   for (i = 1; i <= maxPages; i++) {
      let pageButton = document.createElement('div');
      pageButton.className = "pagination__page pagination__button button16_24";
      pageButton.innerHTML = i;
      buttonsPaginationBlock.append(pageButton);
      // buttonsPaginationBlock.append("<div class="pagination__page pagination__button button16_24">"i"</div>")
   }
   var buttonsPage = document.querySelectorAll(".pagination__page");
   buttonsPage[0].classList.add("active");
}

createPaginationButtons()
fillPage(questionList);