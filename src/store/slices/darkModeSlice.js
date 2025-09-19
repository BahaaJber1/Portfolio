import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode:
        JSON.parse(localStorage.getItem("darkMode")) ??
        window.matchMedia("(prefers-color-scheme: dark)").matches,
};

const darkModeSlice = createSlice({
    name: "darkMode",
    initialState: initialState,
    reducers: {
        toggleDarkMode(state) {
            state.darkMode = !state.darkMode;
            localStorage.setItem("darkMode", JSON.stringify(state.darkMode));
        },
    },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;
