function openNav() {
  document.getElementById("nav").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("nav").style.display = "none";
  document.body.style.overflow = "";
}

document.getElementById("chat-button").addEventListener("click", function () {
  const chatWindow = document.getElementById("chat-window");
  chatWindow.style.display = chatWindow.style.display === "none" || chatWindow.style.display === "" ? "block" : "none";
});

document.getElementById("close-chat").addEventListener("click", function () {
  document.getElementById("chat-window").style.display = "none";
});
