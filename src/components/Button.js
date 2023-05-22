import React from "react";



const Button = ({id,handleClick}) => {
    
    const className = `button button-${id}`

    return (
        <button className={className} onClick={()=>handleClick(id)}>{id}</button>
    )
}

export default Button;