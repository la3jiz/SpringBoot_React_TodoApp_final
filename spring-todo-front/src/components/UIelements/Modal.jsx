import React from 'react'
import  ReactDOM  from 'react-dom'

import TodoItem from '../../todos/TodoItem'
import Button from '../FormElements/Button'
import './Modal.scss'

const Modal = (props) => {
  const content=  <React.Fragment>
  <div className="modal_container" >
  <div className="scroll_div">
  {props.todos.map(todo=><TodoItem data={todo} key={todo.id}/>)}
  


  <div className=' relative flex justify-center items-center mb-2 mt-4'>
  <Button cancelBtn click={props.cancel}>Back</Button>
  </div>

  </div>
 
  

  </div>
  
      </React.Fragment>
  return ReactDOM.createPortal(content,document.getElementById("list_todo_modal"))
}

export default Modal