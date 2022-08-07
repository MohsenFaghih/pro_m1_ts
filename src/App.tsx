import React, { useState } from 'react';
import {Todo} from './models/todoModels'
import TodoList from './components/TodoList';
import NewTodo from './components/NewTodo';

const App: React.FC = () => {

  const [todos, setTodos] = useState<Todo[]>([])

  console.log(todos)

  
  const todoAddHandler = (text: string) => {
    setTodos(prev => [...prev, {id: todos.length + 1, todo: text}])
  }

  const todoDeleteHandler = (id: number) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <div className='App'>
      <NewTodo todoAddHandler={todoAddHandler} />
      <TodoList todos={todos}  todoDeleteHandler={todoDeleteHandler} />
    </div>
  )
}

export default App;
