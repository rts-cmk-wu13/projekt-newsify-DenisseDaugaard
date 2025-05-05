import { readFromLocalStorage } from "./local-storage.js"
import saveToLocalStorage from "./local-storage.js"

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
        

        news.forEach(newsElm => {
            if (newsElm.textContent.toLowerCase().includes(serchWords)) {
          
               searchResults.innerHTML += newsElm.outerHTML

               const matchedTitle = searchResults.querySelector(".news__title")?.textContent?.trim()
               console.log(matchedTitle)
               

               categoriesData.forEach(category => {
                category.articles.forEach(article => {
                  
                  if (article.title === matchedTitle) {
                        article.saved = true
                        console.log("Marked as saved:", article)
                        console.log(categoriesData);
                        saveToLocalStorage('newsCategories', categoriesData)
                  }
                  
                })
              })

            } 
          })
          
    })
    
    
}