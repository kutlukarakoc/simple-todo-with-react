import Todo from "./Todo";

const TodoList = ({ todos, toggleCompleted }) => {
    return (
        <ul>
            {
                todos.map((e) => {
                    return (
                        <Todo key={e.id} todo={e} toggleCompleted={toggleCompleted}/>
                    )
                })
            }
        </ul>
    );
};

export default TodoList;