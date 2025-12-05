import {createSlice} from "@reduxjs/toolkit";


const initialState ={
    signupData:null,
} 

const authSlice = createSlice({
    name:"auth",
    initialState:initialState,

    reducers:{
        setSighupData(state,value){
            state.signupData = value.payload;
        }
    }
})

export const{setSighupData} = authSlice.actions;

export default authSlice.reducer;