import React, { useState, useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, addTodo, updateTodo } from "../reduxToolkit/TodoSlice";
import { SiCkeditor4 } from "react-icons/si";
import "./TodoItem.scss";
import { IconContext } from "react-icons";

const TodoItem = (props) => {
  const [completed, setCompleted] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updatedAt, setUpdatedAt] = useState();
  const dispatch = useDispatch();
  const updatedRefTitle = useRef();
  const updatedRefDescription = useRef();
  const deleteRequest = useCallback(
    (id) => {
      dispatch(deleteTodo(id));
    },
    [dispatch]
  );
   const updateRequest = useCallback(() => {
    dispatch(
      addTodo({
        id: props.data.id,
        title: updatedRefTitle.current.value || props.data.title,
        description:
          updatedRefDescription.current.value || props.data.description,
        creation_date: props.data.creation_date,
      })
    );
    setIsUpdate(false);
    // let date=new Date();
    // setUpdatedAt(`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`); 
  }, [dispatch]); 

  if (props.data)
    return (
      <React.Fragment>
        <section className="my-2">
          <h1>
            {props.data.creation_date != null &&
              props.data.creation_date.slice(
                0,
                props.data.creation_date.indexOf("T")
              )}
          </h1>
          <h1 className="ml-2">
            {updatedAt && `updated At:${updatedAt}`}
          </h1>
          <div className="flex justify-between my-2">
            <div className="todo_container">
              <input
                type="checkbox"
                id="todo"
                name="todo"
                value="todo"
                onClick={() => {
                  setCompleted(!completed);
                  setIsUpdate(false);
                }}
              />
              {isUpdate ? (
                <div className="relative">
                  {" "}
                  <div className="mt-2">
                    <input
                      className="add-todo__input"
                      placeholder="Title"
                      ref={updatedRefTitle}
                      Value={props.data.title}

                    />
                    <button className="add-todo__btn" onClick={updateRequest}>
                      <span className="flex justify-center">
                      <SiCkeditor4/>
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                <label
                  htmlFor="todo"
                  data-content={!isUpdate && props.data.title}
                >
                  {props.data.title}
                </label>
              )}
              {isUpdate ? (
                <div className="relative">
                  {" "}
                  <div className="mt-2">
                    <input
                      className="add-todo__input"
                      placeholder="Description"
                      ref={updatedRefDescription}
                      Value={props.data.description}
                      
                    />
                    <button className="add-todo__btn" onClick={updateRequest}>
                      <span className="flex justify-center">
                      <SiCkeditor4/>
                      </span>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="relative w-full">
                  <p className="text-lg text-black">{props.data.description}</p>
                </div>
              )}
            </div>
            <div className="relative">
              {completed && (
                <>
                  <button
                    className="noselect"
                    onClick={() => {
                      deleteRequest(props.data.id);
                    }}
                  >
                    <span className="text">Delete</span>
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                      </svg>
                    </span>
                  </button>

                  <button
                    className="edit"
                    onClick={() => {
                      setIsUpdate(!isUpdate);
                    }}
                  >
                    <span className="text">Update</span>
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-edit"
                      >
                        <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path>
                        <polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon>
                      </svg>
                    </span>
                  </button>
                </>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <hr className=" bg-gray-300 w-2/3 my-2" />
          </div>
        </section>
      </React.Fragment>
    );
  return (
    <React.Fragment>
      <section className="my-3">
        <p className="text-lg text-gray-200 w-40 bg-gray-200 rounded-md">
          dummy content
        </p>
        <div className="flex justify-between my-2">
          <div className="w-2/3">
            <input type="checkbox" id="todo" name="todo" value="todo" />
            <label htmlFor="todo">
              <p className="text-lg text-gray-200 w-52 bg-gray-200 rounded-md">
                dummy content
              </p>
            </label>
            <div className="relative w-full">
              <p className="text-lg text-gray-200 w-full bg-gray-200 rounded-md">
                dummy content
              </p>
            </div>
          </div>
          <div></div>
        </div>
        <div className="flex justify-center">
          <hr className=" bg-gray-300 w-2/3 mt-2" />
        </div>
      </section>
    </React.Fragment>
  );
};

export default TodoItem;
