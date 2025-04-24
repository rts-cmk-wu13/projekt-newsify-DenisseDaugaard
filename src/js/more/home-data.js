export default async function homeData() {
const sections = ['health', 'politics', 'travel', 'Business'];
const apiKey = '7AfIlWjRMps6WnJ6UEhv3UDuoO5pigTz';

async function fetchTopStories() {
  const results = [];

  for (const section of sections) {
    const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`);
    if (res.ok) {
      const data = await res.json();
      results.push({ section, articles: data.results
         .filter(article => article.title && article.title.trim() !== "")
        .slice(0, 5) });
    }
  }

  return results;
}

fetchTopStories().then((allSections) => {
  console.log(allSections); // array of { section, articles }

  let articleElm = document.createElement("article");
  articleElm.classList.add("news");
  articleElm.innerHTML= `
    ${allSections.map( category => `
     <section class="news__articles">
            <details name="category">
                <summary class="news__header">
                <img class="logo" src="/img/newsify_logo.svg" alt="LOGO">
                <h3 class="news__categories">${category.section}</h3></summary>
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

});


}


/* ------------notes----------------------- */
//?. is called optional chaining, which means:
//If art.multimedia is undefined or null, it won’t throw an error.
//It will just return undefined, which keeps the app from breaking.
//[0] accesses the first item in the array.
//?.url tries to get the url from that first object.