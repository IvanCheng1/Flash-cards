import { RECEIVE_DECKS, CREATE_DECK, REMOVE_DECK } from "../actions/decks";
import { ADD_QUESTION } from "../actions/questions";

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      // console.log(RECEIVE_DECKS, action);
      return {
        ...state,
        ...action.decks,
      };
    case CREATE_DECK:
      // console.log(CREATE_DECK, action, state);
      return {
        ...state,
        [action.deckId]: {
          title: [action.deckName],
          questions: [],
        },
      };
    case REMOVE_DECK:
      // console.log(REMOVE_DECK, action);
      delete state[action.deckId];
      return {
        ...state,
      };
    case ADD_QUESTION:
      // console.log(ADD_QUESTION, state[action.deckId]);
      return {
        ...state,
        [action.deckId]: {
          ...state[action.deckId],
          questions: [...state[action.deckId].questions, action.card],
        },
      };
    default:
      return state;
  }
}
