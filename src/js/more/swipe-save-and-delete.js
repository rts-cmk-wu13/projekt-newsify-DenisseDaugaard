import dialogConfirm, { dialogMessage } from "./dialog.js"
import saveToLocalStorage from "./local-storage.js"

export default function swipeSave() {
  let swipeContainer = document.querySelector(".news")
  const categoriesData = JSON.parse(localStorage.getItem('newsCategories')) || []
  const popularData = JSON.parse(localStorage.getItem('newsPopular')) || []
  const dialogMessageElm = dialogMessage()
  const dialogDeleteElm = dialogConfirm()

  let incialX
  let currentX
  let movedX
  let isSwiping = false
  let swipeAction = null  // Keeps track of the current swipe action (delete or save)

  swipeContainer.addEventListener('pointerdown', startTouch)
  swipeContainer.addEventListener('pointermove', moveTouch)
  swipeContainer.addEventListener('pointerup', endTouch)

  function startTouch(event) {
    incialX = event.clientX
    isSwiping = false  // Reset swipe flag for each new touch
    swipeAction = null  // Reset the action before any swipe
  }

  function moveTouch(event) {
    currentX = event.clientX
    movedX = currentX - incialX

    if (Math.abs(movedX) > 10) {
      isSwiping = true // Only mark as swiping if the movement is large enough
    }

    const swipeContent = event.target.closest(".swipe__content")
    if (swipeContent) {
      swipeContent.style.transform = `translateX(${movedX}px)`
    }
  }

  function endTouch(event) {
    incialX = undefined
    const swipeContent = event.target.closest(".swipe__content")
    const currentNews = swipeContent?.closest(".news__content")

    if (!currentNews) {
      return
    }

    const sectionElem = event.target.closest("section.news__articles")
    //console.log(sectionElem);
    const popularElm = event.target.closest("div.news__content")
    const categoryTitle = sectionElem?.querySelector(".news__category")?.textContent
    //console.log(categoryTitle);
    //console.log(popularTitle);
    const popularTitle = popularElm?.querySelector(".news__pop__title")?.textContent
    const index = parseInt(currentNews?.dataset?.index, 10)

    // Reset swipe state if the swipe action wasn't enough to trigger delete or save
    if (!isSwiping || !currentNews) {
      swipeContent.style.transform = 'translateX(0)'
      movedX = 0
      isSwiping = false
      currentNews.removeAttribute('data-delete')
      currentNews.removeAttribute('data-saved')
      return
    }

    // Handle Delete (Swipe to the left)
    if (movedX < -100) {
      swipeAction = 'delete' // Set action to delete if swiped left

      swipeContent.style.transform = 'translateX(0)'
      currentNews.setAttribute('data-delete', 'true')

      setTimeout(() => {
        currentNews.closest('.news__content').append(dialogDeleteElm)
        dialogDeleteElm.showModal()
      }, 100)

      dialogDeleteElm.querySelector('.delete__article').addEventListener('click', (event) => {
        if (event.target) {
          const categoryIndex = categoriesData.findIndex(category => category.section === categoryTitle)
          const popularIndex = popularData.findIndex(popular => popular.title === popularTitle)
          
          if (categoryIndex !== -1 && categoriesData[categoryIndex].articles[index]) {
            // Mark the article as deleted, but we need to remove it from the array
            categoriesData[categoryIndex].articles.splice(index, 1) // Remove the article from the array
            saveToLocalStorage('newsCategories', categoriesData)
          } else if (popularIndex !== -1) {
            // Remove from popular data
            popularData.splice(popularIndex, 1) // Remove the article from the array
            saveToLocalStorage('newsPopular', popularData)
          }

          currentNews.remove() // Also remove the element from the DOM
          dialogDeleteElm.close()
        }
      })
    }

    /* ---------------------- start saving action ------------------- */
    if (movedX > 100) {
      swipeAction = 'save' // Set action to save if swiped right

      swipeContent.style.transform = 'translateX(0)'
      currentNews.setAttribute('data-saved', 'true')
      
      setTimeout(() => {
        document.querySelector('main').append(dialogMessageElm)
        dialogMessageElm.showModal()
      }, 100)

      const categoryIndex = categoriesData.findIndex(category => category.section === categoryTitle)
      const popularIndex = popularData.findIndex(popular => popular.title === popularTitle)
      
      if (categoryIndex !== -1 && categoriesData[categoryIndex].articles[index]) {
        categoriesData[categoryIndex].articles[index].saved = true
        saveToLocalStorage('newsCategories', categoriesData)
      } else if (popularIndex !== -1) {
        popularData[popularIndex].saved = true
        saveToLocalStorage('newsPopular', popularData)
      }

      movedX = 0
      isSwiping = false
    }
  }

  // Add this click event listener to ensure we reset any unwanted modal shows
  swipeContainer.addEventListener('click', (event) => {
    const currentNews = event.target.closest(".news__content")
    if (currentNews && !swipeAction) {
      // If there's no swipe action, just reset and prevent modal show
      currentNews.removeAttribute('data-delete')
      currentNews.removeAttribute('data-saved')
    }
  })
}
