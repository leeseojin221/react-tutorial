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
                내용
              </St.MainP>
            </St.Maindiv3>
            <St.Maindiv4>
              <div>작성자</div>
              <div>
                {/* 메인 페이지(/), 상세페이지(/detail/:id)에서 수정 버튼 클릭 시 수정 컴포넌트 보여주기 */}
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
