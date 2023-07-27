import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { configureStore, createSlice, nanoid } from "@reduxjs/toolkit";

const lists = createSlice({
  name: "내용들",
  initialState: [{
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
  },],
  reducers: {
    addItem: (state, action) => {
      const { title, content } = action.payload;
      state.push({
        id: nanoid(),
        title,
        content,
        author: "작성자",
      });
    },
    editItem: (state, action) => {
      const { id, title, content } = action.payload;
      const itemToUpdate = state.find(item => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.title = title;
        itemToUpdate.content = content;
      }
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      return state.filter(item => item.id !== id);
    },
  },
});

const store = configureStore({
  reducer: {
    내용들: lists.reducer
  },
});

export const { addItem, editItem, deleteItem } = lists.actions;
export default lists.reducer;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* Routes, Route 태그 및 react-router-dom을 사용하기 위해선 최상단에 BrowserRouter로 감싸줘야한다 */}
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

