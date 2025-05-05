import darkMode from "./dark-mode.js"
import settingsList from "./setting-main.js"
import saveToLocalStorage from "./local-storage.js"
import { readFromLocalStorage } from "./local-storage.js"
import newYorkTimes from "./new-york-times.js"

export default async function settingsData() {
  const savedCategories = readFromLocalStorage("newsCategories")

  if (savedCategories) {
    settingsList(savedCategories) 
    //checkBox()

  } else {
    
     const loadingMessage = document.createElement('div')
     loadingMessage.classList.add('loading__message')
     loadingMessage.innerHTML = '<h4>Loading data... <i class="fa-solid fa-gear fa-spin"></i></h4>'
     document.querySelector('main').append(loadingMessage)

    //console.log("Awaiting fetchTopStories API call...");
    newYorkTimes().then((allSections) => {
      saveToLocalStorage('newsCategories', allSections)  // Save to localStorage
     settingsList(allSections)  // Render the fetched sections
     loadingMessage.remove()
    
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