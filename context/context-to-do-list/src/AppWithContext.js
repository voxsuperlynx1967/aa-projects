// ./src/AppWithContext.js

import React from 'react';
import TodoContext from './TodoContext';

class AppWithContext extends React.Component {
  constructor() {
    super();
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    this.state = {
      createTask: this.createTask,
      deleteTask: this.deleteTask,
      task: '' || storedTasks,
    }
  }

  createTask = (task) => {
    const nextTaskId = new Date().getTime();
    const newTask = {
      [nextTaskId]: {
        id: nextTaskId,
        message: task,
      },
    };
    this.setState((state, props) => ({
      tasks: { ...state.tasks, ...newTask },
    }), () => this.updateLocalStorageTasks());
    // TODO: Use the built-in Date `getTime` method to generate the `nextTaskId` for the `newTask`
    // TODO: Generate a `newTask` object, structured with proper "state shape"
    // TODO: Update the `tasks` state
    // TODO: Invoke the `updateLocalStorageTasks` method
  }

  deleteTask = (id) => {
    this.setState((state, props) => {
      const tasksWithDeletion = { ...state.tasks };
      delete tasksWithDeletion[id];
      return {
        tasks: tasksWithDeletion,
      };
    }, () => this.updateLocalStorageTasks());
    // TODO: Delete the task based on the task `id`
    // TODO: Update the `tasks` state
    // TODO: Invoke the `updateLocalStorageTasks` method
  }

  updateLocalStorageTasks = () => {
    console.log(this.state.tasks);
    const jsonTasks = JSON.stringify(this.state.tasks);
    localStorage.setItem('tasks', jsonTasks);
  }

  render() {
    return (
      <TodoContext value={this.state}>
        <App {...this.props}/>
      </TodoContext>
    );
  }
}

export default AppWithContext;
