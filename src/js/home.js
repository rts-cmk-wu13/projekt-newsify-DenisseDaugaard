import '/src/style/style.scss'
import homeData from './more/home-data.js'

document.querySelector('#app__home').innerHTML = `
<header>
    <div class="top__logo">
        <img class="logo" src="/img/newsify_logo.svg" alt="LOGO">
        <h2>Newsify</h2>
    </div>

    <form>
        <input class="search" type="text" placeholder="Search news">
    </form>

</header>

<main> </main>

<footer>
    <div class="footer__nav">
        <section class="nav__icon">
        <img class="logo" src="/img/home.svg" alt="image of an icon"
        <p>Home</p> 
        </section>
        <section class="nav__icon">
        <img class="logo" src="/img/save2.svg" alt="image of an icon"
        <p>Home</p> 
        </section>
        <section class="nav__icon">
        <img class="logo" src="/img/favorite.svg" alt="image of an icon"
        <p>Home</p> 
        </section>
        <section class="nav__icon">
        <img class="logo" src="/img/settings.svg" alt="image of an icon"
        <p>Home</p> 
        </section>
    </div>
</footer>
`
homeData()
