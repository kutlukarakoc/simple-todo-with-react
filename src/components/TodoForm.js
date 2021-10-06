import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({addTodo}) => {

    const [todo, setTodo] = useState({
        id : "",
        task : "",
        completed: false
    });

    const onChangeHandler = (e) => {
        setTodo({...todo, task: e.target.value});
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        
        if(todo.task.trim().length) {
            addTodo({...todo, id: uuidv4()});

            setTodo({...todo, task: ""});
        }
    }


    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" placeholder="Enter a task..." onChange={onChangeHandler} value={todo.task}/>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TodoForm;
