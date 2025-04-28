

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
  

