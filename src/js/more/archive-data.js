import darkMode from "./dark-mode.js"
import archiveBody from "./archive-main.js"
import { readFromLocalStorage } from "./local-storage.js"
import { archiveBodyPopular } from "./archive-main.js"


export default async function archiveData() {
  
  const savedCategories = readFromLocalStorage("newsCategories")
  const savedPopular = readFromLocalStorage("newsPopular")
  
  const savedNews = savedCategories.flatMap(category => category.articles.filter(news => news.saved === true))
  const savedPopNews = savedPopular.filter(news => news.saved == true)  
  // flatMap gives back single elements and not the array from an array !!
  //console.log(savedNews);
  //console.log(savedPopNews);
  

   if(savedNews == false && savedPopNews == false){
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

    if(savedPopNews){
      archiveBodyPopular(savedPopNews)
    }
    
    
    darkMode()

}




/* ------------notes----------------------- */
//?. is called optional chaining, which means:
//If art.multimedia is undefined or null, it won’t throw an error.
//It will just return undefined, which keeps the app from breaking.
//[0] accesses the first item in the array.
//?.url tries to get the url from that first object.