import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface ILoad{
    value:boolean
}
const initialState: ILoad = {
    value:false
}
const LoadSlice = createSlice({
    name: "loader", 
    initialState, 
    reducers:{
        handleLoad:(state, action: PayloadAction<boolean>)=> {
        state.value = action.payload
    }}
})

export const loaderAction = LoadSlice.actions;

export default LoadSlice