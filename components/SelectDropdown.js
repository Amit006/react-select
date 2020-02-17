import React, { useState } from 'react';

// import useForceUpdate from 'use-force-update';

const SelectDropdown = ({
              value,
              options = [],
              handleChange,
              selectedOption
              }) => {
// const forceUpdate = useForceUpdate();

// let selectedOption = options[0];
// let handleChange   = ({target}) => {
//     console.group(' -: handleChange :-  ');
//     console.log(' target: ', target.value);
//     let value = target.value;
//     selectedOption = _.findWhere(options, { value });
//     console.log(' selectedOption: ', selectedOption);
//      alert('I will re-render now.');
//     forceUpdate();
//     console.groupEnd();
// }


return (
  <div>
   <span>{selectedOption.value}</span>
   <select value={selectedOption.value} onChange={handleChange} >
        {options.map(({ value, label }, index) => <option
        key={index} value={value} >{label}</option>)}
        </select>
  </div>
);

};




export default SelectDropdown;