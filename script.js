// ===============================
// 🔑 CONFIG (PUT YOUR API KEY HERE)
// ===============================
const API_KEY = "ef993e4f5fede5b24aca49ed0ac494ab";

// ===============================
// 🚀 LOGIN FUNCTION
// ===============================
function login() {
  const url = `https://www.last.fm/api/auth/?api_key=${API_KEY}&cb=${window.location.origin}`;
  window.location.href = url;
}

// ===============================
// 📥 GET TOKEN AFTER REDIRECT
// ===============================
const params = new URLSearchParams(window.location.search);
const token = params.get("token");

// ===============================
// 📌 DISPLAY TOKEN
// ===============================
if (token) {
  document.getElementById("status").innerText =
    "Login successful! Token received.";

  document.body.innerHTML += `
    <p><b>Copy this token:</b></p>
    <code>${token}</code>
  `;
}
