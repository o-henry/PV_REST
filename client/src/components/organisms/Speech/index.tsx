import React from "react";
import { SpeechButton } from "@/components";
import { speechRecognition } from "@/utils/speechAPI";
import { observer } from "mobx-react";
import { useStores } from "@/hooks";

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
