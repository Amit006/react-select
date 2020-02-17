import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


const options = [
  { value: 'flavor', label: 'flavor' },
  { value: 'yummy', label: 'yummy' },
  { value: 'red', label: 'red' },
  { value: 'green', label: 'green' },
  { value: 'yellow', label: 'yellow' },
];

class App extends Component {
  state = {
    selectedOption: 'None',
  }

  handleChange = ({ target }) => {
    this.setState({
      selectedOption: target.value
    })
  }

  render() {
    return (
      <div>
        <span>{this.state.selectedOption}</span>
        <select
          value={this.state.selectedOption}
          onChange={this.handleChange}
          >
        {options.map(({ value, label }, index) => <option value={value} >{label}</option>)}
        </select>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
