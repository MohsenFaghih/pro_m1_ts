export interface Todo {
    id: number;
    todo: string
}

export interface TodoListProps {
    todos: {id: Number, todo: String}[];
    todoDeleteHandler: (id: number) => void
}