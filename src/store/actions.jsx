import { 
    SET_TODO_INPUT, 
    ADD_TODO,
    DEL_TODO,
    EDIT_TODO,
    CLEAR_TODO
} from './constants'

export const setTodoInput = payload => ({
    type: SET_TODO_INPUT, 
    payload
})

export const addTodo = payload => ({
    type: ADD_TODO, 
    payload
})

export const delTodo = payload => ({
    type: DEL_TODO, 
    payload
})

export const editTodo = payload => ({
    type: EDIT_TODO, 
    payload
})

export const clearTodo = payload => ({
    type: CLEAR_TODO, 
    payload
})