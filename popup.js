document.addEventListener("DOMContentLoaded", function() {
    const lengthInput = document.getElementById("length");
    const generateButton = document.getElementById("generate");
    const passwordText = document.getElementById("password");
  
    generateButton.addEventListener("click", function() {
     
      const password = generatePassword(lengthInput.value);
      passwordText.value = password;

      passwordText.addEventListener("click", function() {
        copyToClipboard();
      });
    });
  });
  
  function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;':,.<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password;
  }

  function copyToClipboard(text) {
   
    var copyText = document.getElementById("password");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
  
  }