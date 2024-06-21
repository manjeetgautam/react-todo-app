import React, { useContext, useEffect } from 'react'
import {Data} from "../data/Data"

const DisplayTodo = () => {

    const {todos , setTodos , editTodo , setEditTodo , newtodo , setNewTodo} = useContext(Data);

    const handleDelete = (index)=>{
          if(editTodo.index===index){
            window.alert("Todo in Use")
          }
          else{
            todos.splice(index,1)
            setTodos([...todos])
          }
          
    }

    const handleEdit = (val,ind)=>{
        setEditTodo({
          value:val,
          index:ind,
        })
        setNewTodo(val)
    }
  return (
    <div>

      <ul className="list-group">
        {
          todos.length>0?todos.map((value,index)=>{
            return <li className="list-group-item d-flex align-items-center justify-content-between"  key={index}><div className='listdata flex-grow-1 fs-6 fw-medium'>{value}</div>
            <button type="button" className="btn btn-warning"
            onClick={()=>handleEdit(value,index)}
            >Edit</button>
            <button type="button" className="btn btn-danger"
            onClick={()=>handleDelete(index)}
            >Delete</button>
            </li>
          }):<li className="list-group-item">No Todos Here!</li>
        }
      </ul>
    </div>
  )
}

export default DisplayTodo