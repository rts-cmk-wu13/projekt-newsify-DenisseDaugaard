import saveToLocalStorage from "./local-storage";


export default  async  function newYorkTimes() {

    const sections = ["arts",
      "automobiles","books/review","business","fashion","food",
      "health","home","insider","magazine","movies","nyregion",
      "obituaries","opinion","politics","realestate",
      "science","sports","sundayreview","technology","theater",
      "t-magazine","travel","upshot","us","world"]
    
    const apiKey = '7AfIlWjRMps6WnJ6UEhv3UDuoO5pigTz';

    const results = [];
  
    for (const section of sections) {
      const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`);
      if (res.ok) {
        const data = await res.json()
        results.push({ section, articles: data.results
           .filter(article => article.title && article.title.trim() !== "")
          .slice(0, 10)})
      }
    }
    
    console.log(results);
    
  
    return results;
  }
  

export async function popularNews (){

  const apiKey = '7AfIlWjRMps6WnJ6UEhv3UDuoO5pigTz';
  const url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${apiKey}`

  
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }
    const data = await response.json()
    const popular = data.results
    
   saveToLocalStorage('newsPopular', popular)
    
  }


