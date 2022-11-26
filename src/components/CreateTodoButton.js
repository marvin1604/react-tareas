import React from "react";
import "../styles/CreateTodoButton.css"

function CreateTodoButtom(props){
    const onClickButton= (msg) => {
        alert(msg);
    };
    return(
        <button 
            className="CreateTodoButton"
            onClick={() =>{onClickButton("Aqui se deberia abrir el modal")
            }}
            >
                +
            </button>
    );
}

export { CreateTodoButtom};