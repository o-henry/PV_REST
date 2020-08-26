import "regenerator-runtime/runtime";
import React, { useState, useEffect } from "react";
import { observer } from "mobx-react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { usePromiseTracker, trackPromise } from "react-promise-tracker";

import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";

import { SpeechButton, Loader } from "@/components";
import { useStores } from "@/hooks";
import { xhrAPI } from "@/utils/axios";

const Speech = observer(() => {
  const { event } = useStores();

  const { promiseInProgress } = usePromiseTracker();

  const { transcript } = useSpeechRecognition({
    clearTranscriptOnListen: true,
  });

  let manyFoods: any[] = [];
  const [sayNo, setSayNo] = useState(false);
  const [sayYes, setSayYes] = useState(false);
  const [status, setStatus] = useState(false);

  const handleYes = () => {
    setSayYes(true);
  };

  const handleNo = () => {
    setSayNo(!sayNo);
  };

  const sendDataToMainServer = async (data: any) => {
    await xhrAPI(process.env.REACT_APP_BASE_URL, localStorage.getItem("token"))
      .post(`${process.env.REACT_APP_FOOD}`, data)
      .then((res) => {
        if (res.status === 200) {
          setStatus(true);
        }
      });
  };

  const createFood = async (transcript: any) => {
    await trackPromise(
      xhrAPI(process.env.REACT_APP_API_URL)
        .post(`${process.env.REACT_APP_FOOD}`, {
          name: transcript,
        })
        .then((res) => {
          console.log("response", res);

          if (res.status === 200) {
            if (Array.isArray(res.data.convert)) {
              manyFoods = res.data.convert;
            } else {
              sendDataToMainServer(res.data.convert);
            }
          }
        })
    );
  };

  useEffect(() => {
    sayYes && createFood(transcript);
    setSayYes(false);
  }, [sayYes]);

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
          <div className={"main container body"}>
            {transcript && (
              <>
                말씀 하신 음식이 "{transcript}" 가(이) 맞나요?
                <div>
                  <button onClick={handleYes}>네</button>
                  <button onClick={handleNo}>아니오</button>
                </div>
              </>
            )}
          </div>
        ) : (
          <div className="main container body">
            {sayNo && "다시 말씀 해 주세요"}
          </div>
        )}

        {promiseInProgress ? (
          <div className="main container data">
            <CircularProgress />
          </div>
        ) : (
          ""
        )}

        {status && (
          <div className="main container res">해당 음식이 저장되었습니다.</div>
        )}

        {!manyFoods.length &&
          manyFoods.map((food, i) => {
            <div className="main container res" key={i}>
              {food}
            </div>;
          })}
      </div>
    </>
  );
});

export default Speech;
