import React from "react";



const Button = ({id,handleClick}) => {
    
    const className = `button button-${id}`
    if (id == "/") {
       const  btnId = "btn-div";
    } else if (id == "="){
        const btnId = "equal";
    } else if (id=="+") {
       const  btnId = "plus"
    }else{
        const btnId = `btn-${id}`;
    }
   

    return (
        <button className={className} id={ btnId} onClick={()=>handleClick(id)}>{id}</button>
    )
}

export default Button;