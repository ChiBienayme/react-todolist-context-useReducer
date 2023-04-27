import { useRef, useState } from 'react'
import { useStore, actions } from './store'

function App() {
  const [state, dispatch] = useStore()
  
  const {todos, todoInput} = state

  const inputRef = useRef()

  const [editIndex, setEditIndex] = useState(null)
  const [editValue, setEditValue] = useState('')
  
  const handleAdd = () => {
    if (todoInput !== '') {
      dispatch(actions.addTodo(todoInput))
      dispatch(actions.setTodoInput(''))
  
      inputRef.current.focus() 
    }
  }

  const handleEdit = (index, value) => {
    dispatch(actions.editTodo({index, value}))
    setEditIndex(null)
    setEditValue('')
    console.log(value)
  }


  return (
    <div style={{ padding: 50 }}>
        <input 
          ref={inputRef}
          value={todoInput}
          placeholder='Enter todo...'
          onChange={e => {
            dispatch(actions.setTodoInput(e.target.value))
          }}
        />

        <button 
          onClick={handleAdd}
          onKeyUp={e => e.key === "Enter" && handleAdd()}    
        >
          Add
        </button>

        {todos.map((todo, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type='text'
                  defaultValue={todo}
                  onChange={e => {
                    setEditValue(e.target.value)
                  }}
                />

                <button
                  onClick={() => handleEdit(index, editValue)}
                >
                  Save
                </button>

                <button
                  onClick={() => handleEdit(index, todo)}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                {todo}
  
                <button 
                  onClick={() => {
                    dispatch(actions.delTodo(index))
                  }}
                >
                  X
                </button>
  
                <button 
                  onClick={() => setEditIndex(index)}
                > 
                  Edit 
                </button>

              </>
            )}

          </li>
        ))}

        {todos.length >= 1 && (
          <button 
            onClick={() => dispatch(actions.clearTodo())}
          >
            Clear all
          </button>
        )}
    </div>
  )
}

export default App
