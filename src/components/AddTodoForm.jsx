import React, { useState } from 'react';
import "./AddTodoForm.css"

const AddTodoForm = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        className='add__todo__form'
        type="text"
        placeholder="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className='button' type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
