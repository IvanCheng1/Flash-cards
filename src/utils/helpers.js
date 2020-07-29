import { decks } from "./data";

export function _getDecks() {
  // return new Promise((res, rej) => {
  //   setTimeout(() => res({ ...decks }), 1000);
  // });
  return decks;
}
