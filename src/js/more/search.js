import { readFromLocalStorage } from "./local-storage.js"
import saveToLocalStorage from "./local-storage.js"
import { dialogMessage } from "./dialog.js"


export default function search(){
    const searchForm = document.querySelector('.search__form')
    const searchBox = document.querySelector('.search__box')
    const news = document.querySelectorAll(".news__content")
    const searchResults = document.querySelector('.search__results')
    const categoriesData = readFromLocalStorage('newsCategories')
    
    

    searchForm.addEventListener("submit", (event) =>{
        event.preventDefault()
        const serchWords = searchBox.value.toLowerCase()
        //console.log(serchWords)
        searchResults.innerHTML = ""
        let matchFound = false; // Track matches
        

        news.forEach(newsElm => {
            if (newsElm.textContent.toLowerCase().includes(serchWords)) {
               matchFound = true;
               searchResults.innerHTML += newsElm.outerHTML

               const matchedTitle = searchResults.querySelector(".news__title")?.textContent?.trim()
               //console.log(matchedTitle)

               categoriesData.forEach(category => {
                category.articles.forEach(article => {
                  
                  if (article.title === matchedTitle) {
                        matchFound = true;
                        article.saved = true
                        //console.log("Marked as saved:", article)
                        //console.log(categoriesData);
                        saveToLocalStorage('newsCategories', categoriesData)
                  }
                })
              })
            }  
          })

          if (!matchFound) {
            let message = dialogMessage()
            document.querySelector('main').append(message)
            message.querySelector('p').innerHTML = 'Match not found'
              message.showModal()
              }
    })   
}