let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  speech.voice = voices[0];

  voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)));
};

voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
});

document.getElementById("playButton").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});

document.getElementById("downloadButton").addEventListener("click", () => {
  speech.text = document.querySelector("textarea").value;

  // Create an audio blob
  const audioBlob = new Blob([speech.text], { type: "audio/wav" });

  // Create a download link
  const downloadLink = document.createElement("a");
  downloadLink.href = URL.createObjectURL(audioBlob);
  downloadLink.download = "generated_audio.wav";

  // Append the link to the body and trigger a click event
  document.body.appendChild(downloadLink);
  downloadLink.click();

  // Remove the link from the body
  document.body.removeChild(downloadLink);
});
