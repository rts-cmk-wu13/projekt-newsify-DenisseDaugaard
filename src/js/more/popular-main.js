
import swipeSave from "./swipe-save-and-delete.js"

export default function popularMain(dataOrigin) {

    const popularImg = dataOrigin.map( news => news.media.flatMap(imgs => imgs["media-metadata"][1].url))
    let articleElm = document.createElement("article")
    articleElm.classList.add("news")
    articleElm.innerHTML= `
    ${dataOrigin.map(( news, index )=> `
    <div class="news__content" data-index=${index}  ${news.delete ? 'style="display: none;"' : ''}>
        <div class="swipe__content">
            <figure class="news__img__container">
                  <img class="popular__img" src="${popularImg[index]}" alt="${news.title}">
            </figure>
                                        
            <section class="news__text">
                <h3>${news.title}</h3>
                <p>${news.abstract}</p>
            </section>
            <button class="delete__btn"><img class="swipe__del__img" src="/img/delete.svg" alt="image of a trashcan"></button>
            <button class="save__btn"><img class="swipe__save__img" src="/img/save.svg" alt="image of a trashcan"></button>
        </div>      
    </div> 
    `).join('')}        
 `
    document.querySelector("main").append(articleElm)
    swipeSave()
 

  

    return articleElm
}


