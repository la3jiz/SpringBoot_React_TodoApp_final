import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



//get all todos async action
export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (userId,token) => {
    return await axios
      .get(`http://localhost:8090/api/list/${userId}`,{ headers: {
        Authorization:"Bearer " + token 
      }})
      .then((response) => response.data);
  }
);
//add todo async action
export const addTodo = createAsyncThunk("todo/addTodo", async (body,token) => {
  return await axios
    .post(`http://localhost:8090/api/add`, body,{ headers: {
      Authorization:"Bearer " + token 
    }})
    .then((response) => response.data);
});
//delete all todos async action
export const deleteAllTodos = createAsyncThunk("todo/deleteAllTodos", async (userId,token) => {
  return await axios.delete(`http://localhost:8090/api/all/${userId}`,{ headers: {
    Authorization:"Bearer " + token 
  }})
  .then(response => response.data)
})

//delete by id todo async action
export const deleteTodo = createAsyncThunk("todo/deleteTodo", async (id,token) => {
  return await axios
    .delete(`http://localhost:8090/api/${id}`,{ headers: {
      Authorization: "Bearer " +token 
    }})
    .then((response) => response.data);
});

export const updateTodo = createAsyncThunk("todo/updateTodo", async (body, id,token) => {
  return await axios
    .put(`http://localhost:8090/api/${id}`, body,{ headers: {
      Authorization:"Bearer " + token 
    }})
    .then((response) => response.data);
});

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: [],
    status: null,
  },
  extraReducers: {
    [getTodos.pending]: (state, action) => {
      state.status = "loading";
    },
    [getTodos.fulfilled]: (state, action) => {
      state.status = "success";
      state.todos = action.payload;
    },
    [getTodos.rejected]: (state, action) => {
      state.status = "failed";
    },
    [deleteAllTodos.pending]:(state,action)=>{
      state.status="loading"
    },
    [deleteAllTodos.fulfilled]:(state,action)=>{
      state.todos=action.payload
      state.status="success"
    },
    [deleteAllTodos.rejected]:(state,action)=>{
      state.status="failed"
    },
    [deleteTodo.pending]: (state, action) => {
      state.status = "loading";
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.status = "success";
      state.todos = action.payload;
    },
    [deleteTodo.rejected]: (state, action) => {
      state.status = "failed";
    },
    [addTodo.pending]: (state, action) => {
      state.status = "loading";
    },
    [addTodo.fulfilled]: (state, action) => {
      state.status = "success";
      state.todos = action.payload;
    },
    [addTodo.rejected]: (state, action) => {
      state.status = "failed";
    },
    [updateTodo.pending]: (state, action) => {
      state.status = "loading";
    },
    [updateTodo.fulfilled]: (state, action) => {
      state.status = "success";
      state.todos = action.payload;
    },
    [updateTodo.rejected]: (state, action) => {
      state.status = "failed";
    },
  },
  reducers: {
    clear: (state) => {
      state.todos = []
    }
  },
});
export const { clear } = todoSlice.actions
export default todoSlice.reducer;
