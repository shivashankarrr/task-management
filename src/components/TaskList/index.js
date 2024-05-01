import React, { Component } from 'react';

import Task from '../Task';
import './TaskList.css';

class TaskList extends Component {
  render() {
    const { tasks, toggleComplete, deleteTask } = this.props;

    return (
      <div className="task-list">
        {tasks.map(task => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            completed={task.completed}
            toggleComplete={toggleComplete}
            deleteTask={deleteTask}
          />
        ))}
      </div>
    );
  }
}

export default TaskList;
