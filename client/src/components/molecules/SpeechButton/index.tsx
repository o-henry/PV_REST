import React from "react";
import { observer } from "mobx-react";

import Mic from "@material-ui/icons/Mic";

import { useStores } from "@/hooks";
import { Button } from "@/components";

const SpeechButton = observer(({ recognition }: any) => {
  const { event } = useStores();

  event.isClicked = false;

  return (
    <>
      <Button prop={recognition} style="speech fade_in">
        <Mic className="mic" />
      </Button>
    </>
  );
});

export default SpeechButton;
