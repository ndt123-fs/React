const ToDoData = (props) => {
    const { name, age } = props



    // console.log(props)
    return (
        // props la 1 obj

        <div className="todo-data">
            <div>Learning English {name} </div>
            <div>Watching Youtube {age}</div>
            <div>
                {JSON.stringify(props.todoList)}

            </div>

        </div>


    )
}
export default ToDoData