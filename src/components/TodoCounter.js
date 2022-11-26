import React from "react";
import "../styles/TodoCounter.css"

function TodoCounter({total, completed}){
    return(
        <h2 className="titulo">Has completado {completed} de {total}  tareas</h2>
    )
}
export { TodoCounter };