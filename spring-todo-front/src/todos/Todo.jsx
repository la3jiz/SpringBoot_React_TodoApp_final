import React, { useEffect, useRef, useState } from "react";
import "./Todo.css";

import axios from "axios";
import TodoCard from "./TodoCard";
import Loader from "../components/UIelements/Loader";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../reduxToolkit/TodoSlice";
import Modal from "../components/UIelements/Modal";
const Todo = (props) => {
  const ref = useRef({
    response: {},
  });
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
const dispatch=useDispatch()
const { todos }=useSelector(state=>state.todos)
const [viewAll,setViewAll]=useState(false);


  useEffect(() => {
    try{ 
      setIsLoading(true)
      dispatch(getTodos())
      setIsLoading(false)
    }catch(err){
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
      {viewAll && <Modal todos={todos} cancel={()=>{setViewAll(false)}} />}

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="relative top-24 lg:top-12 xl:top-12 md:top-24 sm:top-12 xs:top:24">
              <TodoCard todos={todos} click={()=>{setViewAll(true)}}/>
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
