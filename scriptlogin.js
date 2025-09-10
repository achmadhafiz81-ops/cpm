document.querySelector("form").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Contoh username & password yang valid
  if (username === "citra" && password === "Citra2025@") {
  
	  setTimeout(() => {
		  window.location.href = "Form Kontrak.html";
		}, 5000);
	  } else {
		alert("Username atau password salah!");
  }
});