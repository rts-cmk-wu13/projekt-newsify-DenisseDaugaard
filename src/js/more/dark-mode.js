export default function darkMode() {
    const backgroiundImages = document.querySelectorAll(".background__img")
    //console.log(backgroiundImages);
    


    const rootElm = document.documentElement;
    const darkModeBtn = rootElm.querySelector(".dark__mode");
    //console.log(darkModeBtn);

    const isDarkMode = readFromLocalStorage("isDarkMode");
    const browserPrefersDark = window.matchMedia("(prefers-color-scheme:dark)").matches;
    let darkState = isDarkMode !== null ? isDarkMode : browserPrefersDark;

    // Set initial state
   rootElm.setAttribute("data-dark", darkState);
    saveToLocalStorage("isDarkMode", darkState);

    if(darkModeBtn){

        darkModeBtn.addEventListener("click", () => {
            darkState = !darkState;
            rootElm.setAttribute("data-dark", darkState);
            saveToLocalStorage("isDarkMode", darkState);
        })
    }
 
    if (backgroiundImages && rootElm.getAttribute("data-dark") === "true") {
        //console.log("Images found and dark mode is true")
        backgroiundImages.forEach((img, i) => {
            const newSrc = `/img/Onboarding-dark-${i + 2}.png`; // this works because of the name
                                                                    //if the img files start in 2
            img.src = newSrc;
        });
    
    }

    



    function saveToLocalStorage(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function readFromLocalStorage(key) {
        return JSON.parse(localStorage.getItem(key));
    }
   
}


