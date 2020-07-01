import { FETCH_CAPSULES  } from "./actionTypes";

export const setMessage = (message) => {
  return {
    type: "SET_MESSAGE",
    payload: message
  }
}