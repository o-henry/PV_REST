import React from "react";
import { Button } from "@/components";
import { useStores } from "@/hooks";
import { observer } from "mobx-react";

const SpeechButton = observer(() => {
  const { event } = useStores();

  return (
    <>
      <Button>Speech</Button>
    </>
  );
});

export default SpeechButton;
