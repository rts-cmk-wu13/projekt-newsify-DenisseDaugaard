import '/src/style/style.scss'
import carousel from './more/carousel.js'

import darkMode from './more/dark-mode.js'

document.querySelector('#app__welcome').innerHTML = `
<main>

    <div class="welcome">
       <img class="welcome__logo" src="/img/newsify_logo.svg" alt="logo">
        <h1 class="welcome__title">Newsify</h1>  
    </div>


      <div class="carousel">

        <article class="carousel__card">
             <figure class="">
                 <img class="background__img img__1" src="/img/Onboarding 2.png" alt="image of a smartphone">
            </figure>
            <section class="carousel__text">
                <h2>Stay Connected,Everywhere, Anytime</h2>
                <p>Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.</p>
            </section>
        </article>

        <article class="carousel__card">
             <figure class="background__img__container">
             <img class="background__img img__2" src="/img/Onboarding 3.png" alt="image of a smartphone">
            </figure>
             <section class="carousel__text">
                <h2>Become a Savvy Global Citizen.</h2>
                <p>Discover tailored news that aligns with your interests and preferences. Your personalized news journey awaits!</p>
            </section>
        </article>

        <article class="carousel__card">
            <figure class="">
             <img class="background__img img__3" src="/img/Onboarding 4.png" alt="image of a smartphone">
            </figure>
            <section class="carousel__text">
                <h2>Enhance your News Journey Now!</h2>
                <p>Be part of our dynamic community and contribute your insights and participate in enriching conversations.</p>
            </section>
        </article>

        <div class="dots">
        </div>

        <div class="carousel__btns">
        <form action="login.html">
            <button class="skip">Skip</button>
        </form> 
       
            <button class="continue">Continue</button>
        
        </div>
       
     </div>
</main>
`
carousel()
darkMode()

