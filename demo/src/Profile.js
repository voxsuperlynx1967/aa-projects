//create context and share global information, users background color selection
//class component
import React from 'react';
import { ColorContext } from './ColorContext';

class Profile extends React.Component {
  constructor() {
    super();
    this.state = {
      color: '',
    }
  }

  updateColor = (e) => {
    this.setState({ color: e.target.value })
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log(this.props);
  }
  render() {
    return (
      <form>
        <input
        type="text"
        onChange={this.updateColor}
        value={this.state.color}
        placeholder="Type a color!"
        />
        <button onClick={this.handleClick}>Submit</button>
      </form>
    )
  }
};

const ProfileWithContext = () => {
  <ColorContext.Consumer>
  {value => <Profile updateColor = {value.updateColor}/>}
  </ColorContext.Consumer>
}

export default ProfileWithContext;
