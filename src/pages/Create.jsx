import React,{useState} from "react";
import * as St from "../styled/CreateStyled";
import Header from "../common/Header";
import Container from "../common/Container";
import { useNavigate } from "react-router";
import { nanoid } from "nanoid";

export default function Create({list, setList}) {

  const [items,setItems] = useState(list);

  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');


  const handleAddItem = (e) => {
    e.preventDefault();

    const newItem = {
      id: nanoid(),
      title,
      content,
      author:"작성자",
    };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    setList(updatedItems);

    setTitle(``);
    setContent(``);

    navigate("/");
  }


  return (
    <>
      <Header />
      <Container>
        <St.CreateForm1
          onSubmit={handleAddItem}
        >
          <div>
            <St.CreateInput1
              placeholder="제목"
              type = "text"
              value = {title}
              onChange={(e)=> setTitle(e.target.value)}              
            />
          </div>
          <St.CreateDiv1>
            <St.CreateText1
              placeholder="내용"
              value = {content}
              onChange={(e)=> setContent(e.target.value)}              
            />
          </St.CreateDiv1>
          <St.CreateBtn1 type="submit">
            추가하기
          </St.CreateBtn1>
        </St.CreateForm1>
      </Container>
    </>
  );
}
