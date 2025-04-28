
import checkBox from "./checkbox.js";
export default function settingsList(dataOrigin) {
  
    let articleElm = document.createElement("article")
    articleElm.classList.add("settings__categories")
    articleElm.innerHTML = `
      <header class="settings__header">
        <span class="settings__title">Settings</span>
        <p class="settings__subtitle">Categories</p>
      </header>
      ${dataOrigin.map(category => `
        <section class="news__header">
          <img class="logo" src="/img/newsify_logo.svg" alt="LOGO">
          <h3 class="news__category">${category.section}</h3>
          <label class="switch">
            <input type="checkbox" checked>
            <span class="slider round"></span>
          </label>         
        </section>      
      `).join("")}
      <button class="dark__mode">Toggle dark mode</button>
      <p class="version">Version 4.8.15.16.23.42</p>
    `
    document.querySelector("main").innerHTML = ""; // Clear existing content
    document.querySelector("main").append(articleElm)
    
    checkBox()
   
}
