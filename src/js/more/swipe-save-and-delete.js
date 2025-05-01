import saveToLocalStorage from "./local-storage.js"

export default function swipeSave() {
  let swipeContainer = document.querySelector(".news")
  const categoriesData = JSON.parse(localStorage.getItem('newsCategories')) || [];
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
    incialX = undefined;
    //console.log(event.target);
    const swipeContent = event.target.closest(".swipe__content");
    const currentNews = swipeContent?.closest(".news__content");
  
    if (!currentNews) {
      //console.warn("Could not find .news__content from swipe event");
      return;
    }
  
    const sectionElem = event.target.closest("section.news__articles");
    console.log(sectionElem);
    const categoryTitle = sectionElem?.querySelector(".news__category")?.textContent;
    //const categoryTitle = sectionElem.querySelector(".news__category").textContent;
    // Error: Cannot read properties of null (reading 'querySelector')
    console.log(categoryTitle);
    const index = parseInt(currentNews?.dataset?.index, 10)
    console.log(index);
    

    if (movedX < -100) {
      swipeContent.style.transform = 'translateX(0)'
      currentNews.setAttribute('data-delete', 'true')
      
      const confirmed = confirm("Are you sure you want to delete this news article?");
        
      if (confirmed) {
        // proceed with delete
          
        const categoryIndex = categoriesData.findIndex(category => category.section === categoryTitle);
        console.log(categoryIndex)
        
          if (categoryIndex !== -1 && categoriesData[categoryIndex].articles[index]) {
            categoriesData[categoryIndex].articles[index].delete = true;
            currentNews.remove()
            saveToLocalStorage('newsCategories', categoriesData);
          }
        }


      
    }
  
    if (movedX > 100) {
      swipeContent.style.transform = 'translateX(0)';
      currentNews.setAttribute('data-saved', 'true')
      alert("This article is being saved in the archive!");

  
      const categoryIndex = categoriesData.findIndex(category => category.section === categoryTitle);
      console.log(categoryIndex)
      
      if (categoryIndex !== -1 && categoriesData[categoryIndex].articles[index]) {
        categoriesData[categoryIndex].articles[index].saved = true
        saveToLocalStorage('newsCategories', categoriesData)
      }
    }
  }
}  