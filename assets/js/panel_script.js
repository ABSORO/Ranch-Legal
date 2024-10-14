// JavaScript for Collapsible Left Panel Navigation

document.addEventListener("DOMContentLoaded", function() {
  const collapsibleElements = document.querySelectorAll('.collapsible');

  collapsibleElements.forEach(button => {
    button.addEventListener('click', function() {
      this.classList.toggle('open');
      const content = this.nextElementSibling;
      content.style.display = content.style.display === "block" ? "none" : "block";
    });
  });
});
