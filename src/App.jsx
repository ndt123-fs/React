import "./components/todo/todo.css"
import ToDoData from "./components/todo/ToDoData"
import ToDoNew from "./components/todo/ToDoNew"
import logo from "./assets/react.svg"
import { useState } from "react"
import Header from "./components/layout/header"
import Footer from "./components/layout/footer"

const App = () => {

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
  const deleteToDo = (id) => {
    //loc bot nhung item trong list co id khac voi id truyen vao 
    // giu lai cac item co id khac voi id ban truyen vao 
    const newToDo = todoList.filter(item => item.id !== id);
    console.log(newToDo)
    setToDoList(newToDo)



  }

  const randomIntFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min - 1) + min);



  }
  return (
    <>
      <Header />
      < div className="todo-container">
        <div className="todo-title">Todo List</div>
        <ToDoNew
          addNewToDo={addNewToDo}
        />
        {todoList.length > 0 ?
          <ToDoData
            todoList={todoList}
            deleteToDo={deleteToDo}
          />
          :
          <div className="todo-image">
            <img src={logo} className="logo" />
          </div>}
      </div>
      <Footer />
    </>


  )
}

export default App
