import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./themeSlice";


const store = configureStore({
    reducer: {
        themeReducer: themeSlice,
    },
});

export default store;