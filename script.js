// script.js
function validateForm() {
    var user = document.getElementById("username").value.trim();
    var pass = document.getElementById("password").value.trim();
    
    if (user === "" || pass === "") {
        alert("Preencha todos os campos.");
        return false;
    }
    
    return true;
}