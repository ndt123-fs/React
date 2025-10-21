const ToDoData = (props) => {
    const { name, age } = props




    return (
        // props la 1 obj

        <div className="todo-data">
            <div>Learning English {name} </div>
            <div>Watching Youtube {age}</div>

        </div>


    )
}
export default ToDoData