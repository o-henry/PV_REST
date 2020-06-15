//@ts-nocheck
import React, { useState } from "react";
import { SpeechButton } from "@/components";
import { observer } from "mobx-react";
import useStores from "@/hooks/useStore";

const SpeechRecognition = webkitSpeechRecognition || SpeechRecognition;

const recognition = new SpeechRecognition();

recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "ko-KR";

const Speech = observer(() => {
  const { event } = useStores();

  const runAPI = () => {
    if (event.isClicked) {
      recognition.start();
      recognition.onend = () => {
        console.log("...continue listening ...");
        recognition.start();
      };
    } else {
      recognition.stop();
      recognition.onend = () => {
        console.log("Stopped listening per click");
      };
    }
    recognition.onstart = () => {
      console.log("Listening!");
    };

    recognition.onresult = (event) => {
      console.log("event", event.results[0][0].transcript);
    };
  };

  return (
    <>
      <SpeechButton />
      {runAPI()}
    </>
  );
});

export default Speech;
