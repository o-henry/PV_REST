//@ts-nocheck
const SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = "ko-KR";
recognition.maxAlternatives = 3;

const SpeechAPI = () => {
  function listening() {
    recognition.onstart = () => {
      console.log("Listening!");
    };
  }

  function start() {
    recognition.start();
    recognition.onend = () => {
      console.log("...continue listening...");
    };
  }

  function stop() {
    recognition.onspeechend = () => {
      console.log("Stopped Listening");
      recognition.stop();
    };
  }

  function end() {
    recognition.onresult = (event: {
      results: { transcript: any; confidence: any }[][];
    }) => {
      return event.results[0][0].transcript;
    };
  }

  function error() {
    recognition.onerror = (event) => {
      console.log("error", event);
    };
  }

  return {
    listening,
    start,
    stop,
    end,
    error,
  };
};

export default SpeechAPI;
