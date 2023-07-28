import { createSlice, nanoid } from "@reduxjs/toolkit";

const list = createSlice({
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

export const { addItem, editItem, deleteItem } = list.actions;
export default list;