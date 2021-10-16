import { ADD_TODO, CHANGE_STATUS, DELETE_TODO } from "../types/todosTypes"


export const addTodo = (text) => async (dispatch, getState) => {


  const {todos: {length: todosLength}} = getState()
  console.log({todosLength})


  if (todosLength < 5) {
    const response = await fetch('http://localhost:3000/api/v1/todos',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({text})
    })
    const newTodoFromServer = await response.json() 

    dispatch(addTodoFromServer(newTodoFromServer))
  }
}

export const addTodoFromServer = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo
  }
}

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    payload: id
  }
}

export const changeStatus = (id) => {
  return {
    type: CHANGE_STATUS,
    payload: id
  }
}