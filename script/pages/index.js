function openNav() {
  document.getElementById("nav").style.display = "flex";
  document.body.style.overflow = "hidden";
}

function closeNav() {
  document.getElementById("nav").style.display = "none";
  document.body.style.overflow = "";
}

function openChat() {
  document.getElementById("chat").style.display = "flex";
  document.getElementById("closeChat").style.display = "flex";
  document.getElementById("openChat").style.display = "none";
}

function closeChat() {
  document.getElementById("chat").style.display = "none";
  document.getElementById("closeChat").style.display = "none";
  document.getElementById("openChat").style.display = "flex";
}
