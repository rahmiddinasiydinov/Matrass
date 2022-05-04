import { configureStore } from "@reduxjs/toolkit";
import LoadSlice from "./ReduxSlices/LoadSlic";
export const store = configureStore({
    reducer: {
        isLoaded:  LoadSlice.reducer
    }
})