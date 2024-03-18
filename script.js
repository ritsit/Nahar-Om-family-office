const msgcont = document.querySelector(".msg-container");



document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    const msgContainer = document.querySelector(".msg-container");
  
    loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      const username = document.getElementById("form1Example1").value.trim();
      const password = document.getElementById("form1Example2").value.trim();
  
      if (username !== "" && password !== "") {
        msgContainer.classList.remove("hide");
      } else {
        alert("Please enter both username and password.");
      }
    });
  });
  