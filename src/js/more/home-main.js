import { popularNews } from "./new-york-times.js"
import swipeSave from "./swipe-save-and-delete.js"

export default function newsBody(dataOrigin) {

    // dataOrigin.forEach( category=> {
    //     console.log(category.disabled);
    // })
   
    let articleElm = document.createElement("article")
    articleElm.classList.add("news")
    articleElm.innerHTML= `
      ${dataOrigin.map( category => `
       <section class="news__articles" ${category.disabled ? 'style="display: none;"' : ''}>
              <details name="categories">
                  <summary class="news__header">
                  <img class="logo" src="/img/newsify_logo.svg" alt="LOGO">
                  <h3 class="news__category">${category.section}</h3></summary>
                  ${category.articles.map((news, index) =>  `
                        <div class="news__content" data-index=${index}  ${news.delete ? 'style="display: none;"' : ''}>
                            <div class="swipe__content">
                                <figure class="news__img__container">
                                    <img class="news__img" src="${news.multimedia?.[1]?.url || '/public/img/fallback.jpg'}" alt="${news.title}">
                                </figure>
        
                                <section class="news__text">
                                    <h5>${news.title}</h5>
                                    <p>${news.abstract}</p>
                                </section>
                                <button class="delete__btn"><img class="swipe__del__img" src="/img/delete.svg" alt="image of a trashcan"></button>
                                <button class="save__btn"><img class="swipe__save__img" src="/img/save.svg" alt="image of a trashcan"></button>
                            </div>      
                        </div>    
                 `).join("")}
              </details>
          </section>
      `).join("")}
 `
    document.querySelector("main").append(articleElm)
    swipeSave()

    popularNews()


    return articleElm
}


