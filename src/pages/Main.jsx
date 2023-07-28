import {React} from "react";
import { useNavigate } from "react-router-dom";
import Header from "../common/Header";
import Container from "../common/Container";
import * as St from "../styled/MainStyled";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { deleteItem } from "../redux/list";


export default function Main() {
 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const lists = useSelector((state)=>state.내용들);

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
        <St.Maindiv1>
          <St.MainBtn1
            onClick={() => {
              navigate("/create");
            }}
          >
            추가
          </St.MainBtn1>
        </St.Maindiv1>
        {/* map을 활용해서 임시데이터 받기. 
        map앞에 임시 데이터 배열을 넣어준다.
        그러면 map 매소드 함수가 실행되서 item 배열로 다시금 만들어준다. */}
        {lists.map((item) => (
          <St.Maindiv2
          // key값은 nanoid로 고유한 아이디를 만들었기 때문에 사용한다.
            key={item.id}
          >
            <St.Maindiv3
              onClick={() => {
                navigate("detail/"+item?.id);
              }}
            >
              <h2>{item.title}</h2>
              <St.MainP>
              {item.content}
              </St.MainP>
            </St.Maindiv3>
            <St.Maindiv4>
              <div>{item.author}</div>
              <div>
                {/* 메인 페이지(/), 상세페이지(/detail/:id)에서 수정 버튼 클릭 시 수정 컴포넌트 보여주기 */}
                <St.MainBtn2
                  onClick={() => {
                    navigate("edit/"+item?.id);
                  }}
                >
                  수정
                </St.MainBtn2>
                <St.MainBtn3
                  onClick={() => {
                    handleDeleteItem(item.id);
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
