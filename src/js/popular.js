import '/src/style/style.scss'
import homeData from './more/home-data.js'
import darkMode from './more/dark-mode.js'

document.querySelector('#app__body').innerHTML = `
<header>
    <div class="top__logo">
        <img class="logo" src="/img/newsify_logo.svg" alt="LOGO">
        <h2>Newsify</h2>
    </div>

    <form action="home.html">
        <input class="search" type="search" name="name" id="id" placeholder="Search news">
    </form>

</header>

<main> </main>

<footer>
    <div class="footer__nav">
        <section class="nav__icon">
            <a href="home.html">
                <img class="footer__logo" src="/img/home.svg" alt="image of an icon">
                <p>Home</p> 
            </a>
        </section>
        <section class="nav__icon">
            <a href="archive.html">
                <img class="footer__logo" src="/img/save2.svg" alt="image of an icon">
                <p>Archive</p> 
            </a>
        </section>
        <section class="nav__icon">
            <a href="popular.html">
                <img class="footer__logo" src="/img/favorite.svg" alt="image of an icon">
                <p>Popular</p> 
            </a>
        </section>
        <section class="nav__icon">
            <a href="settings.html">
                <img class="footer__logo" src="/img/settings.svg" alt="image of an icon">
                <p>Settings</p> 
            </a>
        </section>
    </div>
</footer>
`
homeData()
darkMode()


//console.log(document.querySelectorAll("a"));   /// make it a function 

document.querySelectorAll('a').forEach(link => {
    if (link.pathname === window.location.pathname) {
      link.classList.add('active');
    }
})

   