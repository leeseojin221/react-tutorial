import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Container from "../common/Container";
import * as St from "../styled/MainStyled"

export default function Main() {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Container>
        <St.Maindiv1>
          <St.MainBtn1
            onClick={() => {
              navigate("/create");
            }}
          >
            추가
          </St.MainBtn1>
        </St.Maindiv1>
        {[1, 2, 3, 4].map((item) => (
          <St.Maindiv2
            key={item}
          >
            <St.Maindiv3
              onClick={() => {
                navigate("/detail/1");
              }}
            >
              <h2>제목</h2>
              <St.MainP>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.Lorem
                ipsum dolor, sit amet consectetur adipisicing elit.Lorem ipsum
                dolor, sit amet consectetur adipisicing elit.Lorem ipsum dolor,
                sit amet consectetur adipisicing elit.
              </St.MainP>
            </St.Maindiv3>
            <St.Maindiv4>
              <div>작성자</div>
              <div>
                <St.MainBtn2
                  onClick={() => {
                    navigate("/edit");
                  }}
                >
                  수정
                </St.MainBtn2>
                <St.MainBtn3
                  onClick={() => {
                    alert("삭제할까?");
                  }}
                >
                  삭제
                </St.MainBtn3>
              </div>
            </St.Maindiv4>
          </St.Maindiv2>
        ))}
      </Container>
    </>
  );
}
