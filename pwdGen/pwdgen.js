const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r",
"s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];




// Check if event listener is already attached to prevent duplicate bindings
function genpassword() {
    let password = ""
    for (let i =0; i<= 15; i++) {
        let randomChar = Math.floor(Math.random() * characters.length)
        password += characters[randomChar]
    }
    return password
}

// add dom content loadeer and then call gen password internally so the value can be set to pwdoutput1 and 2 in the html

// document.addEventListener("DOMContentLoaded", function() {
//     // getting cannot set properties of null error because the dom is not loaded yet
//     // how to over come this 
//     // Ensure elements exist before trying to access them
//     const pwdOutput1 = document.getElementById("pwdoutput1");
//     const pwdOutput2 = document.getElementById("pwdoutput2");

//     if (pwdOutput1) {
//         pwdOutput1.textContent = genpassword();
//     }
//     if (pwdOutput2) {
//         pwdOutput2.textContent = genpassword(); 
// }});
    
document.addEventListener("DOMContentLoaded", function () {
    // Get the button and input elements
    const generateBtn = document.getElementById('generate-btn');
    const passwordOutput = document.getElementById('pwdOutput');
    const passwordOutput2 = document.getElementById('pwdOutput2');

    // Event listener for the "Generate" button
    generateBtn.addEventListener('click', function () {
        const generatedPassword = genpassword();  // Generate password
        const generatedPassword2 = genpassword();
        passwordOutput.value = generatedPassword;  // Set the password in the first input
        passwordOutput2.value = generatedPassword2;  // Set the password in the second input
    });
});





