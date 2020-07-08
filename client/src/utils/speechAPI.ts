//@ts-nocheck
const SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = "ko-KR";
recognition.maxAlternatives = 3;

export function speechRecognition() {
  function startListening() {
    recognition.start();
    recognition.onend = () => {
      console.log("...continue listening ...");
      recognition.start();
    };
  }

  function stopListening() {
    recognition.onspeechend = () => {
      console.log("Stopped listening per click");
      recognition.stop();
    };
  }

  function initStart() {
    recognition.onstart = () => {
      console.log("Listening!");
    };
  }

  /**
   * @param {event.results confidence} : 정확도
   * @param {event.results transcript} : 텍스트
   */
  function endListening(words): any {
    recognition.onresult = (event: {
      results: { transcript: any; confidence: any }[][];
    }) => {
      words.push([
        event.results[0][0].transcript,
        event.results[0][0].confidence,
      ]);
      return words;
    };
  }

  return {
    startListening,
    stopListening,
    initStart,
    endListening,
  };
}
