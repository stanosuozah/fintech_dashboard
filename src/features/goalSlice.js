import { createSlice } from "@reduxjs/toolkit";

const initialState = { goal: {} };
export const goalSlice = createSlice({
	name: "goal",
	initialState,
	reducers: {
		setGoal: (state, action) => {
			state.goal = action.payload;
		},
	},
});

export const { setGoal } = goalSlice.actions;
export default goalSlice.reducer;
