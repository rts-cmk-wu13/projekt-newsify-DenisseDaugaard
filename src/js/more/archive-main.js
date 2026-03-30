import saveToLocalStorage from "./local-storage.js"
import { readFromLocalStorage } from "./local-storage.js"
import dialogConfirm from "./dialog.js"



export default function archiveBody(dataOrigin) {
   
    let articleElm = document.createElement("article")
    articleElm.classList.add("saved__news")
    articleElm.innerHTML= `
    
    <header class="settings__header">
        <span class="settings__title">My Saved News</span>
    </header>    

      ${dataOrigin.map(newsSaved => `
      <div class="news__saved__container">
      <a href="${newsSaved.url}">
          <figure class="news__saved__img__container">
          <img class="news__saved__img" 
          src="${newsSaved.multimedia?.[1]?.url || '/public/img/fallback.jpg'}" 
          alt="${newsSaved.title}">
          </figure>
              
            <section class="news__saved__text">
            <h3>${newsSaved.title}</h3>
            <p>${newsSaved.abstract}</p>
            </section>
      </a>             
          <button class="achive__delete__btn"><img class="swipe__del__img" src="/img/delete.svg" alt="image of a trashcan"></button>
        </div> 
     
            `).join('')}
      
 `
    document.querySelector("main").append(articleElm)

    const currentData = dataOrigin.flatMap(news => news)
    const allDeleteBtns = articleElm.querySelectorAll('.achive__delete__btn')
    //console.log(currentData);
    
    const allData = readFromLocalStorage('newsCategories')
    
      allDeleteBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        //console.log(event.target, currentData[index])
        //console.log( btn.closest(".news__saved__container"));
        
        const targetNews = currentData[index];

        allData.forEach(category => {
          category.articles.forEach(news => {
            if (news.title === targetNews.title) {
               delete news.saved


               let dialogConfirmElm = dialogConfirm()
               //console.log(dialogConfirmElm);
               
               btn.closest('.news__saved__container').append(dialogConfirmElm)
               dialogConfirmElm.showModal()
               
               dialogConfirmElm.querySelector('.delete__article').addEventListener('click', (event)=>{
                 if(event.target){
                   dialogConfirmElm.close()
                   event.target.closest('.news__saved__container').remove()
                   saveToLocalStorage('newsCategories', allData)
                 }
               })
               
            }
          })
        })
      })
    })
     

    return articleElm
}


export function archiveBodyPopular(dataOrigin) {
   
  const popularImg = dataOrigin.map( news => news.media.flatMap(imgs => imgs["media-metadata"][1].url))

    let articleElm = document.createElement("article")
    articleElm.classList.add("saved__news")
    articleElm.innerHTML= `

      ${dataOrigin.map((news , index) => `
     
        <div class="news__saved__container">
        <a href="${news.url}">
          <figure class="news__saved__img__container">
           <img class="popular__img" src="${popularImg[index]}" alt="${news.title}">
          </figure>
              
            <section class="news__saved__text">
            <h3>${news.title}</h3>
            <p>${news.abstract}</p>
            </section>
       </a>       
          <button class="achive__delete__btn"><img class="swipe__del__img" src="/img/delete.svg" alt="image of a trashcan"></button>
        </div> 
      
            `).join('')}
      
 `
    document.querySelector("main").append(articleElm)

    const currentData = dataOrigin.flatMap(news => news)
    //console.log(currentData);
    const allDeleteBtns = articleElm.querySelectorAll('.achive__delete__btn')
    //console.log(currentData);
    const allData = readFromLocalStorage('newsPopular')
    
      allDeleteBtns.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        //console.log(event.target, currentData[index])
        //console.log( btn.closest(".news__saved__container"));
        
        const targetNews = currentData[index];
        //console.log(targetNews);
        allData.forEach(news => {
            if (news.title === targetNews.title) {
               delete news.saved
               
               let dialogConfirmElm = dialogConfirm()
               //console.log(dialogConfirmElm);
               btn.closest('.news__saved__container').append(dialogConfirmElm)
               dialogConfirmElm.showModal()
               
               dialogConfirmElm.querySelector('.delete__article').addEventListener('click', (event)=>{
                 if(event.target){
                   dialogConfirmElm.close()
                   event.target.closest('.news__saved__container').remove()
                   saveToLocalStorage('newsPopular', allData)
                 }
               })
            }
        })
       

      })
    })
     

    return articleElm
}

