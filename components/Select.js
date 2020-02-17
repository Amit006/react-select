import React from 'react';
import _ from "underscore";

const Select = ({
              value,
              options = []
              }) => {

let selectedOption  = options[0];
handleChange  = ({target}) => {
    console.group(' -: handleChange :-  ');
    console.log(' target: ', target);
    let value = "";
    selectedOption = _.findWhere(options, { value })
    console.groupEnd();
}

return (
   <span>{selectedOption}</span>
   <select value={selectedOption} onChange={handleChange} >
        {options.map(({ value, label }, index) => <option value={value} >{label}</option>)}
        </select>
);

};




export default Select;