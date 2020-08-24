//@ts-nocheck
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";

import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";

import { SpeechButton, Loader } from "@/components";
import { useStores } from "@/hooks";
import { isChrome } from "@/utils/browser";
import { createFood } from "@/api/foods";

const Speech = observer(() => {
  const { event } = useStores();
  const [words, setWords] = useState("");

  if (!isChrome) {
    return (
      <>
        <Grid container>
          <Grid item xs={12}>
            <Alert variant="filled" severity="error">
              음성 인식이 작동하지 않습니다. Google Chrome 브라우저에서 다시
              실행해주세요.
            </Alert>
          </Grid>
        </Grid>
      </>
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
    if (!event.isClicked && words !== "") {
      createFood(words);
    }
  });

  return (
    <>
      {!event.isClicked ? <SpeechButton /> : <Loader />}
      {runSpeech()}
      {words}
    </>
  );
});

export default Speech;
