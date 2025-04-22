import '/src/style/style.scss'


document.querySelector('#app__login').innerHTML = `
<main>
    <figure>
     <img src="/public/img/Onboarding 2.png" alt="image of a smartphone">
    </figure>
     <div class="carousel">
        <section class="carousel__card">
            <h2>Stay Connected,Everywhere, Anytime</h2>
            <p>Welcome to Newsify, your ultimate destination for breaking news, exclusive stories, and tailored content.</p>
        </section>
        <section class="carousel__card">
        </section>
        <section class="carousel__card">
        </section>

        <div class="dots">
             <div class="dot"></div>
             <div class="dot active"></div>
             <div class="dot"></div>
        </div>

        <div class="carousel__btns">
            <button class="skip">Skip</button>
            <button class="continue">Continue</button>
        </div>
     </div>
</main>

`
