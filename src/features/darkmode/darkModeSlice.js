import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: localStorage.getItem("darkMode") || false,
};

const darkModeSlice = createSlice({
    name: "darkMode",
    initialState: initialState,
    reducers: {
        toggleDarkMode(state) {
            state.darkMode = !state.darkMode;
            localStorage.setItem("darkMode", state.darkMode);
        },
    },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
