document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll("[data-go]").forEach(function (button) {
    button.addEventListener("click", function () {
      const page = button.dataset.go;
      document.querySelectorAll(".page").forEach(function (section) {
        section.classList.toggle("active", section.id === page);
      });
    });
  });
});
