import React, { Component } from 'react';
import './Task.css';

class Task extends Component {
  render() {
    const { id, title, completed, toggleComplete, deleteTask } = this.props;

    return (
      <div className={`task ${completed ? 'completed' : ''}`}>
        <input type="checkbox" checked={completed} onChange={() => toggleComplete(id)} />
        <span className='title'>{title}</span>
        <button onClick={() => deleteTask(id)} className='delete-button'>Delete</button>
      </div>
    );
  }
}

export default Task;
