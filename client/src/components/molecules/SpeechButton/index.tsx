import React from "react";
import Button from "@material-ui/core/Button";
import { observer } from "mobx-react";
import useStores from "@/hooks/useStore";

const SpeechButton = observer(() => {
  const { event } = useStores();

  return (
    <>
      <Button onClick={event.onClick}>speech!</Button>
    </>
  );
});

export default SpeechButton;
