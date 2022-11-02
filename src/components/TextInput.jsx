import React, { useState } from "react";

function TextInput (props) {

const [value,setValue] =useState(0);


 const handleChange = (event) => {
    let inputValue = event.target.value;
    setValue( inputValue );
    props.onChange(event.target.value);
  };

  
    return (
      <div className="inputF d-flex flex-column m-4">
        <label className="text-center">{props.label}</label>
        <input
          type="text"
          className="my-4"
          placeholder={props.placeholder}
          value={value}
          onChange={handleChange}
        />
      </div>
    );
  
}

export default TextInput;