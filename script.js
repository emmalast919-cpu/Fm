// ===============================
// 🔑 CONFIG (API KEY HERE)
// ===============================
const API_KEY = "ef993e4f5fede5b24aca49ed0ac494ab";

// ===============================
// 📥 GET TOKEN FROM URL
// ===============================
const params = new URLSearchParams(window.location.search);
let token = params.get("token");

// DOM elements
const tokenText = document.getElementById("tokenText");
const status = document.getElementById("status");

if (token) {
  tokenText.innerText = token;
  status.innerText = "Token loaded successfully";
} else {
  tokenText.innerText = "No token found in URL";
}

// ===============================
// 👁 TOGGLE SHOW/HIDE TOKEN
// ===============================
let hidden = false;

function toggleToken() {
  hidden = !hidden;
  tokenText.style.filter = hidden ? "blur(6px)" : "none";
}

// ===============================
// 📋 COPY TOKEN
// ===============================
function copyToken() {
  if (!token) return;

  navigator.clipboard.writeText(token).then(() => {
    alert("Token copied!");
  });
}
