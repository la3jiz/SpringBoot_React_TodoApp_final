import React, { useContext, useEffect, useRef, useState } from "react";
import "./Todo.css";

import axios from "axios";
import TodoCard from "./TodoCard";
import Loader from "../components/UIelements/Loader";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../reduxToolkit/TodoSlice";
import Modal from "../components/UIelements/Modal";
import Button from "../components/FormElements/Button";
import { UserContext } from "../context/user-context";

const Todo = (props) => {
  const ref = useRef({
    response: {},
  });
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch()
  const { todos } = useSelector(state => state.todos)
  const [viewAll, setViewAll] = useState(false);
  const { logout,userId,token } = useContext(UserContext)

  useEffect(() => {
    try {
      setIsLoading(true)
      // const formData=new FormData()
      // formData.append('uid',userId)
      dispatch(getTodos(userId,token))
      setIsLoading(false)
    } catch (err) {
      console.log(err)
    }
  }, [dispatch]);


  /*
          setIsLoading(true)
        axios
          .get("http://localhost:8090/todo/list")
          .then((res) => {
            setResponse(res.data);
          
          })
          .catch((err) => {
            throw err;
          });
         
          setIsLoading(false)
      } catch (err) {
        setIsLoading(false)
        console.log(err);
      }*/

  return (

    <React.Fragment>
      {isLoading && <Loader />}
      {viewAll && <Modal todos={todos} cancel={() => { setViewAll(false) }} />}
      <div className="absolute my-4 mx-4">  <Button logout click={logout}>Logout</Button></div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="relative top-6 lg:top-12 xl:top-12 md:top-8 sm:top-8 xs:top-8">
              <TodoCard todos={todos} click={() => { setViewAll(true) }} />
            </div>
          </div>
          <div id="col" className="col">
            <img
              className="checklist_img"
              src="./images/Checklist-amico.png"
              alt={props.title}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Todo;
