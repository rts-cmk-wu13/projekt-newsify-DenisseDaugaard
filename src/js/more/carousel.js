export default function carousel() {
    let carousel = document.querySelector(".carousel")
    let carousel__cards = carousel.querySelectorAll(".carousel__card")
    let continueBtn = carousel.querySelector(".continue")
    let slidePosition = 0
    console.log(continueBtn);
    
  
    // **dots**
    let dots = carousel.querySelector(".dots")
    
    // changer 
    
    let changer
    
    /**>>>>>>>>>> Changer VI <<<<<<<<**/
    function changeAutomatic() {
        setTimeout(() => {
            changer = setInterval(function () {
                NextSlide()
            }, 4000)
        }, 4500) // Delay before the first slide change
    }
    
    carousel.addEventListener("mouseenter", function (){
        clearInterval(changer);
    })
    
    carousel.addEventListener("mouseleave", function(){
        changeAutomatic()
    })
    /**>>>>>>>>>>Click button V <<<<<<<<**/
    function changeByDot(event){
        
        if(event.target != dots){ // because we dont want click in the div.dots we want to click in the single dot,  and dot != dots
            slidePosition = event.target.dataset.index
            showSilde (slidePosition)
        }
    }
    
    dots.addEventListener("click", function(event){
        changeByDot(event)
    })
    /**>>>>>>>>>>Give each slide a dot IV <<<<<<<<**/
    carousel__cards.forEach(function(_, i){  
        dots.innerHTML += '<div class="carousel__dot" data-index="'+ i +'"></div>' // for each slide, give a data atribute whith the index of the slide
    })
    
    /**>>>>>>>>>>Previus button III <<<<<<<<**/
        // function previusSlide (){
        //     slidePosition--
        //     if(slidePosition == -1){
        //         slidePosition = carousel__cards.length -1
        //     }
        //     showSilde (slidePosition)
        // }
    
    /**>>>>>>>>>Next button II <<<<<<<<<<<<**/
    
        function NextSlide (){
            slidePosition++
            if(slidePosition == carousel__cards.length){
                slidePosition = 0
            }
            showSilde (slidePosition)
        }

        continueBtn.addEventListener("click", NextSlide)
            
    /** >>>>>>>>>>>Show a single slide I <<<<<< **/
        function showSilde (index){
    
            let selectorDots = carousel.querySelectorAll(".carousel__dot")
            carousel__cards.forEach(function(carousel__card, i){ // here we make to paralale node list that responde to each other // first is the element == slide ,  i == the place to take
                // carousel__card.style.display = "none"
                carousel__card.classList.remove("carousel__card--active")
                selectorDots[i].classList.remove("carousel__dot--active") // this is my other node list
            })
            // carousel__cards[index].style.display = "flex"  
            carousel__cards[index].classList.add("carousel__card--active")
            selectorDots[index].classList.add("carousel__dot--active")
        }
    
    showSilde (slidePosition)
    changeAutomatic()
}
