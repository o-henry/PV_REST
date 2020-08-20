import React from "react";
import { useForm } from "react-hook-form";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

const SignUpTemplate = () => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="이름" name="이름" ref={register} />
      <input
        type="number"
        placeholder="나이"
        name="나이"
        ref={register({ required: true, max: 99, min: 0, maxLength: 2 })}
      />

      <input
        name="성별"
        type="radio"
        value="Male"
        ref={register({ required: true })}
      />
      <input
        name="성별"
        type="radio"
        value="Female"
        ref={register({ required: true })}
      />

      <input type="submit" />
    </form>
  );
};

export default SignUpTemplate;
