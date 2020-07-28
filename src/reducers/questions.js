import { ADD_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case ADD_QUESTION:
      console.log("ADD_QUESTION HERE", action);
      return {
        ...state,
        ...action.decks,
      };
    default:
      return state;
  }
}
