
document.addEventListener("DOMContentLoaded", function () {
  // التنقل بين صفحات الموقع
  function openPage(page) {
    document.querySelectorAll(".page").forEach(function (section) {
      section.classList.toggle("active", section.id === page);
    });

    document.querySelectorAll("[data-page]").forEach(function (button) {
      button.classList.toggle("active", button.dataset.page === page);
    });
  }

  document.querySelectorAll("[data-go]").forEach(function (button) {
    button.addEventListener("click", function () {
      openPage(button.dataset.go);
    });
  });

  document.querySelectorAll("[data-page]").forEach(function (button) {
    button.addEventListener("click", function () {
      openPage(button.dataset.page);
    });
  });

  document.getElementById("newChat")?.addEventListener("click", function () {
    openPage("chat");
    const messages = document.getElementById("messages");
    if (messages) messages.innerHTML = "";
  });

  // إرسال الرسائل داخل النسخة التجريبية
  const form = document.getElementById("chatForm");
  const input = document.getElementById("chatInput");
  const messages = document.getElementById("messages");

  if (form && input && messages) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const message = input.value.trim();
      if (!message) return;

      const welcome = messages.querySelector(".welcome");
      if (welcome) welcome.remove();

      const userMessage = document.createElement("div");
      userMessage.className = "message user";
      userMessage.textContent = message;
      messages.appendChild(userMessage);

      const reply = document.createElement("div");
      reply.className = "message assistant";
      reply.textContent =
        "وصلت رسالتك! هذه نسخة تجريبية من AI PRO. للحصول على إجابات ذكية حقيقية، نحتاج ربط خدمة ذكاء اصطناعي بخادم آمن.";
      messages.appendChild(reply);

      input.value = "";
      messages.scrollTop = messages.scrollHeight;
    });
  }
});
