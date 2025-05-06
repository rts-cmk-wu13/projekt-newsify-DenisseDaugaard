# Projektdokumentation

**Navn:** 
Denisse Dauggard
**Hold:** WU13

**Uddannelse:** Webudvikler

**Uddannelsessted:** Roskilde Tekniske Skole

[Link til min applikaton](https://newsifyappdenisse.netlify.app)


## Teknologier

-   HTML
-   CSS
-   JavaScript
-   Webpack
-	Jest
-   ...

---



### Redegørelse for oprindelsen af evt. tredjeparts kode anvendt i opgaveløsningen (Teknisk dokumentation)

(Hvilke node-pakker har du installeret for at dit projekt virker? Beskriv kort hvilket "problem" hver pakke løser.)

---npm create vite@latest . This creates the index.html and the main.js that is connected to the html along with the source folder and public folder that we need.

---npm add -D sass-embedded  This allows us to use sass
--- I also used a vite.config.js to be able to create multipages, because when we deploy vite only resolve main.js and  index.html


```scss
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'login.html'), 
        home: resolve(__dirname, 'home.html'), 
        settings: resolve(__dirname, 'settings.html'), 
        archive: resolve(__dirname, 'archive.html'), 
        popular: resolve(__dirname, 'popular.html'), 
      },
    },
  },
})
```


### Argumentation for de valg du selvstændigt har truffet under løsningen af opgaven

(Hvilke overvejelser har du gjort dig, fx. i forbindelse med dit valg af animationer)

--- Since i don't have much experince with animation, i did a bit of research in the internet and i found a very nice looking animation to increase the size of my logo slowly
```scss
@keyframes logo{
    0%{
        transform: scale(0.6);
        opacity: 0;
    }
    100%{
        transform: scale(1);
        opacity: 1;
    }
}
```
afterwards I added the text basically using  -webkit-background-clip: text; to clip the filling of the text and deleing the stroke as well. My animation for the title consist in adding a color to the background 
```scss 
animation: backcolor 3s linear 1 forwards;
	@keyframes logo{
    0%{
        transform: scale(0.6);
        opacity: 0;
    }
    100%{
        transform: scale(1);
        opacity: 1;
    }
}
```

Finallly I just took the whole div with my logo and text and moved up to revel my carrousel 
```scss
@keyframes slideUpFade {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-100%);
      opacity: 0;
    }
  }
  
```
### Vurdering af egen indsats & gennemførelse af opgaveforløbet (Arbejdsgangen)

(Hvad gik godt. Hvor prioriterede du forkert. Klagesange fra de varme lande om halvfærdigt produkt, på grund af manglende nattesøvn, fordi din kæle-skildpadde havde tandpine er IKKE interessante.)

# Evaluation of my work 
## Swipe Function 
One of the things Im not totally satisficed with is my sass. I think it could have more @mixings to make it more efficient, or i could reuse some my styling, but at the end i got too busy with the javascript that left it to the side.I definitly need to practice it more to learn how to use all the smart features better.

Another point that was super chalenging was the swipe-to-safa or swipe-to- delete function.
I used in more that one page, so when I called or appended the function it was constatly throwing error because some 
elements where defined in one page or function, but not the other. 
So used optional chaining (?.)
```js
const popularTitle = popularElm?.querySelector(".news__pop__title")?.textContent
```
to avoid runtime errors if sectionElem or the result of querySelector(...) is null or undefined.
It safely attempts to get the .textContent of the .news__category element inside sectionElem.
If anything in the chain is null or undefined, categoryTitle will just be undefined instead of throwing an error.

### Fetch
Also i had problems because I used data from my local storage from two different objects that had two different structures, because I fetched from Top Stories, and Popular in the New York times API. 
So for  my save function and delte function I pretty much made two codes, that are very similar.So I have the feeling i could have done something smarter, but it might mean to rewrite most of my work, and I did not wanted  to do that. 

### dialog vs alert and confirm

At first I used confirmation alerts just to have an indicator that I could save or delete items from my app, but when I tried it on my phone I realized that those methods look terrible on the phone and are very annoying and huge!!!
So I changed it to dialogs or modals, however I had to use a timer because apparently when I deleted my alert the browser hasn’t had time to repaint or reflow the DOM to register the dialog's existence — so .showModal() either fails silently or throws an error

```js

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
	}
```

### Useful things I learned

I think a good example of this is my search function.
We covered some things in class, and I learned some with this project. Things that might not seem like much to someone with more experience, but for me, it was very useful.
here in this in the function i made some comments about those puints I refered to...


```js
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


		/*   => this was very useful and solved an issue that also had in my swipe function <=  */
       	 let matchFound = false; // Track matches
        /* ----------------------------------------------------------------------------------------- */



        news.forEach(newsElm => {
            if (newsElm.textContent.toLowerCase().includes(serchWords)) {
               matchFound = true;



	/*=> I think we have only used .innerHTML but this .outerHTML was very useful in this part of my code <=*/		
               searchResults.innerHTML += newsElm.outerHTML
			   // outerHTML
			   // //Refers to the entire element including the element tag itself.
			   // //When you set element.outerHTML = '...', you're replacing the entire element in the DOM with new content.
	 /* ----------------------------------------------------------------------------------------- */


    /* --------------Here i used optional chaining (?.)   again ----------------------------------*/
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

        /* ---------------- Here I'm just happy that I was able to reuse my modal.  :D -----------------  */

          if (!matchFound) {
            let message = dialogMessage()
            document.querySelector('main').append(message)
            message.querySelector('p').innerHTML = 'Match not found'
              message.showModal()
              }
    })   
}
```


---
### En beskrivelse af særlige punkter til bedømmelse

(er der en særlig detalje som du synes din underviser bør lægge mærke til når dit projekt evalueres)

Du kan vise kode i markdown på følgende måder: 
```js
function myFunction() {
	
}
```

```css
.my__css-rule {
	property: value;
}
```

