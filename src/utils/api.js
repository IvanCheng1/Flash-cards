import { _getDecks } from "./helpers";

export function getDecks() {
  return _getDecks().then((decks) => decks);
  // return _getDecks()
}
