import React from 'react';

function Button (props) {
  
        return(
            <div onClick={props.onClick} className=" btn btn-dark w-75">
            {props.label}
        </div>
        )
    
}

export default Button;