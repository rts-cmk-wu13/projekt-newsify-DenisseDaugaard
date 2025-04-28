import { readFromLocalStorage } from "./local-storage.js";
import newsBody from "./home-news-layout.js";
import newYorkTimes from "./new-york-times.js";


export default async function homeData() {

  const mySavedSetting = readFromLocalStorage('newsCategories')
  //console.log(mySavedSetting);

  if(mySavedSetting){
    newsBody(mySavedSetting)
    
  }else{

   newYorkTimes().then(data =>{
    newsBody(data)
   })
   
}


}



/* ------------notes----------------------- */
//?. is called optional chaining, which means:
//If art.multimedia is undefined or null, it won’t throw an error.
//It will just return undefined, which keeps the app from breaking.
//[1] accesses the second item in the array.
//?.url tries to get the url from that first object.