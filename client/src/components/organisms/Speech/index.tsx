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

  const [sayNo, setSayNo] = useState(false);

  const handleChange = () => {
    setSayNo(true);
  };

  const sendFood = () => {
    createFood(transcript);
  };

  useEffect(() => {
    setSayNo(false);
  }, [event.isClicked]);

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
      <div className="speech container ">
        {!event.isClicked ? (
          <SpeechButton />
        ) : (
          <>
            <Loader recognition={SpeechRecognition} />
          </>
        )}

        {!sayNo ? (
          <div className="main container body">
            {transcript && (
              <>
                말씀 하신 음식이 "{transcript}" 가 맞나요?
                <div>
                  <button onClick={sendFood}>네</button>
                  <button onClick={handleChange}>아니오</button>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="main container body">
            {sayNo && "다시 말씀 해 주세요"}
          </div>
        )}
      </div>
    </>
  );
});

export default Speech;
