 
 //scroll up button js//
// const scrollTopButton =document.querySelector('.scroll-top');

// scrollTopButton.addEventListener('click', ()=> {
//     window.scrollTo(0,0);
// })

//scroll up button js//
 



// tab section//------------------------------------
const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll(".button");
const articles = document.querySelectorAll(".content");
tabs.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("live");
    });
    e.target.classList.add("live");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("live");
    });
    const element = document.getElementById(id);
    element.classList.add("live");
  }
});

// tab section -----------------------------------//