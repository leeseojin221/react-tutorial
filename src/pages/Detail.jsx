import React from "react";
import { useParams } from "react-router-dom/dist";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate } from "react-router-dom";
import * as St from "../styled/DetailStyled"
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { deleteItem } from "../redux/list";


export default function Detail() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const list = useSelector((state)=>state.내용들);
  const {id} = useParams();
  const post = list.find((post) => post.id === id);

  const handleDeleteItem = (id) => {

    const confirmDelete = window.confirm('삭제하시겠습니까?');
    if(confirmDelete){
      dispatch(deleteItem(id));
      navigate("/");
    }
  }

  return (
    <>
      <Header />
      <Container>
        <St.DetailH1>
          {post?.title || ''}
        </St.DetailH1>
        <St.DetailDiv1>
          {post?.content || ''}
        </St.DetailDiv1>
        <St.DetailDiv2>
          <St.DetailBtn1
            onClick={() => {
              navigate("/edit/"+post?.id);
            }}
          >
            수정
          </St.DetailBtn1>
          <St.DetailBtn2
            onClick={() => {
              handleDeleteItem(post.id);
            }}
          >
            삭제
          </St.DetailBtn2>
        </St.DetailDiv2>
      </Container>
    </>
  );
}
