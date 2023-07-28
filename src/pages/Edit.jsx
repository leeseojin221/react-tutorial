import React, {useState, Fragment } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import * as St from "../styled/EditStyled";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { editItem } from "../redux/list";

export default function Edit() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const list = useSelector((state)=>state.내용들);

  const {id} = useParams();
  const post = list.find((post) => post.id === id);

  const [title, setTitle] = useState(post?.title ||'');
  const [content, setContent] = useState(post?.content ||'');

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
            handleEditItem(post.id)
          }}
        >
          <div>
            <St.EditInput1
              placeholder={post?.title}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <St.EditDiv1>
            <St.EditText1
              placeholder={post?.content}
              value={content}
              onChange={(e) => setContent(e.target.value)}
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