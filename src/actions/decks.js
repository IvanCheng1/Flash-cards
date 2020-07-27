import { getDecks } from "../utils/api";

export const RECEIVE_DECKS = "RECEIVE_DECKS";

function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

export function handleReceiveDecks() {
  return (dispatch) => {
    return getDecks().then((decks) => {
      dispatch(receiveDecks(decks));
    });
    // return dispatch(receiveDecks(getDecks()))
  };
}
