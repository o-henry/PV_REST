//@ts-nocheck
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";

import { SpeechButton } from "@/components";
import { useStores } from "@/hooks";
import { createFood } from "@/api/foods";
import { isChrome } from "@/utils/browser";

const Speech = observer(() => {
  const { event } = useStores();
  const [words, setWords] = useState("");

  if (!isChrome) {
    console.log("check this out");
    return alert(
      "음성 인식이 작동하지 않습니다. Google Chrome 브라우저에서 다시 실행해주세요."
    );
  }

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
    // input이 들어오면 요청 하도록 조건 추가
    if (!event.isClicked && words !== "") {
      createFood(words);
    }
  });

  return (
    <>
      <SpeechButton />
      {runSpeech()}
      {words}
    </>
  );
});

export default Speech;
