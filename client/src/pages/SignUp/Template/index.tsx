import React from "react";
import { useForm } from "react-hook-form";

import Grid from "@material-ui/core/Grid";

const SignUpTemplate = (): React.ReactElement => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    <div className="signup">
      <Grid container>
        <Grid item xs={12}>
          <div className="signup form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  required
                  className="input"
                  type="text"
                  placeholder="ID"
                  name="이름"
                  ref={register({
                    required: true,
                  })}
                />
              </div>
              <div>
                <input
                  required
                  className="input"
                  type="number"
                  placeholder="나이"
                  name="나이"
                  ref={register({
                    required: true,
                    max: 99,
                    min: 0,
                    maxLength: 2,
                  })}
                />
              </div>
              <div className="signup radio">
                <div className="signup radio inner">
                  <input
                    className="radio button"
                    required
                    name="성별"
                    type="radio"
                    value="Male"
                    ref={register({ required: true })}
                  />
                  <label htmlFor="Male">여성</label>
                </div>
                <div className="signup radio inner">
                  <input
                    className="radio button"
                    required
                    name="성별"
                    type="radio"
                    value="Female"
                    ref={register({ required: true })}
                  />
                  <label htmlFor="Female">남성</label>
                </div>
              </div>
              <div>
                <input
                  required
                  className="input"
                  type="password"
                  placeholder="비밀번호"
                  name="비밀번호"
                  ref={register({
                    required: true,
                  })}
                />
              </div>

              <input type="submit" />
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUpTemplate;
