import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

export const showUser = createAsyncThunk("showUser", async(_, {rejectWithValue})=>{
    try {
        const response = await axios.get("http://localhost:5000/");
        return response.data; 
    } catch (error) {
        return rejectWithValue(error);
    }
})


export const createUser = createAsyncThunk("createUser", async(data, {rejectWithValue})=>{
    try {
        const response = await axios.post("http://localhost:5000/singup",data);
        return response.data;
    } catch (error) {
        return rejectWithValue(error);
    }
})



export const UpdateUser = createAsyncThunk("UpdateUser", async(data, {rejectWithValue})=>{
    try {
        const response = await axios.put(`http://localhost:5000/update/${data.id}`, data)
        return response.data;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});


export const deleteUser = createAsyncThunk("deleteUser", async (id, { rejectWithValue }) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
        try {
            await axios.delete("http://localhost:5000/delete/" + id);
            return id; 
        } catch (error) {
            return rejectWithValue(error.response.data); 
        }
    }
});



const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        user: [],
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(showUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(showUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(showUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(createUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user.push(action.payload); 
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
                       
            .addCase(UpdateUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(UpdateUser.fulfilled, (state, action) => {
                state.loading = false;
                const updatedUser = action.payload;
                
                state.user = state.user.map((user) =>
                    user.id === updatedUser.id ? updatedUser : user
                );
            })
            .addCase(UpdateUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deleteUser.pending, (state) => {
                state.loading = true;
                state.error = null; 
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                state.loading = false;
                const deletedUserId = action.payload;
                if (deletedUserId) {
                    state.user = state.user.filter((user) => user.id !== deletedUserId);
                }
            })
            .addCase(deleteUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default userDetail.reducer;
