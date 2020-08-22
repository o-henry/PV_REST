import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

import Grid from "@material-ui/core/Grid";

import { TextField } from "@/components";
import { burger } from "@/assets";

const LoginTemplate = ({ onSubmit }: any) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <div className="login">
      <Grid container>
        <Grid item xs={12}>
          <div className="login fade_in">
            <img className="login_banner" src={burger} alt="banner" />
            <TextField style="login_banner_head"> HUNGER </TextField>
            <TextField style="login_banner_body">
              손쉬운 칼로리 & 당 관리
            </TextField>
            <form className="login container" onSubmit={handleSubmit(onSubmit)}>
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

              <input className="input button" value="로그인" type="submit" />
              <div className="button signup">
                <Link className="link_hover" to="/signup">
                  회 원 가 입
                </Link>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default LoginTemplate;
