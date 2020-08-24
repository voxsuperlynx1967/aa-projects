import React from 'react';
import Home from './Home'
import { ColorContext } from './ColorContext';

const App = ({ color }) => {
  return (
    <div id="app" style={{backgroundColor: `${color}`}}>
      <Home />
    </div>
  );
};

class AppWithContext extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'white',
      updateColor: this.updateColor,
    }
  }

  updateColor = (color) => {
    this.setState({ color });
  }
  render() {
    return (
      <ColorContext.Provider value={this.state}>

        <App color={this.state.color}/>
      </ColorContext.Provider>
    )
  }
}
//the value in color context.provider overrides thing in color context file

export default AppWithContext;
