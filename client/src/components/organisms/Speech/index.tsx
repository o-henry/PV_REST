import React from "react";
import { SpeechButton } from "@/components";
import { speechRecognition } from "@/util/speechRecognition";
import { observer } from "mobx-react";
import useStores from "@/hooks/useStore";

const Speech = observer(() => {
  const { event } = useStores();
  const speech = speechRecognition();

  const runSpeech = () => {
    event.isClicked ? speech.startListening() : speech.stopListening();
    speech.initStart();
    speech.endListening();
  };

  return (
    <>
      <SpeechButton />
      {runSpeech()}
    </>
  );
});

export default Speech;
