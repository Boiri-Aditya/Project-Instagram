function sendMessage() {
    const input = document.getElementById("messageInput");
    const box = document.getElementById("chatBox");

    if (input.value.trim() === "") return;

    const msg = document.createElement("div");
    msg.className = "bubble sent";
    msg.innerText = input.value;

    box.appendChild(msg);
    input.value = "";
    box.scrollTop = box.scrollHeight;
}

function selectUser(el) {
    document.querySelectorAll(".user").forEach(u => u.classList.remove("active"));
    el.classList.add("active");

    document.getElementById("chatName").innerText =
        el.querySelector(".name").innerText;
}
