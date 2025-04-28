export default function checkBox() {
  const checkboxes = document.querySelectorAll(".news__header input[type='checkbox']");

  checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", () => {
      const category = checkbox.closest(".news__header")
      console.log(category);
      
      category.toggleAttribute("data-disable");

      const categoriesData = JSON.parse(localStorage.getItem('newsCategories')) || [];

      // Update the categoriesData array
      if (category.hasAttribute("data-disable")) {
        console.log(category, "not-available")
        categoriesData[index].disabled = true
        categoriesData[index].checked = false 
        checkbox.checked = false;  
      } else {
        console.log(category, "available")
        categoriesData[index].disabled = false
        categoriesData[index].checked = true // Keep the checkbox checked if not disabled
      }

      // Save back to localStorage, including both checked and disabled states
      localStorage.setItem('newsCategories', JSON.stringify(categoriesData))
    })
  })

  // Initialize checkboxes based on the saved data in localStorage
  const categoriesData = JSON.parse(localStorage.getItem('newsCategories')) || [];

  // Loop through all checkboxes and apply the saved state
  checkboxes.forEach((checkbox, index) => {
    if (categoriesData[index] && categoriesData[index].disabled) {
      checkbox.checked = false;  // Ensure the checkbox is unchecked if disabled
      checkbox.closest(".news__header").setAttribute("data-disable", "true")
    } else {
      checkbox.checked = true;  // Ensure the checkbox is checked if not disabled
      checkbox.closest(".news__header").removeAttribute("data-disable")
    }
  })
}
