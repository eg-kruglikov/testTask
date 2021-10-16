import { GET_USERS } from "../types/userTypes";

export const getUsers = () => async (dispatch, getState) => {
  const response = await fetch("http://localhost:3000/api/users", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const usersFromServer = await response.json();

  dispatch(putUsersToRedux(usersFromServer.collection));
};

const putUsersToRedux = (arr) => {
  return {
    type: GET_USERS,
    payload: arr,
  };
};
