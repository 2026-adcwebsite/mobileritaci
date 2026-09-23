// Mobile menu toggle
var menuToggle = document.querySelector(".menu-toggle");
var navLinks = document.querySelector("nav.links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", function () {
    var isOpen = navLinks.classList.contains("open");
    navLinks.classList.toggle("open", !isOpen);
    menuToggle.classList.toggle("open", !isOpen);
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
  });

  // Close the menu after tapping a link
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("open");
      menuToggle.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Contact form submit (placeholder — connect to your backend/email service)
var contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var success = this.querySelector(".form-success");
    if (success) success.style.display = "block";
    this.reset();
  });
}
