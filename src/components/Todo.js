const Todo = ({ todo, toggleCompleted }) => {

    const onClickHandler = () => {
        toggleCompleted(todo.id)
    }

    const capitalizeFirstLetter = todo.task.charAt(0).toUpperCase() + todo.task.slice(1).toLowerCase();

    return (
        <li onClick={onClickHandler} className={todo.completed ? "cross-out" : ""}>
            {capitalizeFirstLetter}
        </li>
    );
};

export default Todo;