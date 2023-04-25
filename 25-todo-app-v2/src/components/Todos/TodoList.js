import Todo from "./Todo";
import style from './TodoList.module.css'

function TodoList({todos, deleteTodo}) {
  return (
    <div className={style.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo) =>
        <Todo key={todo.id} todo={todo} deleteTodo={deleteTodo}/>)}
    </div>
  )
}

export default TodoList
