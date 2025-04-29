export default function swipeToDelete() {
    let startX = 0
    let currentX = 0
    let swipeThreshold = 50 // Minimum distance to trigger swipe
    let activeSwipe = null
    
    document.querySelectorAll('.news__content').forEach(container => {
      const swipeContent = container.querySelector('.swipe__content')
    
      container.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX
        activeSwipe = swipeContent
      })
    
      container.addEventListener('touchmove', (e) => {
        currentX = e.touches[0].clientX
        let diffX = currentX - startX
        if (diffX < 0) { // Only allow left swipe
          activeSwipe.style.transform = `translateX(${diffX}px)`
        }
      })
    
      container.addEventListener('touchend', (e) => {
        if (!activeSwipe) return
        let diffX = currentX - startX
        if (diffX < -swipeThreshold) {
          activeSwipe.style.transform = `translateX(-380px)`; // Show delete button
        } else {
          activeSwipe.style.transform = `translateX(0px)`; // Snap back
        }
        activeSwipe = null;
      })
    })
    
    // // Optional: Handle delete button
    // document.querySelectorAll('.delete-btn').forEach(btn => {
    //   btn.addEventListener('click', () => {
    //     btn.parentElement.remove(); // Remove the whole swipe-container
    //   });
    // });
    
}
