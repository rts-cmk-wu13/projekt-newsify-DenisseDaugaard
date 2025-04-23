import '/src/style/style.scss'
import homeData from './more/home-data.js'

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
  
</main>

<footer>
</footer>
`
homeData()
