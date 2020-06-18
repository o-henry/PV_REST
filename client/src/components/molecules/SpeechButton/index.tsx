import React from "react";
import { observer } from "mobx-react";
import { useStores } from "@/hooks";

const SpeechButton = observer(() => {
  const { event } = useStores();

  return <></>;
});

export default SpeechButton;
