let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[Number(voiceSelect.value)];
});


document.querySelector("button").addEventListener("click", () => {
  let text = document.querySelector("textarea").value.trim();
  
  if (text === "") {
      alert("Please enter some text to convert!");
      return;
  }

  speech.text = text;
  window.speechSynthesis.speak(speech);
});
