import React from 'react'

import { useState } from 'react';

export const AddTodo = (props) => {
    
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const sumbit = (e)=>{
        e.preventDefault();
        if(!title || !desc ){
            alert("Title or Description cannot be blank");
        }
        else{
            props.addTodo(title, desc);

        setTitle("");
        setDesc("");
        }
    }
  return (

    <>
    <div className='container'>
        <form onSubmit={sumbit}>
            <div className="mb-3 my-3">
                <label htmlFor="title" className="form-label">Task Title</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3">
                <label htmlFor="desc" className="form-label">Task Description</label>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc"/>
            </div>
            
            <button type="submit" className="btn btn-success">Submit</button>
    </form>
    </div>
    </>
  )
}
