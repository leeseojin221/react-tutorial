import React, {useState, Fragment } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import * as St from "../styled/EditStyled";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { editItem } from "../index";

export default function Edit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lists = useSelector((state)=>state.내용들);

  const {id} = useParams();
  const list = lists.find((lists) => lists.id === id);

  const [title, setTitle] = useState(list.title ||'');
  const [content, setContent] = useState(list.content ||'');

  const handleEditItem = (id) => {

    const updatedItem = {
      id,
      title,
      content,
    };

    dispatch(editItem(updatedItem));
    navigate("/");
    setTitle('');
    setContent('');
  };


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
              placeholder={list.title}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <St.EditDiv1>
            <St.EditText1
              placeholder={list.content}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </St.EditDiv1>
          <St.EditBtn1 onClick={() => handleEditItem(list.id)}>
            수정하기
          </St.EditBtn1>
        </St.EditForm1>
      </Container>
    </Fragment>
  );
}
