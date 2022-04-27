const questions = document.querySelectorAll(".question"),
   questionList = document.getElementById("list"),
   buttonLeft = document.querySelector(".pagination__button-left"),
   buttonRight = document.querySelector(".pagination__button-right"),
   buttonsPaginationBlock = document.getElementById("pages"),
   itemForPage = 5;


let maxPages = (document.querySelectorAll(".question").length - document.querySelectorAll(".question").length % itemForPage) / itemForPage + 1,
   activePage = 1,
   buttonsPageArray = [],
   pageButton;


createPaginationButtons()
console.log(buttonsPageArray);


function fillPage(wrapper) {
   wrapper.innerHTML = "";
   let startBlock = (activePage - 1) * itemForPage;

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
      pageButton = document.createElement('div');

      if (i == 1) {
         pageButton.className = "pagination__page pagination__button button16_24";
      }
      else {
         pageButton.className = "pagination__page pagination__button button16_24";
      };
      pageButton.innerHTML = i;
      buttonsPaginationBlock.append(pageButton);
      buttonsPageArray[i - 1] = pageButton;
   }
   buttonsPageArray[0].classList.add('active');
};

function clickButton() {
   buttonsPageArray.forEach((item) => {
      item.classList.remove('active');
   });

   buttonsPageArray[activePage - 1].classList.add('active');
   fillPage(questionList);
   window.scrollTo(0, 0);
}

fillPage(questionList);


buttonRight.addEventListener('click', () => {
   if (activePage !== maxPages) {
      activePage++;
      clickButton();
   }
});

buttonLeft.addEventListener('click', () => {
   if (activePage !== 1) {
      activePage--;
      clickButton();
   }
   console.log("left")
});

buttonsPageArray.forEach((item, index) => {
   item.addEventListener('click', () => {
      activePage = index + 1;
      clickButton();
      console.log(activePage);
   });
});