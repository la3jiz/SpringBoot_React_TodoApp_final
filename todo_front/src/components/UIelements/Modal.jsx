import React, { useContext } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch } from 'react-redux'

import { UserContext } from '../../context/user-context'
import { deleteAllTodos } from '../../reduxToolkit/TodoSlice'
import TodoItem from '../../todos/TodoItem'
import Button from '../FormElements/Button'
import './Modal.scss'

const Modal = (props) => {
  const dispatch = useDispatch()
  const { userId } = useContext(UserContext)

  const deleteHandler=()=>{
    dispatch(deleteAllTodos(userId)); 
    props.cancel()
  }
  const content = <React.Fragment>
    <div className="modal_container" >

      <div className="scroll_div">
        <div className='flex justify-end items-center mr-2' >
          <button className="close " onClick={props.cancel}>
            ✖
          </button>
        </div>
        {props.todos.map(todo => <TodoItem data={todo} key={todo.id} />)}



        <div className=' relative flex justify-center items-center mb-2 mt-4'>

        </div>
        <div className='relative flex justify-center'>
          <button
            className="noselect"
            onClick={deleteHandler}
          >
            <span className="text">Delete All</span>
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
        </div>
      </div>
    </div>

  </React.Fragment>
  return ReactDOM.createPortal(content, document.getElementById("list_todo_modal"))
}

export default Modal