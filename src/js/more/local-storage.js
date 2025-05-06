
  // Save the fetched categories to localStorage
 export default function saveToLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  // Read the categories from localStorage
  export function readFromLocalStorage(key) {
    return JSON.parse(localStorage.getItem(key))
  }

  export function deleteFromLocalStorage(){
    return localStorage.removeItem()
  }