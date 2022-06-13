import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

//get all todos async action
export const getTodos = createAsyncThunk(
  "todos/getTodos",
  async (dispatch, getState) => {
    return await axios
      .get("http://localhost:8090/todo/list")
      .then((response) => response.data);
  }
);
//add todo async action
export const addTodo = createAsyncThunk("todo/addTodo", async (body) => {
  return await axios
    .post("http://localhost:8090/todo/add", body)
    .then((response) => response.data);
});
//delete todo async action
export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  return await axios
    .delete(`http://localhost:8090/todo/delete/${id}`)
    .then((response) => response.data);
});

export const updateTodo = createAsyncThunk("todo/updateTodo", async (body,id) => {
  return await axios
    .patch(`http://localhost:8090/todo/update/${id}`, body)
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
});

export default todoSlice.reducer;
