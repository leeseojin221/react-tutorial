import React from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate } from "react-router";
import * as St from "../styled/LoginStyled";

export default function Login() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <St.LoginDiv1>
          <form>
            <St.LoginDiv2>
              <St.LoginInput
                placeholder="이메일"
              />
            </St.LoginDiv2>
            <St.LoginDiv2>
              <St.LoginInput
                placeholder="비밀번호"
                type="password"
              />
            </St.LoginDiv2>
            <St.LoginDiv2>
              <St.LoginBtn1>
                로그인하기
              </St.LoginBtn1>
            </St.LoginDiv2>
            <St.LoginDiv3>
              <St.LoginBtn2
                onClick={() => {navigate("/signup")}}
              >
                회원가입하러 가기
              </St.LoginBtn2>
            </St.LoginDiv3>
          </form>
        </St.LoginDiv1>
      </Container>
    </>
  );
}
