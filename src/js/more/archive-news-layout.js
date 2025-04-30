

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
          <img class="news__saved__img" src="${newsSaved.multimedia?.[1]?.url || '/public/img/fallback.jpg'}" alt="${newsSaved.title}">
          </figure>
              
            <section class="news__saved__text">
            <h3>${newsSaved.title}</h3>
            <p>${newsSaved.abstract}</p>
            </section>
          <button class="delete__btn"><img class="swipe__del__img" src="/img/delete.svg" alt="image of a trashcan"></button>
        </div> 
            `).join('')}
      
 `
    document.querySelector("main").append(articleElm)

    return articleElm
}


