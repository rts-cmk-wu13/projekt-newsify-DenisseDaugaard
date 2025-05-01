import { readFromLocalStorage } from "./local-storage.js";
import { popularNews } from "./new-york-times.js";
import popularMain from "./popular-main.js";


export default async function popularData() {

  const popularSaved = readFromLocalStorage('newsPopular')
  //console.log(popularSaved);

  if(popularSaved){
    //console.log('hello');
   popularMain(popularSaved)

  }else{
    popularNews()
  }


  

}


/* ------------notes----------------------- */
//?. is called optional chaining, which means:
//If art.multimedia is undefined or null, it won’t throw an error.
//It will just return undefined, which keeps the app from breaking.
//[1] accesses the second item in the array.
//?.url tries to get the url from that first object.