import { getDecks, addDeck, deleteDeck } from "../utils/api";

export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const CREATE_DECK = "CREATE_DECK";
export const REMOVE_DECK = "REMOVE_DECK";

function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

function createDeck(deckId, deckName) {
  return {
    type: CREATE_DECK,
    deckId,
    deckName,
  };
}

function removeDeck(deckId) {
  return {
    type: REMOVE_DECK,
    deckId,
  };
}

export function handleReceiveDecks() {
  return (dispatch) => {
    return getDecks().then((decks) => {
      dispatch(receiveDecks(decks));
    });
  };
}

export function handleAddDeck(deckName) {
  return (dispatch) => {
    const deckId = deckName.replace(/\s+/g, "");

    return addDeck(deckName, deckId).then(() => {
      dispatch(createDeck(deckId, deckName));
    });
  };
}

export function handleRemoveDeck(deckId) {
  return (dispatch) => {
    return deleteDeck(deckId).then(() => {
      dispatch(removeDeck(deckId));
    });
  };
}
