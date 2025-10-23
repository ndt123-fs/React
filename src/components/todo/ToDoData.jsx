const ToDoData = (props) => {
    const { name, age, todoList } = props



    // console.log(props)
    return (
        // props la 1 obj

        <div className="todo-data">
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>
                        <button>Delete</button>

                    </div>


                )
            })}

        </div>


    )
}
export default ToDoData