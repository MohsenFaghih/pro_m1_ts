import React, {useRef} from 'react'

type NewTodoProps = {
    todoAddHandler: (todoText: string) => void;
}

const NewTodo: React.FC<NewTodoProps> = (props) => {

    const TextInputRef = useRef<HTMLInputElement>(null);

    const todoHandler = (e:React.FormEvent) => {
        e.preventDefault();
        const enteredTodoText = TextInputRef.current!.value;
        props.todoAddHandler(enteredTodoText)
    }

    return (
        <form onSubmit={todoHandler}>
            <div>
                <label htmlFor='todo-text'>Todo Text</label>
                <input type='text' id='todo-text' ref={TextInputRef} />
            </div>
            <button type='submit'>Add Todo</button>
        </form>
    )
}

export default NewTodo