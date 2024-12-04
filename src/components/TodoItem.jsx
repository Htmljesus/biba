import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './TodoItem.css';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <CSSTransition
      in={true}
      timeout={300}
      classNames="todo"
      appear
    >
      
      <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
        
        <span className='todo__text' onClick={() => toggleTodo(todo.id)}>
          <input type="checkbox" id='checkbox' className='checkbox' />
          <label htmlFor="checkbox">{todo.text}</label>
          
          
        </span>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </CSSTransition>
  );
};

export default TodoItem;
