import React,{useState} from "react";
import { useParams } from "react-router-dom/dist";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate } from "react-router-dom";
import * as St from "../styled/DetailStyled"


export default function Detail({list,setList}) {

  const [items, setItems] = useState(list)

  const navigate = useNavigate();
  const {id} = useParams();
  const lists = items.find((item) => item.id === id);

  const handleDeleteItem = (id) => {

    const confirmDelete = window.confirm('삭제하시겠습니까?');
    if(confirmDelete){
      const updatedList = items.filter((item) => item.id !== id);
      setItems(updatedList);
      setList(updatedList);
      navigate("/");
    }
  }

  return (
    <>
      <Header />
      <Container>
        <St.DetailH1>
          {lists.title}
        </St.DetailH1>
        <St.DetailDiv1>
          {lists.content}
        </St.DetailDiv1>
        <St.DetailDiv2>
          <St.DetailBtn1
            onClick={() => {
              navigate("/edit/"+lists.id);
            }}
          >
            수정
          </St.DetailBtn1>
          <St.DetailBtn2
            onClick={() => {
              handleDeleteItem(lists.id);
            }}
          >
            삭제
          </St.DetailBtn2>
        </St.DetailDiv2>
      </Container>
    </>
  );
}
