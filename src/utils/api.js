import { _getDecks } from "./helpers";
import {AsyncStorage} from 'react-native'

export const DECKS_STORAGE_KEY = "DECKS_STORAGE_KEY"

export function getDecks() {
  return _getDecks().then((decks) => decks);
  // return _getDecks()
}
