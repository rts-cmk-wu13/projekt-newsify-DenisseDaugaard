export default function newsBody(dataOrigin) {
    let articleElm = document.createElement("article")
    articleElm.classList.add("news")
    articleElm.innerHTML= `
      ${dataOrigin.map( category => `
       <section class="news__articles">
              <details name="categories">
                  <summary class="news__header">
                  <img class="logo" src="/img/newsify_logo.svg" alt="LOGO">
                  <h3 class="news__category">${category.section}</h3></summary>//
                  ${category.articles.map(news => `
                      <div class="news__content">
                          <figure class="news__img__container">
                              <img class="news__img" src="${news.multimedia?.[1]?.url || '/public/img/fallback.jpg'}" alt="${news.title}">
                          </figure>
  
                          <section class="news__text">
                              <h5>${news.title}</h5>
                              <p>${news.abstract}</p>
                          </section>
                      </div>    
                  `).join("")}
              </details>
          </section>
        
  
      `).join("")}
    `
    document.querySelector("main").append(articleElm)
    
    return articleElm
}
