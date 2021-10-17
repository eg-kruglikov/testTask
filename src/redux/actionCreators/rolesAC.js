import { GET_ROLES } from "../types/rolesTypes";

export const  getRoles  = () => async (dispatch, getState) =>{
  try {
    const response = await fetch("http://localhost:3000/api/roles", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const roles = await response.json();

    dispatch(putRolesToRedux(roles))
 
  } catch (error) {
    alert(error);
  }
};

const putRolesToRedux = (roles) => {
  return {
    type: GET_ROLES,
    payload: roles,
  };
};
