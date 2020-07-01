import { FETCH_LAUNCHPAD_DETAILS } from "./actionTypes";

export const getLaunchPadById = (id) => {
  return {
    type: FETCH_LAUNCHPAD_DETAILS,
    payload: id
  };
};
