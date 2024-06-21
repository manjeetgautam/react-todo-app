import React, { useContext, useEffect, useState } from "react";
import {Data} from "../data/Data" 

const Input = () => {

    const {todos , setTodos , newtodo , setNewTodo , editTodo , setEditTodo} = useContext(Data);

    // const [newtodo , setNewTodo] = useState("");

    const handleOnChange = (event)=>{
          setNewTodo(event.target.value)
    }


    const handleSubmit = (event)=>{
      event.preventDefault();
        if(editTodo.index===-1){
          addtodos(event)
        }
        else if(editTodo.index!==-1){
          changetodo() 
        }         
    }
    
    const addtodos = ()=>{
      if(newtodo.trim().length>0){
        setTodos([...todos , newtodo]);
        setNewTodo('')
      }
    }

      
    const changetodo =()=>{
      todos.splice(editTodo.index,1,newtodo)
       setTodos([...todos])

      setNewTodo('')
      setEditTodo({
        index:-1,
        value:'',
    })
    }

     

  return (
    <div>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-auto">
          <input
            type="text"
            className="form-control-plaintext"
            placeholder="Enter Todos"
            value={newtodo}
            onChange={handleOnChange}
          />
        </div>
        <div className="col-auto">
          <button type="submit" className="btn btn-primary mb-3">
           {editTodo.index===-1?"Add":"Update"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Input;
