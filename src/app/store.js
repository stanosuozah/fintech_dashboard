import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import goalReducer from "../features/goalSlice";
import accountReducer from "../features/accountSlice";

const store = configureStore({
	reducer: { user: userReducer, goal: goalReducer, account: accountReducer },
});

export default store;
