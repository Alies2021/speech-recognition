const talkBtn = document.querySelector('button');

const speechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new webkitSpeechRecognition();

recognition.onstart = function() {
    console.log("IT HAS STARTED");
}

recognition.onresult = function(event) {
    console.log(event);
    const h1 = document.createElement('h1');
    h1.textContent = event.results[0][0].transcript;
    document.body.appendChild(h1);
    talk(h1.textContent);
}

function talk(message) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = message;  
    speech.lang = 'en-US';
    speech.pitch = 1;
    speech.volume = 1;
    speech.rate = 1;
    // speech
    window.speechSynthesis.speak(speech); 
    console.log(speech)
}

talkBtn.addEventListener('click', () => {
    recognition.start();
})


