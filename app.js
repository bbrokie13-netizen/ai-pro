
document.addEventListener("DOMContentLoaded", function () {
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

  const form = document.getElementById("chatForm");
  const input = document.getElementById("chatInput");
  const messages = document.getElementById("messages");

  if (!form || !input || !messages) return;

  function addMessage(text, role) {
    const message = document.createElement("div");
    message.className = "message " + role;
    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
    return message;
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");
    input.value = "";

    const loading = addMessage("AI PRO يفكر... لحظة حبيبي", "assistant");

    const sendButton = form.querySelector('button[type="submit"]');
    if (sendButton) sendButton.disabled = true;

    try {
      const response = await fetch(
        "https://ai-pro-api.bbrokie13.workers.dev",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ message: text })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "تعذر الاتصال بالخدمة.");
      }

      loading.textContent = data.reply || "لم تصل إجابة.";
    } catch (error) {
      loading.textContent =
        "صار خطأ بالاتصال. تأكد من نشر Worker وإضافة مفتاح Gemini، ثم حاول مرة ثانية.";
      console.error(error);
    } finally {
      if (sendButton) sendButton.disabled = false;
    }
  });
});
