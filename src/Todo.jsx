import { useState } from 'react'

function Todo() {
    const [newTodo, setNewTodo] = useState("")
    const [todos, setTodos] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        const trimmed = newTodo.trim()
        if (trimmed) {
            setTodos([...todos, { id: Date.now(), text: trimmed, completed: false }])
            setNewTodo('')
        }
    }

    const toggleComplete = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ))
    }

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    return (
        <div>
            <h1>Todo app</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="add new todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button type="submit">Add todo</button>
            </form>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span
                            onClick={() => toggleComplete(todo.id)}
                            style={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                cursor: 'pointer'
                            }}
                        >
                            {todo.text}
                        </span>
                        <button onClick={() => handleDelete(todo.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todo