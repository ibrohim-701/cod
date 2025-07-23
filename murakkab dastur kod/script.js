async function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const message = input.value.trim();
  if (!message) return;

  chatBox.innerHTML += `<div><b>Siz:</b> ${message}</div>`;
  input.value = "";

  chatBox.innerHTML += `<div><i>Bot yozmoqda...</i></div>`;
  chatBox.scrollTop = chatBox.scrollHeight;

  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message })
    });

    const data = await res.json();
    chatBox.innerHTML += `<div><b>Bot:</b> ${data.reply.replace(/\n/g, "<br>")}</div>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  } catch (err) {
    chatBox.innerHTML += `<div><b>Xatolik:</b> ${err.message}</div>`;
  }
}
