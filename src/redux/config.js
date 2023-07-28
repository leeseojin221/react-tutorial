import { configureStore } from "@reduxjs/toolkit";
import list from "./list";

const store = configureStore({
    reducer: {
        내용들: list.reducer
    },
});

export default store;