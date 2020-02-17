import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Select from './Component/Select'
import './style.css';


const options = [
  { value: 'flavor', label: 'flavor' },
  { value: 'yummy', label: 'yummy' },
  { value: 'red', label: 'red' },
  { value: 'green', label: 'green' },
  { value: 'yellow', label: 'yellow' },
];

class App extends Component {
  // state = {
  //   selectedOption: 'None',
  // }

  // handleChange = ({ target }) => {
  //   this.setState({
  //     selectedOption: target.value
  //   })
  // }

  render() {
    return (
      <div>
        <Select options={options} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
