import saveToLocalStorage from "./local-storage.js"
import { readFromLocalStorage } from "./local-storage.js"

export default function archiveBody(dataOrigin) {
   
    let articleElm = document.createElement("article")
    articleElm.classList.add("saved__news")
    articleElm.innerHTML= `

     <header class="settings__header">
        <span class="settings__title">My Saved News</span>
      </header>

      ${dataOrigin.map(newsSaved => `
        <div class="news__saved__container">
        

          <figure class="news__saved__img__container">
          <img class="news__saved__img" 
          src="${newsSaved.multimedia?.[1]?.url || '/public/img/fallback.jpg'}" 
          alt="${newsSaved.title}">
          </figure>
              
            <section class="news__saved__text">
            <h3>${newsSaved.title}</h3>
            <p>${newsSaved.abstract}</p>
            </section>
          <button class="achive__delete__btn"><img class="swipe__del__img" src="/img/delete.svg" alt="image of a trashcan"></button>
        </div> 
            `).join('')}
      
 `
    document.querySelector("main").append(articleElm)

    const currentData = dataOrigin.flatMap(news => news)
    const allDeleteBtns = document.querySelectorAll('.achive__delete__btn')
    //console.log(currentData);
    
    const allData = readFromLocalStorage('newsCategories')
    
      allDeleteBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        //console.log(event.target, currentData[index])
        console.log( btn.closest(".news__saved__container"));
        
        const targetNews = currentData[index];

        allData.forEach(category => {
          category.articles.forEach(news => {
            if (news.title === targetNews.title) {
               delete news.saved
            }
          })
        })


        alert('You haved delete this Article from My saved News')
        btn.closest(".news__saved__container").remove() 
        saveToLocalStorage('newsCategories', allData)
        console.log(allData)

      })
    })
     

    return articleElm
}


