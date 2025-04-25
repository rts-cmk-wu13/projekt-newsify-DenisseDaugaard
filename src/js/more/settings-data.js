import darkMode from "./dark-mode.js"
import settingsList from "./setting-list-layout.js"
import saveToLocalStorage from "./local-storage.js"
import { readFromLocalStorage } from "./local-storage.js"

export default async function settingsData() {
  const sections = [
    "arts", "automobiles", "books/review", "business", "fashion",
    "food", "health", "home", "insider", "magazine", "movies", "nyregion", "obituaries",
    "science", "sports", "sundayreview", "technology", "theater", "t-magazine",
    "travel", "upshot", "us", "world"
  ]

  const apiKey = '7AfIlWjRMps6WnJ6UEhv3UDuoO5pigTz'

  async function fetchTopStories() {
    const results = []

    for (const section of sections) {
      const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`)
      if (res.ok) {
        const data = await res.json()
        results.push({
          section,
          articles: data.results.filter(article => article.title.trim() !== "").slice(0, 10)
        })
      }
    }

    return results
  }


  const savedCategories = readFromLocalStorage("newsCategories")

  if (savedCategories) {
    settingsList(savedCategories)  // Render saved categories immediately
  } else {
    // Fetch data and then render
     fetchTopStories().then((allSections) => {
      saveToLocalStorage('newsCategories', allSections)  // Save to localStorage
     settingsList(allSections)  // Render the fetched sections
    })
  }

  darkMode()
}



/* ------------notes----------------------- */
//?. is called optional chaining, which means:
//If art.multimedia is undefined or null, it won’t throw an error.
//It will just return undefined, which keeps the app from breaking.
//[0] accesses the first item in the array.
//?.url tries to get the url from that first object.