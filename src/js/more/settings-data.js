import darkMode from "./dark-mode.js";

export default async function settingsData() {
const sections = ["arts",
  "automobiles",
  "books/review",
  "business",
  "fashion",
  "food",
  "health",
  "home",
  "insider",
  "magazine",
  "movies",
  "nyregion",
  "obituaries",
  "opinion",
  "politics",
  "realestate",
  "science",
  "sports",
  "sundayreview",
  "technology",
  "theater",
  "t-magazine",
  "travel",
  "upshot",
  "us",
  "world"];
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
  //console.log(allSections); // array of { section, articles }

  let articleElm = document.createElement("article");
  articleElm.classList.add("settings__categories");
  articleElm.innerHTML= `

    <header class="settings__header">
      <span class="settings__title">Settings</span>
      <p class="settings__subtitle">Categories</p>
    </header>
    ${allSections.map( category => `
        <section class="news__header">
          <img class="logo" src="/img/newsify_logo.svg" alt="LOGO">
          <h3 class="news__category">${category.section}</h3>
          <label class="switch">
              <input type="checkbox">
              <span class="slider round"></span>
          </label>         
        </section>      
    `).join("")}

          <button class="dark__mode">Toggle dark mode</button>
          <p class="version">Version 4.8.15.16.23.42</p>
  `
  document.querySelector("main").append(articleElm)
  darkMode()
  

});


}



/* ------------notes----------------------- */
//?. is called optional chaining, which means:
//If art.multimedia is undefined or null, it won’t throw an error.
//It will just return undefined, which keeps the app from breaking.
//[0] accesses the first item in the array.
//?.url tries to get the url from that first object.