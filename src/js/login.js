import '/src/style/style.scss'


document.querySelector('#app__login').innerHTML = `
<main>
   <article>

        <section class="welcome__logo">
            <img class="logo" src="/img/newsify_logo.svg" alt="LOGO">
            <h1 class="welcome__title">Newsify</h1>
        </section>    

        <p>Welcome! Let’s dive into your account!</p>

        <div class="login__btns">
            <button class="login__btn">Continue with Facebook</button>
            <button class="login__btn">Continue with Google</button>
        </div>

        <div class="divider">
            <span>or</span>
        </div>

        <form  action="home.html">
        <button class="sigin__btn">Sign in with password</button>
        </form>
    
        <p>Don’t have an account? <span class="color__text">Sign up</span></p>
   </article>
</main>
`


