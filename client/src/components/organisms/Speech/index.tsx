//@ts-nocheck
import React, { useState, useEffect } from "react";
import { SpeechButton } from "@/components";
import { observer } from "mobx-react";
import { useStores } from "@/hooks";

const Speech = observer(() => {
  const { event } = useStores();
  const [words, setWords] = useState([]);

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
    recognition.onend = () => {
      console.log("...continue listening ...");
    };
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
      setWords([
        event.results[0][0].transcript,
        event.results[0][0].confidence,
      ]);
    };
  }

  const runSpeech = () => {
    event.isClicked ? startListening() : stopListening();
    initStart();
  };

  useEffect(() => {
    endListening();
    console.log("==========", words);
  });

  return (
    <>
      <div>
        <SpeechButton />
        {runSpeech()}
      </div>
    </>
  );
});

export default Speech;
