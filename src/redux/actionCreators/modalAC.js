import { CLOSE_MODEL, CONF, NEW, OPEN_MODEL, SAVE } from "../types/modalTypes";

export const openModelSave = (user) => {
  return {
    type: OPEN_MODEL,
    payload: { ...user, type: SAVE },
  };
};

export const closeModal = () => {
  return {
    type: CLOSE_MODEL,
  };
};

export const openModelNew = (user) => {
  return {
    type: OPEN_MODEL,
    payload: { ...user, type: NEW },
  };
};

export const confModal = (id) => {
  return {
    type: CONF,
    payload: id,
  };
};
