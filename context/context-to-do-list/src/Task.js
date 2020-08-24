import React from 'react';

const Task = () => {
  const handleClick = () => {
  }

  return (
    <li>
      <h1>Hi Im a task in your todo list</h1>
      <button onClick={handleClick}>Delete task</button>
    </li>
  )
}

export default Task;
