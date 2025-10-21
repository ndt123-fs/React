const ToDoNew = (props) => {

    const { addNewToDo } = props
    addNewToDo("eric")

    return (

        <div className="todo-new">
            <input type="text" placeholder="Add a item" />
            <button>Add</button>
        </div>


    )

}
export default ToDoNew