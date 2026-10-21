
document.addEventListener("DOMContentLoaded", function () {
  // التنقل بين صفحات الموقع
  function openPage(pageId) {
    document.querySelectorAll(".page").forEach(function (page) {
      page.classList.toggle("active", page.id === pageId);
    });
  }

  document.querySelectorAll("[data-go]").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      openPage(button.dataset.go);
    });
  });

  document.querySelectorAll("[data-page]").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      openPage(button.dataset.page);
    });
  });

  // إرسال الرسالة بدون إعادة تحميل الصفحة
  const form = document.getElementById("chatForm");
  const input = document.getElementById("chatInput");
  const messages = document.getElementById("messages");

  if (form && input && messages) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const text = input.value.trim();
      if (text === "") return;

      addMessage(text, "user");
      input.value = "";

      addMessage(
        "أهلاً بيك في AI PRO! وصلت رسالتك بنجاح. هذا رد تجريبي، وربط الذكاء الاصطناعي الحقيقي يحتاج إعداد خدمة API.",
        "assistant"
      );
    });

    function addMessage(text, role) {
      const message = document.createElement("div");
      message.className = "message " + role;
      message.textContent = text;
      messages.appendChild(message);
      messages.scrollTop = messages.scrollHeight;
    }
  } else {
    console.error(
      "AI PRO: لم يتم العثور على chatForm أو chatInput أو messages في index.html"
    );
  }
});
