import "regenerator-runtime/runtime";
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";

import { SpeechButton, Loader } from "@/components";
import { useStores } from "@/hooks";
import { createFood } from "@/api/foods";

const Speech = observer(() => {
  const { event } = useStores();

  const { transcript, resetTranscript } = useSpeechRecognition({
    clearTranscriptOnListen: true,
  });

  const [words, setWords] = useState("");

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <>
        <Grid container>
          <Grid item xs={12}>
            <Alert variant="filled" severity="error">
              음성 인식이 작동하지 않습니다. <br />
              안드로이드 Google Chrome 브라우저에서 다시 실행해주세요.
            </Alert>
          </Grid>
        </Grid>
      </>
    );
  }

  return (
    <>
      {/* <button
        onClick={() => SpeechRecognition.startListening({ language: "ko" })}
      >
        Start
      </button>
      <button onClick={() => SpeechRecognition.stopListening}>Stop</button>
      <button onClick={resetTranscript}>Reset</button>
      <p className="">{transcript}</p> */}

      <div className="speech container ">
        {!event.isClicked ? (
          <SpeechButton />
        ) : (
          <>
            <Loader recognition={SpeechRecognition} />
            <p className="">{transcript}</p>
          </>
        )}
      </div>
    </>
  );
});

export default Speech;
