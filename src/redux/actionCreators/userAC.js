import { CHANGE_USER, GET_USERS } from "../types/userTypes";
import { closeModal } from "./modalAC";

export const getUsers = () => async (dispatch, getState) => {
  try {
    const response = await fetch("http://localhost:3000/api/users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const usersFromServer = await response.json();
    console.log(usersFromServer);

    dispatch(putUsersToRedux(usersFromServer));
  } catch (error) {
    alert(error);
  }
};

const putUsersToRedux = (obj) => {
  return {
    type: GET_USERS,
    payload: obj,
  };
};

export const changeUser = (user) => async (dispatch, getState) =>  {

  try {
    await fetch(`http://localhost:3000/api/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    dispatch(getUsers());
    dispatch(closeModal())
  } catch (error) {
    alert(error);
  }

};

export const newUser  = (user) => async (dispatch, getState) =>  {
  try {
    const response = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const usersFromServer = await response.json();
    console.log(usersFromServer);
    dispatch(getUsers());
    dispatch(closeModal())
  } catch (error) {
    alert(error);
  }
}

export const deleteUser = (id) => async (dispatch, getState) => {
  
  try {
    await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    });
    dispatch(getUsers());
  } catch (error) {
    alert(error);
  }
}
