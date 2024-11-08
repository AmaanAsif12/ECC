import themeReducer from "./themeSlice";
import cartReducer from "./cartSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    cartStore: cartReducer,
    themeStore: themeReducer
})

export default rootReducer;