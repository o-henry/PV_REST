//@ts-nocheck

const SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "ko-KR";
recognition.maxAlternatives = 3;

function initStart() {
  recognition.onstart = () => {
    console.log("Listening!");
  };
}

function startListening() {
  recognition.start();
  // recognition.onend = () => {
  //   console.log("...continue listening ...");
  // };
}

function stopListening() {
  recognition.onspeechend = () => {
    console.log("Stopped listening");
    recognition.stop();
  };
}

function endListening(): any {
  recognition.onresult = (event: {
    results: { transcript: any; confidence: any }[][];
  }) => {
    console.log(event.results);
    setWords(event.results[0][0].transcript);
  };
}

const runSpeech = () => {
  initStart();
  event.isClicked ? startListening() : stopListening();
};

useEffect(() => {
  endListening();
  console.log("==========", words);
  if (!event.isClicked && words !== "") {
    createFood(words);
  }
});
