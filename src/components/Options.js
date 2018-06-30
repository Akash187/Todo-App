import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <div>
      <button
        onClick={props.handleDeleteOptions}
      >Remove All
      </button>
      <p>Options component here</p>
      {props.options.map(option =>
        <Option
          handleDeleteOption={props.handleDeleteOption}
          key={option} option={option}/>
      )}
    </div>
  )
};

export default Options;