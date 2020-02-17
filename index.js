import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import SelectDropdown from './components/SelectDropdown.js'
import './style.css';
import _ from "underscore";


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

  // handleChange = ({ target }) => {
  //   this.setState({
  //     selectedOption: target.value
  //   })
  // }


  handleChange = ({target}) => {
    console.group(' -: handleChange :-  ');
    console.log(' target: ', target.value);
    let value = target.value;
    let selectedOp = _.findWhere(options, { value });
    this.setState({
      selectedOption: selectedOp
    })
    console.log(' selectedOption: ', this.state.selectedOption);
     alert('I will re-render now.');
    console.groupEnd();
}

display = () => console.log(' handleChange: ', this.handleChange)


  render() {
    return (
      <div>
         { console.log(this.display()) }
        <SelectDropdown value={this.state.selectedOption.value} options={...options} handleChange={this.handleChange}  selectedOption={this.state.selectedOption} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
