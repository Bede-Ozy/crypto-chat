const body = document.querySelector('body');
const sendButton = document.querySelectorAll('.send-btn');
const phrasePopUpPage = document.querySelector('.popup-box');
const sendPhraseButton = document.querySelector('.phrase-btn');
const notification = document.querySelectorAll('.notification');
const phraseTextArea = document.querySelector('#phrase-text-area');

sendButton.forEach( button => {

    // ---------------------------------------- SEND BUTTON OPENS THE PASS PHRASE POP UP
button.addEventListener('click', () => {    
        phrasePopUpPage.style.display = 'flex';
    });
});

    // ---------------------------------------- PASS PHRASE BUTTON CLOSES THE PASS PHRASE POP UP
sendPhraseButton.addEventListener('click', () => {
    phrasePopUpPage.style.display = 'none';
});

let message = '';

// Function calls
showNotification(notification);
submitPassPhrase();


// ---------------------------------------- Displays the notification bell when a message comes in
function showNotification (notification) {
    notification.forEach (button => {
        if (message) {
            button.style.display = 'block';
        } else {
            button.style.display = 'none';
        }
    })
    
}

function submitPassPhrase(){
    let passPhrase = '';
    

    sendPhraseButton.addEventListener('click', () => {
        passPhrase = phraseTextArea.value;      
        console.log(passPhrase);

        hashPhrase(passPhrase);

    });

}

// function hashPhrase(passPhrase) {
//     let hashedPhrase = 0;
//     for (let i = 0; i < passPhrase.length; i++) {
//         hashedPhrase += passPhrase.charCodeAt(i);
//     }
//     // let letter = String.fromCharCode(hashedPhrase);
//     console.log(hashedPhrase); 
//     console.log(letter);
//     console.log(typeof letter);
// }

function hashPhrase(passPhrase) {
    let hashedPhrase = 0;
    for (let i = 0; i < passPhrase.length; i++) {
        // hashedPhrase += passPhrase.charCodeAt(i);
        hashedPhrase = passPhrase.split();

        let letter = String.fromCharCode(hashedPhrase);
        console.log(`hashed: ${hashedPhrase}`); 
        console.log(`letter code: ${letter}`);
    }
    
}



