import React from 'react';

function Box (props){

        return(
            <>
            <div className="row w-100">
            <h3>BMI = {props.bmi}</h3>
        </div>
        <div className="row w-100">
             <h3> {props.bmiClass}</h3>
        </div>
        </>
        )
    
}

export default Box;