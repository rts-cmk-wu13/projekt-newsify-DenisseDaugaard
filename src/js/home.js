import '/src/style/style.scss'


document.querySelector('#app__home').innerHTML = `
<header>
    <div class="top__logo">
        <img class="logo" src="/public/img/newsify_logo.svg" alt="LOGO">
        <h2>Newsify</h2>
    </div>

    <form>
        <input class="search" type="text" placeholder="Search news">
    </form>

</header>

<main> 
    <article class="news">
        <section class="news__articles">
            <details>
                <summary class="news__header">
                <img class="logo" src="/public/img/newsify_logo.svg" alt="LOGO">
                <h3>HEALTH</h3></summary>
                    <div class="news__content">
                        <figure class="news__img__container">

                        </figure>

                        <section class="news__text">
                            <h2>Headline</h2>
                            <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
                        </section>
                    </div>
                    
            </details>
        </section>
        <section class="news__articles">
            <details>
                <summary class="news__header">
                <img class="logo" src="/public/img/newsify_logo.svg" alt="LOGO">
                <h3>SPORTS</h3></summary>
                    <div class="news__content">
                        <figure class="news__img__container">

                        </figure>

                        <section class="news__text">
                            <h2>Headline</h2>
                            <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
                        </section>
                    </div>
            </details>
        </section>
        <section class="news__articles">
            <details>
                <summary class="news__header">
                <img class="logo" src="/public/img/newsify_logo.svg" alt="LOGO">
                <h3>TRAVEL</h3></summary>
                <div class="news__content">
                        <figure class="news__img__container">

                        </figure>

                        <section class="news__text">
                            <h2>Headline</h2>
                            <p>Surfing is a surface water sport in which the wave rider, referred to as...</p>
                        </section>
                    </div>
            </details>
        </section>
      
    </article>
</main>

<footer>
</footer>
`

