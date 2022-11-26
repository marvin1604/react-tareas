import React from "react";
import {TodoCounter} from "./components/TodoCounter";
import {TodoSearch} from "./components/TodoSearch";
import {TodoList} from "./components/TodoList";
import {TodoItem} from "./components/TodoItem";
import {CreateTodoButtom} from "./components/CreateTodoButton";

const defaultTodos = [
  {text: "cortar cebolla", completed :true},
  {text: "tomar el curso de react", completed :true},
  {text: "tomar el curso de tyscript", completed :false},
  {text: "ver entrevistas de reactjs", completed :false},
]

function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchTodos = [];

  if(!searchValue.length >= 1){
    searchTodos = todos;
  }else{
    searchTodos = todos.filter( todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    })
    
  }

  return (
    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue = {setSearchValue}
      />
      <TodoList>
        {searchTodos.map( todo =>(
          <TodoItem key={todo.text} text={todo.text}/>
        ))}
        <CreateTodoButtom/>
      </TodoList>
    </React.Fragment>
  );
}

export default App;
