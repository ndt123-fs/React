const ToDoData = (props) => {
    const { todoList, deleteToDo } = props

    const handleClickDel = (id) => {
        deleteToDo(id);



    }
    return (
        // props la 1 obj

        <div className="todo-data">
            {todoList.map((item, index) => {
                return (
                    <div className="todo-item" key={item.id}>
                        <div>{item.name}</div>
                        <button onClick={() => { handleClickDel(item.id) }}
                            style={{ cursor: "pointer" }}>Delete</button>

                    </div>


                )
            })}

        </div>


    )
}
export default ToDoData