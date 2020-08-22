import React from "react";
import { useForm } from "react-hook-form";

import Grid from "@material-ui/core/Grid";

import { TextField } from "@/components";

const SignUpTemplate = ({ onSubmit }: any): React.ReactElement => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <div className="signup">
      <Grid container>
        <Grid item xs={12}>
          <div className="signup fade_in">
            <TextField style="login_banner_head">HUNGER</TextField>
            <div className="signup form">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <input
                    required
                    className="input"
                    type="text"
                    placeholder="아이디"
                    name="id"
                    pattern="^(?!\d+$)\w{5,10}$"
                    ref={register({
                      required: true,
                    })}
                  />
                  <div className="requirements">
                    5 ~ 10자 이상 영문, 숫자를 사용해주세요.
                  </div>
                </div>

                <div>
                  <input
                    required
                    className="input"
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,}$"
                    type="password"
                    placeholder="비밀번호"
                    name="password"
                    ref={register({
                      required: true,
                    })}
                  />
                  <div className="requirements">
                    8자 이상 영문 대 ・ 소문자, 숫자, 특수문자를 사용해주세요.
                  </div>
                </div>

                <div>
                  <input
                    required
                    className="input"
                    type="text"
                    placeholder="이름"
                    name="name"
                    pattern="^[가-힣a-zA-Z]+$"
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
                    name="age"
                    min="1"
                    max="99"
                    ref={register({
                      required: true,
                    })}
                  />
                </div>

                <div className="signup radio">
                  <div className="signup radio inner">
                    <input
                      className="radio button"
                      required
                      name="gender"
                      type="radio"
                      value="Female"
                      ref={register({ required: true })}
                    />
                    <label htmlFor="Female">여성</label>
                  </div>

                  <div className="signup radio inner">
                    <input
                      className="radio button"
                      required
                      name="gender"
                      type="radio"
                      value="Male"
                      ref={register({ required: true })}
                    />
                    <label htmlFor="Male">남성</label>
                  </div>
                </div>

                <div>
                  <input className="submit" value="회원가입" type="submit" />
                </div>
              </form>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default SignUpTemplate;
