import { useState } from "react"

const ToDoNew = (props) => {
    const [valueInput, setValueInput] = useState("eric")

    const { addNewToDo } = props
    // addNewToDo("eric")

    const handleClick = () => {
        console.log(valueInput)
    }
    const handleOnChange = (name) => {
        // console.log(">>>>>> :" + name);
        setValueInput(name);
    }

    return (
        // vi onChange cho minh 1 bien so "event" , va dung event.target.value
        // lay ra duoc gia tri cua o input va , truyen no la tham so dau vao cua ham handleOnChange

        <div className="todo-new">

            <input onChange={
                (event) => { handleOnChange(event.target.value) }
            }


                type="text" placeholder="Add a item" />
            <button onClick={handleClick}
                style={{ cursor: "pointer" }}>Add </button>


            <div>My input is {valueInput}</div>
        </div>


    )

}
export default ToDoNew