import React, {
  useCallback,
  useRef,
  useState,
  useContext,
  useEffect,
} from "react";

import { useDispatch } from "react-redux";
import "font-awesome/css/font-awesome.min.css";

import { addTodo } from "../reduxToolkit/TodoSlice";

import TodoItem from "./TodoItem";
import "./TodoCard.css";
import "./TodoCardInput.scss";
import Button from "../components/FormElements/Button";
import Modal from "../components/UIelements/Modal";
import { UserContext } from "../context/user-context";
import axios from "axios";

const TodoCard = (props) => {
  const { userId, token } = useContext(UserContext);

  const refTitle = useRef();
  const refDescription = useRef();
  const dispatch = useDispatch();

  //get task username
  let username = "";
  useEffect(() => {
    const getTaskUsername = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8091/users/admin/${userId}`,
          {
            headers: {
              Authorization:"Bearer "+ token,
            },
          }
        );
        username = response.data.username;
      } catch (err) {
        console.log(err);
      }
    };
    getTaskUsername();
  }, []);

  const addRequest = useCallback(() => {
    dispatch(
      addTodo(
        {
          title: refTitle.current.value,
          description: refDescription.current.value,
          creation_date: new Date(),
          uid: userId,
          username: username,
        },
        token
      )
    );
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
  }, [dispatch]);

  if (props.todos)
    return (
      <React.Fragment>
        <div class="card">
          <h1 className="text-2xl mb-3">
            WHAT YOU HAVE{" "}
            <span className="text-3xl font-bold text-blue-300 ">
              FOR TODAY:
            </span>
          </h1>
          {props.todos.length > 0 && (
            <h1 className="text-xl mb-2 ">YOUR LATEST TODOS:</h1>
          )}

          {props.todos.length === 0 && <TodoItem dummyCardItem={true} />}

          {props.todos.length > 1 && (
            <TodoItem
              data={props.todos[props.todos.length - 2]}
              key={props.todos[props.todos.length - 2].id}
            />
          )}
          {props.todos.length > 0 && (
            <TodoItem
              data={props.todos[props.todos.length - 1]}
              key={props.todos[props.todos.length - 1].id}
            />
          )}

          <div className="flex justify-center mt-4 mb-2">
            {props.todos.length > 2 && (
              <Button text="View All" arrowBtn click={props.click} />
            )}
          </div>

          <div className="my-4">
            <div className="mb-3">
              <h1 className="text-lg font-medium">ADD A NEW TODO :</h1>
            </div>
            <input
              className="add_title"
              name="title"
              id="title"
              placeholder="Title"
              ref={refTitle}
              required
            />
            <div className="add-todo">
              <input
                className="add-todo__input"
                placeholder="Description"
                id="description"
                ref={refDescription}
                required
              />
              <button className="add-todo__btn" onClick={addRequest}>
                <i className="fa fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
};

export default TodoCard;
/*

<React.Fragment>
<form>
  <div class="card">
    <h1 className="text-2xl mb-4 ">
      START WRITING YOUR TASKS
      <span className="text-3xl font-bold text-blue-300 ">
        {" "}
        FOR TODAY:{" "}
      </span>
    </h1>
    <TodoItem dummyCardItem={true} />

    <div className="my-4">
      <div className="mb-3">
        <h1 className="text-lg font-medium">ADD YOUR FIRST TODO :</h1>
      </div>
      <input className="add_title" placeholder="Title" required/>
      <div className="add-todo">
        <input className="add-todo__input" placeholder="Description" required/>
        <button type="submit" className="add-todo__btn">
          <i className="fa fa-plus"></i>
        </button>
      </div>
    </div>
  </div>
  </form>
</React.Fragment>

*/
