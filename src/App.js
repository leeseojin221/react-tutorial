import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import Edit from "./pages/Edit";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useState } from "react";
import { nanoid } from "nanoid";

function App() {

  const [list, setList] = useState([
    {
      id: nanoid(),
      title: "제목1",
      content: "내용1",
      author: "작성자1"
    },
    {
      id: nanoid(),
      title: "제목2",
      content: "내용2",
      author: "작성자2"
    },
    {
      id: nanoid(),
      title: "제목3",
      content: "내용3",
      author: "작성자3"
    },
  ])

  return (
    // 페이지 이동에 사용되는 Route 태그를 위해선 Routes로 먼저 감싸야 한다.
    <Routes>
      {/* path="/"이기 때문에 '<주소>/'인 주소로 접속할 경우 Main 컴포넌트가 화면에 보여지게 된다.  */}
      <Route path="/" element={<Main list={list} setList={setList} />} />
      <Route path="/detail/:id" element={<Detail list={list} setList={setList} />} />
      <Route path="/create" element={<Create list={list} setList={setList} />} />
      {/* 수정, 로그인, 회원가입 버튼 클릭시 컴포넌트 보여주기 */}
      <Route path="/edit/:id" element={<Edit list={list} setList={setList} />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
