const speechRecignation = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
    console.log('Start talking')
}

recognition.onresult = function(event) {
    console.log(event);
}