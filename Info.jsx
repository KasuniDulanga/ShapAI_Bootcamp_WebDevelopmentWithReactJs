import React from 'react';

function Info(props){
    
    return(
        <div className= 'note'>
            <h1 >{props.coursename}</h1>
            <p>{props.discr}</p>

        </div>


      
    )

}
export default Info;

