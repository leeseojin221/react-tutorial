import React, {Fragment } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import * as St from "../styled/EditStyled";

export default function Edit() {


  return (
    <Fragment>
      <Header />
      <Container>
        <St.EditForm1
          onSubmit={(e) => {
            e.preventDefault();
            console.log("수정!");
          }}
        >
          <div>
            <St.EditInput1
              placeholder="제목"
            />
          </div>
          <St.EditDiv1>
            <St.EditText1
              placeholder="내용"
            />
          </St.EditDiv1>
          <St.EditBtn1>
            수정하기
          </St.EditBtn1>
        </St.EditForm1>
      </Container>
    </Fragment>
  );
}
