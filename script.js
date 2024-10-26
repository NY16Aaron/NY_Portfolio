function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function validateForm() {
  // Get the values of the form fields
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Get the error display elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const messageError = document.getElementById("messageError");

  // Clear any previous error messages
  nameError.style.display = "none";
  emailError.style.display = "none";
  messageError.style.display = "none";

  let isValid = true;

  // Name validation
  if (name === "") {
    nameError.textContent = "Name is required";
    nameError.style.display = "block";
    isValid = false;
  } else if (name.length < 2) {
    nameError.textContent = "Name must be at least 2 characters long";
    nameError.style.display = "block";
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    emailError.textContent = "Email is required";
    emailError.style.display = "block";
    isValid = false;
  } else if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address";
    emailError.style.display = "block";
    isValid = false;
  }

  // Message validation
  if (message === "") {
    messageError.textContent = "Message cannot be empty";
    messageError.style.display = "block";
    isValid = false;
  } else if (message.length < 10 || message.length > 200) {
    messageError.textContent =
      "Message must be at least 10 and at most 200 characters long";
    messageError.style.display = "block";
    isValid = false;
  }

  // If the form is valid, show success message
  if (isValid) {
    alert("Thank you for your message! I will get back to you soon.");
  }

  // Return whether the form is valid
  return isValid;
}

// Dark Mode Functionality
document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggles = document.querySelectorAll(
    "#dark-mode-toggle, #dark-mode-toggle-h"
  );
  const body = document.body;

  darkModeToggles.forEach((toggle) => {
    toggle.addEventListener("click", function () {
      body.classList.toggle("dark-mode");
      const isDarkMode = body.classList.contains("dark-mode");
      const icon = isDarkMode ? "sun" : "moon";
      this.innerHTML = `<img src="./assets/${icon}.png" alt="${
        isDarkMode ? "Light" : "Dark"
      } Mode Icon" class="icon" />`; // Change icon
    });
  });
});

//Testimonial
let currentTestimonialIndex = 0;

function showNextTestimonial() {
  const testimonials = document.querySelectorAll(".testimonial");

  // Hide current testimonial
  testimonials[currentTestimonialIndex].classList.remove("active");

  // Calculate the next index
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;

  // Show the next testimonial
  testimonials[currentTestimonialIndex].classList.add("active");
}

// Automatically switch testimonials every 5 seconds
setInterval(showNextTestimonial, 5000);
