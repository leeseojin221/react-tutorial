import React, {useState, Fragment } from "react";
import Header from "../common/Header";
import Container from "../common/Container";
import * as St from "../styled/EditStyled";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

export default function Edit({list, setList}) {
  const navigate = useNavigate();

  const [items,setItems] = useState(list);

 
  const {id} = useParams();
  const lists = items.find((items) => items.id === id);

  const [title, setTitle] = useState(lists.title ||'');
  const [content, setContent] = useState(lists.content ||'');

  const handleEditItem = (id) => {

    const updatedList = items.map((item)=>
      item.id === id ? {...item, title, content} : item);
      setItems(updatedList);
      setList(updatedList);

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
              placeholder={lists.title}
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <St.EditDiv1>
            <St.EditText1
              placeholder={lists.content}
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </St.EditDiv1>
          <St.EditBtn1 onClick={() => handleEditItem(lists.id)}>
            수정하기
          </St.EditBtn1>
        </St.EditForm1>
      </Container>
    </Fragment>
  );
}
