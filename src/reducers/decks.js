import { RECEIVE_DECKS } from "../actions/decks";

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      console.log(RECEIVE_DECKS, action);
      return {
        ...state,
        ...action.decks,
      };
    default:
      return state;
  }
}
