import darkMode from "./dark-mode.js"
import archiveBody from "./archive-main.js"
import { readFromLocalStorage } from "./local-storage.js"

export default async function archiveData(dataOrigin) {
  
  const savedCategories = readFromLocalStorage("newsCategories")
  const savedNews = savedCategories.flatMap(category =>
    category.articles.filter(news => news.saved === true))
  // flatMap gives back single elements and not the array from an array !!
  //console.log(savedNews);

   if(savedNews == false){
    console.log('no saved data');

    let noSavedNews = document.createElement('div')
    noSavedNews.classList.add('no__saved__news')
    noSavedNews.innerHTML = "The archive is empty!!"
    document.querySelector('main').append(noSavedNews)

    console.log(document.querySelector('main'))
    
   }
 

  if(savedNews){
    archiveBody(savedNews)
  }
  
  
    
    darkMode()

}




/* ------------notes----------------------- */
//?. is called optional chaining, which means:
//If art.multimedia is undefined or null, it won’t throw an error.
//It will just return undefined, which keeps the app from breaking.
//[0] accesses the first item in the array.
//?.url tries to get the url from that first object.