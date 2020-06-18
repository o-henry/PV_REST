//@ts-nocheck
const SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "ko-KR";

export function speechRecognition() {
  function startListening() {
    recognition.start();
    recognition.onend = () => {
      console.log("...continue listening ...");
      recognition.start();
    };
  }

  function stopListening() {
    recognition.stop();
    recognition.onend = () => {
      console.log("Stopped listening per click");
    };
  }

  function initStart() {
    recognition.onstart = () => {
      console.log("Listening!");
    };
  }

  function endListening() {
    recognition.onresult = (event: { results: { transcript: any }[][] }) => {
      console.log("event", event.results);
    };
  }

  return {
    startListening,
    stopListening,
    initStart,
    endListening,
  };
}
