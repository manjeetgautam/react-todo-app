import React, { useState } from "react"
import {Data} from "./data/Data"
import DisplayTodo from "./components/DisplayTodo"
import Input from "./components/Input"
import Header from "./components/Header"
import "./App.css"

function App() {

    const [todos, setTodos] = useState(["manjeet", "rahul", "govinda"])
    
    const [newtodo , setNewTodo] = useState("");

    const [editTodo , setEditTodo] = useState({
        value:"",
        index:-1,
    })

  

  return (
      <Data.Provider value={{todos , setTodos , editTodo , setEditTodo , newtodo , setNewTodo}}>
          
            <div className="container">
            <Header/>
            <div className="main">
            <Input/>
            <DisplayTodo/>
            </div>
            </div>
          
      </Data.Provider>
  )
}

export default App
