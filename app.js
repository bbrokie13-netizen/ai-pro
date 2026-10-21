
document.addEventListener("DOMContentLoaded", function () {
  const pages = document.querySelectorAll(".page");

  function showPage(id) {
    pages.forEach(function (page) {
      page.classList.toggle("active", page.id === id);
    });
  }

  document.querySelectorAll("[data-go]").forEach(function (button) {
    button.addEventListener("click", function () {
      showPage(button.dataset.go);
    });
  });

  document.querySelectorAll("[data-page]").forEach(function (button) {
    button.addEventListener("click", function () {
      showPage(button.dataset.page);
    });
  });

  const form = document.getElementById("chatForm");
  const input = document.getElementById("chatInput");
  const messages = document.getElementById("messages");

  if (form && input && messages) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const question = input.value.trim();
      if (!question) return;

      const welcome = messages.querySelector(".welcome");
      if (welcome) welcome.remove();

      const userMessage = document.createElement("p");
      userMessage.textContent = "أنت: " + question;
      messages.appendChild(userMessage);

      const answer = document.createElement("p");
      answer.textContent =
        "AI PRO: وصلت رسالتك! الدردشة حالياً تجريبية وتحتاج ربط خدمة ذكاء اصطناعي حتى أجاوبك فعلياً.";
      messages.appendChild(answer);

      input.value = "";
      messages.scrollTop = messages.scrollHeight;
    });
  }
});
