import React from "react";



const Button = ({id,handleClick}) => {
    
    const className = `button button-${id}`
    const btnId = `btn-${id}`;

    return (
        <button className={className} id={ btnId} onClick={()=>handleClick(id)}>{id}</button>
    )
}

export default Button;