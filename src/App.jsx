import "./components/todo/todo.css"
import ToDoData from "./components/todo/ToDoData"
import ToDoNew from "./components/todo/ToDoNew"
import logo from "./assets/react.svg"
import { useFormState } from "react-dom"
import { useState } from "react"

const App = () => {
  // const name = "Eric";
  // const age = 25;
  // const data = {
  //   address: "Ho Chi Minh",
  //   country: "Viet Nam"
  // }
  const [todoList, setToDoList] = useState([
    //  { id: 1, name: "Learning English" }, { id: 2, name: "Watching youtube" }
  ])
  const addNewToDo = (name) => {
    const newToDo = {
      id: randomIntFromInterval(1, 10000),
      name: name
    }
    setToDoList([...todoList, newToDo]);
  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min - 1) + min);



  }
  return (


    < div className="todo-container">
      <div className="todo-title">Todo List</div>
      <ToDoNew
        addNewToDo={addNewToDo}
      />
      <ToDoData
        // name={name}
        // age={age}
        // data={data}
        todoList={todoList}

      />
      <div className="todo-image">
        <img src={logo} className="logo" />
      </div>
    </div>


    // <div className="todo-container">
    //   <div className="todo-title">Todo List</div>
    //   <div className="todo-new">
    //     <input type="text" placeholder="Add a item" />
    //     <button>Add</button>
    //   </div>
    //   <div className="todo-data">
    //     <div>Learning English</div>
    //     <div>Watching Youtube</div>
    //   </div>
    // </div>
  )
}

export default App
