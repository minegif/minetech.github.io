//counter
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");

  // Function to animate the counter
  const animateCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    const increment = target / 200; // Adjust speed here
    let count = 0;

    const updateCounter = () => {
      count += increment;
      if (count < target) {
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target; // Ensure it stops at the target
      }
    };

    updateCounter();
  };

  // Detect when the counter is in the viewport
  const options = { threshold: 0.5 }; // 50% visible
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target); // Stop observing after animation
      }
    });
  }, options);

  counters.forEach((counter) => observer.observe(counter));
});

//progress bars
document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress");
  
    // Function to animate the progress bar
    const animateProgressBar = (progressBar) => {
      const target = progressBar.getAttribute("data-progress");
      progressBar.style.width = `${target}%`;
    };
  
    // Observe when progress bars come into view
    const observerOptions = { threshold: 0.5 }; // Trigger when 50% visible
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateProgressBar(entry.target);
          observer.unobserve(entry.target); // Stop observing after animation
        }
      });
    }, observerOptions);
  
    progressBars.forEach((bar) => observer.observe(bar));
  });
