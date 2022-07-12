import { useEffect, useReducer } from 'react';
import { Todo, todoReducer } from '../08-useReducer/todoReducer';

const initTodos = () => {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}

export const useTodos = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], initTodos);

    const todosCount = todos.length;
    const pendingTodosCount = todos.filter(todo => !todo.done).length;

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    const onNewTodo = (todo: Todo) => {
        dispatch({
            type: '[TODO] ADD TODO',
            payload: todo
        });
    }

    const onDeleteTodo = (todoId: number) => {
        dispatch({
            type: '[TODO] REMOVE TODO',
            payload: todoId
        });
    }

    const onToggleTodo = (todoId: number) => {
        dispatch({
            type: '[TODO] TOGGLE TODO',
            payload: todoId
        });
    }
    
    return { 
        todos,
        todosCount,
        pendingTodosCount,
        onNewTodo,
        onDeleteTodo,
        onToggleTodo
    };
}