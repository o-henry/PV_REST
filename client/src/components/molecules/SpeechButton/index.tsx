import React from "react";
import { observer } from "mobx-react";
import { useStores } from "@/hooks";

import { Button } from "@/components";
import { radio } from "@/assets";

const SpeechButton = observer(() => {
  const { event } = useStores();

  event.isClicked = false;

  return (
    <>
      <Button style="speech">
        <img className="mic" src={radio} />
      </Button>
    </>
  );
});

export default SpeechButton;
