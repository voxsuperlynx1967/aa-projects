import React from 'react';
// TODO: Import TodoContext

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue = '',
    }
  }

  handleInputChange = (e) => {
    this.setState({inputValue: this.inputValue})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    createTask(this.state.inputValue);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add a todo"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
      </form>
    );
  }
}

const TodoFormWithContext = () => (
  <TodoContext.Consumer>
  {value => <TodoForm createTask={value.createTask} />}
  </TodoContext.Consumer>
);

export default TodoFormWithContext;
