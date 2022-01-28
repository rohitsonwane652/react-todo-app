import React,{useState} from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [todos,setTodos] = useState([])

    const addTodo = todo =>{
        if((!todo.text) || /^\s*$/.test(todo.text)){
            return ;
        }

        const newTodos = [todo,...todos]

        setTodos(newTodos)

        console.log(...todos)
    };

    const removeTodo = (id) =>{
        const removedArr = [...todos].filter(todo => todo.id !== id)

        setTodos(removedArr);
    };

    const updateTodo = (todoId,newValue) =>{
      if((!newValue.text) || /^\s*$/.test(newValue.text)){
        return ;
      } 

      setTodos( prev => prev.map(item => (item.id === todoId ? newValue : item)))
    }

    const completeTodo = id =>{
      let updatedTodo = todos.map(todo =>{
        if(todo.id === id){
          todo.isComplete = !todo.isComplete
        }
        return todo;
      });

      setTodos(updatedTodo)
    };

    return (
      <>
        <h1>What's Your Plan Today</h1>
        <TodoForm onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo} />
      </>
  );
}

export default TodoList;
