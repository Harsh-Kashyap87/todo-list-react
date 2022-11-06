
import React from 'react'
// import { TodoItem } from "../MyComponents/TodoItem";
import { TodoItem } from "./TodoItem";

export const Todo = (props) => {
  return (
    <>
        <div className="container">
            <h2 className='text-center my-3'>Todo List</h2>
            { props.todos.length===0 ? <h3 className='my-5 text-center'>No List to display</h3> :
              props.todos.map((todo)=>{
                return (
                  <>
                  <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
                  <hr/>
                  </>
                )
              })
            }
        </div>
    </>
  )
}
