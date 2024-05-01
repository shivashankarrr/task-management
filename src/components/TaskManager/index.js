import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskList from '../TaskList';
import './TaskManager.css'


const initialTaskList = [
  { id: uuidv4(), title: 'HTML', completed: false },
  { id: uuidv4(), title: 'CSS', completed: false },
  { id: uuidv4(), title: 'JAVASCRIPT', completed: false }
];


class TaskManager extends Component {

  state = {
    tasks: initialTaskList,TaskInput:"",errorMsg:""
  };


  onChangeTaskInput = event => {
    this.setState({ TaskInput: event.target.value });
  };

  onSubmitForm = event =>{
      event.preventDefault()
      const {TaskInput} = this.state
      if (TaskInput.trim() === '') {
      this.setState({ errorMsg: '*Please enter a task title' });
      return;
      }
      const newTask = {
        id : uuidv4(),
        title: TaskInput,
        completed:false
      }
      this.setState(prevState => ({
        tasks: [...prevState.tasks, newTask],
        TaskInput: '',
        errorMsg:''
      }));
  }
  

  toggleComplete = (taskId) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.map(task => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      })
    }));
  };

  deleteTask = (taskId) => {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(task => task.id !== taskId)
    }));
  };

  render() {
    const { tasks ,TaskInput,errorMsg} = this.state;

    return (
      <div className="bg-container">
        <h1 className='main-heading'>Task Manager</h1>
        <form onSubmit={this.onSubmitForm}>
          <input type = 'text'
          value={TaskInput}
          className='input-item'
          placeholder='Enter new Task'
          onChange={this.onChangeTaskInput}/>
          <button type="submit" className='add-button'>Add</button>
          {errorMsg && <p className='error-msg'>{errorMsg}</p>}
        </form>
        
        <TaskList
          tasks={tasks}
          toggleComplete={this.toggleComplete}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default TaskManager;
