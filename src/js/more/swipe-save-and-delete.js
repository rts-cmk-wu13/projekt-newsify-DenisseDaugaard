export default function swipeSave() {
  let swipeContainer = document.querySelector(".news")
  //.log(swipeContainer);

  let incialX 
  let currentX 
  let movedX 

  swipeContainer.addEventListener('pointerdown', startTouch)
  swipeContainer.addEventListener('pointermove', moveTouch)
  swipeContainer.addEventListener('pointerup', endTouch)

  function startTouch(event) {
      //console.log(event);
      incialX = event.clientX
      //console.log(incialX);
    
  }


  function moveTouch(event) {
    //console.log(event);
    currentX = event.clientX
    //console.log(currentX);
    movedX = currentX - incialX
    //console.log(movedX);
    //console.log(event.target.closest(".swipe__content"));
    event.target.closest(".swipe__content").style.transform = `translateX(${movedX}px)`
    
  }


  function endTouch(event) {
    incialX = undefined
    if(movedX < -100){
      const categoriesData = JSON.parse(localStorage.getItem('newsCategories')) || [];
      const news = document.querySelectorAll(".news__content")
      console.log(news);

      //show button
      //save or delete 
      event.target.closest(".swipe__content").style.transform = 'translateX(0)'
      
      console.log(event.target.closest('.news__content'));
      const currentNews = event.target.closest('.news__content')
      currentNews.toggleAttribute("data-delete")
      currentNews.remove()
      alert("this new is been delete!!!")

    }

    
    if(movedX > 100){
      event.target.closest(".swipe__content").style.transform = 'translateX(0)'
      alert("this article is been saved in the archive!")
    }
  }
}

