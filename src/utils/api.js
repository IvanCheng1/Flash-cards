import { _getDecks } from "./helpers";
import { AsyncStorage } from "react-native";

const DECKS_STORAGE_KEY = "DECKS_STORAGE_KEY";

export const getDecks = async () => {
  try {
    // const decks = _getDecks();
    // await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));

    const localStorage = await AsyncStorage.getItem(DECKS_STORAGE_KEY);

    if (localStorage) {
      console.log(JSON.parse(localStorage));

      return JSON.parse(localStorage);
    } else {
      const decks = _getDecks();
      await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
      return decks;
    }
  } catch (e) {
    console.log(e);
  }
};

export const addDeck = async (deckName, deckId) => {
  try {
    const item = JSON.stringify({
      [deckId]: {
        title: deckName,
        questions: [],
      },
    });

    await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, item);
  } catch (e) {
    console.log(e);
  }
};

export const deleteDeck = async (deckId) => {
  try {
    const localStorage = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
    const decks = JSON.parse(localStorage);

    delete decks[deckId];
    await AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(decks));
  } catch (e) {
    console.log(e);
  }
};

export const addCard = async (deckId, card) => {
  const localStorage = await AsyncStorage.getItem(DECKS_STORAGE_KEY);
  const decks = JSON.parse(localStorage);
  // console.log(card)

  const item = JSON.stringify({
    [deckId]: {
      questions: [...decks[deckId].questions].concat(card),
    },
  });

  await AsyncStorage.mergeItem(DECKS_STORAGE_KEY, item);

}
