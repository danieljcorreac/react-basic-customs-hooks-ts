export interface Todo {
    id: number;
    todo: string;
    done: boolean;
}

export type TodoAction = 
    | null
    | { type: '[TODO] ADD TODO', payload: Todo }
    | { type: '[TODO] REMOVE TODO', payload: number }
    | { type: '[TODO] TOGGLE TODO', payload: number }

export const todoReducer = (state: Todo[], action: TodoAction) => {
    switch (action?.type) {
        case '[TODO] ADD TODO':
            return [...state, action.payload];
        case '[TODO] REMOVE TODO':
            return state.filter(todo => todo.id !== action.payload);
        case '[TODO] TOGGLE TODO':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return { ...todo, done: !todo.done };
                }
                return todo;
            });
        default:
            return state;
    }
}