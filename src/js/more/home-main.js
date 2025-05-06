
import swipeSave from "./swipe-save-and-delete.js"

export default function newsBody(dataOrigin) {

    // dataOrigin.forEach( category=> {
    //     console.log(category.disabled);
    // })
    let articleElm = document.createElement("article")
    articleElm.classList.add("news")
    articleElm.innerHTML= `
    <div class="search__results"></div>
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
                                    <h5 class="news__title">${news.title}</h5>
                                    <p>${news.abstract}</p>
                                     <a class="news__link" href="${news.url}">Read more...</a>   
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
 

    document.querySelectorAll('details').forEach((details) => {
        const summary = details.querySelector('summary');
        const content = details.querySelector('.news__content'); // Assuming this is the content you want to animate
      
        // Initially set the height of the content to 0
        content.style.height = '0';
        content.style.overflow = 'hidden';
        content.style.transition = 'height 0.5s ease-out';
      
        // Add event listener for the `details` element opening and closing
        summary.addEventListener('click', () => {
          if (details.hasAttribute('open')) {
            // Closing the details
            content.style.height = '0';
            setTimeout(() => {
              content.style.display = 'none'; // Hide the content completely after animation ends
            }, 500); // Match this with the duration of the transition
          } else {
            // Opening the details
            content.style.display = 'block'; // Make sure it's visible
            const contentHeight = content.scrollHeight + 'px'; // Get the full height of the content
            content.style.height = contentHeight; // Animate to the full height
          }
        });
      });
      


    return articleElm
}


