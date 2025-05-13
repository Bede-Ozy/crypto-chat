const messageBox = document.getElementById("message");
const sendButton = document.querySelector(".sendBtn");
const displayMessage = document.querySelector(".displayText");
const encryptedMessage = document.querySelector(".encryptedText")

let newy = [1101, 1010];

let codes = [];        
let specialCharCode = [];

for(let i = 1; i <= 26; i++) {
    // console.log(i)
    let code = [];
    for(let j = 0; j < 16; j++){
        code.push(Math.floor(Math.random() * 2));
    }
    codes.push(code);
}
console.log(codes) // Display the binary codes
console.log(messageBox)
console.log(sendButton)

/* 

// console.log(codes)
// display();
// console.log(codes.length)

// function display(){

//     let letter = "a";

//     if(letter === "a"){
//         console.log(codes[0]);
//     }
//     // console.log(element)
//     // for (let i = 0; i < codes.length; i++){
//     //     console.log(`number ${i} is ${codes[i]}`);
//     // }
// }

*/

let message = '';
console.log(message)

// encrypt();

function encrypt(){
    // let encryptedMessage
    specialCharCode = ["|-|", "-.-", "0-", "0-0", ".-", "-|", "-/", "~", "@", ".@", "//", "/'"];

    // for (let i = 0; i < letter.length; i++) {
    //     // console.log(letter.length)
    //     console.log(letter.charAt(i));

    //     // if (letter.includes("a")) {
    //     //     letter.replace("a", codes[0]);
    //     // }
    // }

    const smallLetters = [...'abcdefghijklmnopqrstuvwxyz'];//21 small letters
    const capitalLetters = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']; //21 capital letters
    const specialChar = [...'?,%. -/!;:"\''];

    let encrypted = '';

    for (let char of message) {
        if (smallLetters.includes(char)) {
            let charIndex = smallLetters.indexOf(char);
            encrypted += codes[charIndex].join("");
        } 
        // else if (capitalLetters.includes(char)) {
        //     let charIndex = capitalLetters.indexOf(char);
        //     encrypted += codes[charIndex].reverse().join("");
        // } 
        else if (specialChar.includes(char)) {
            let charIndex = specialChar.indexOf(char);
            encrypted += specialCharCode[charIndex];
        }
        else {
            encrypted += char;
        }
    }
    displayMessage.textContent = message;
    encryptedMessage.textContent = encrypted;
    console.log(encrypted)
}

sendButton.addEventListener('click', () => {
    message = messageBox.value;
    encrypt();
})

console.log(specialCharCode[0])

// for (let char of letter){
//     // console.log(letter[3])
//     if (char === "a") {
//         console.log("red")
//     }
// }














