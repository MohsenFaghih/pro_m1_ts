import React from 'react';
import { TodoListProps } from '../models/todoModels';

const TodoList: React.FC<TodoListProps> = (props) => {

  return (
    <div>
        <ul>
            {props.todos.map( todo => (
                <li key={String(todo.id)}>
                  <span>{todo.todo}</span>
                  <button onClick={() => props.todoDeleteHandler(Number(todo.id))}>Delete Todo</button>
                </li>
            ))}
        </ul>
    </div>
  );

}

export default TodoList;