import { 
    SET_TODO_INPUT,
    ADD_TODO,
    DEL_TODO,
    EDIT_TODO,
    CLEAR_TODO
} from './constants'

const initState = {
    todos: [],
    todoInput: ''
}



function reducer(state, action) {

    switch(action.type) {
        case SET_TODO_INPUT:
            return {
                ...state,
                todoInput: action.payload
            }

        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }

        case DEL_TODO: {
            const newTodos = [...state.todos]
            newTodos.splice(action.payload, 1)
            return {
                ...state,
                todos: newTodos
            }
        }

        case EDIT_TODO: {
            const updatedTodos = [...state.todos]
            updatedTodos[action.payload.index] = action.payload.value
            return {
                ...state,
                todos: updatedTodos
            }
        }

        case CLEAR_TODO:
            return {
                ...state,
                todos: []
            }
            

        default: 
            throw new Error('Invalid action type')
    }
}

export {initState}
export default reducer