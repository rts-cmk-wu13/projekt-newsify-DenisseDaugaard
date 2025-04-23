import '/src/style/style.scss'
import homeData from './more/home-data.js'

document.querySelector('#app__home').innerHTML = `
<header>
    <div class="top__logo">
        <img class="logo" src="/img/newsify_logo.svg" alt="LOGO">
        <h2>Newsify</h2>
    </div>

    <form action="get">
        <input class="search" type="search" placeholder="Search news">
    </form>

</header>

<main> </main>

<footer>
    <div class="footer__nav">
        <section class="nav__icon">
            <a href="home.html">
                <img class="footer__logo" src="/img/home.svg" alt="image of an icon"
                <p>Home</p> 
            </a>
        </section>
        <section class="nav__icon">
            <a href="archive.html">
                <img class="footer__logo" src="/img/save2.svg" alt="image of an icon"
                <p>Archive</p> 
            </a>
        </section>
        <section class="nav__icon">
            <a href="popular.html">
                <img class="footer__logo" src="/img/favorite.svg" alt="image of an icon"
                <p>Popular</p> 
            </a>
        </section>
        <section class="nav__icon">
            <a href="settings.html">
                <img class="footer__logo" src="/img/settings.svg" alt="image of an icon"
                <p>Settings</p> 
            </a>
        </section>
    </div>
</footer>
`
homeData()


console.log(document.querySelectorAll("a"));


document.querySelectorAll('a').forEach(link => {
    if (link.pathname === window.location.pathname) {
      link.classList.add('active');
    }
})
  
  