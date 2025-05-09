document.getElementById("navbar").addEventListener("click", function() {
    // Toggle the "clicked" class on the navbar
    this.classList.toggle("clicked");
  });
  
  document.addEventListener("DOMContentLoaded", function() {
  // Replace 'YOUR_PLACE_ID' with your actual Google Place ID
  const placeId = 'ChIJoQ9HN4e7fRcR3mwWT4Fy_9U';
  const reviewsContainer = document.getElementById('google-reviews-widget');

  // Fetch Google reviews using Place ID
  fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,reviews&key=YOUR_API_KEY`)
    .then(response => response.json())
    .then(data => {
      const reviews = data.result.reviews;
      reviews.forEach(review => {
        const reviewElem = document.createElement('div');
        reviewElem.classList.add('review');
        reviewElem.innerHTML = `
          <div class="rating">${'*'.repeat(review.rating)}</div>
          <div class="author">${review.author_name}</div>
          <div class="text">${review.text}</div>
        `;
        reviewsContainer.appendChild(reviewElem);
      });
    })
    .catch(error => console.error('Error fetching Google reviews:', error));
});