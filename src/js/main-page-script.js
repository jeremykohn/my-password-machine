(function() {
  "use strict";

  document.addEventListener('DOMContentLoaded', function() {

    // Aliases for main page form fields.
    var websiteNameField = document.getElementById("website-name-field");
    var usernameField = document.getElementById("username-field");
    var masterPasswordField = document.getElementById("master-password-field");
    var generateButton = document.getElementById("generate-button");
    var passwordDisplayBox = document.getElementById("password-display-box");
    var websitePasswordField = document.getElementById("display-website-password");
    var autofillButton = document.getElementById("autofill-button");

    // Main function, triggered when user clicks "Generate website password."
    generateButton.addEventListener('click', function() {

      // First, retrieve information from form fields.
      var inputs = {};
	  inputs.websiteName = websiteNameField.value;
      inputs.username = usernameField.value;
      inputs.masterPassword = masterPasswordField.value;

      // Then, use hash function to create website password.
      MPM.getWebsitePassword(inputs, function(generatedPassword) {
        websitePasswordField.value = generatedPassword; // Display newly generated password in form field.
        passwordDisplayBox.style.display = "block"; // Reveal hidden section of form.
        websitePasswordField.select();
      });
    });

  });

}());