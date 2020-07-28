import { addCard } from "../utils/api";

export const ADD_QUESTION = "ADD_QUESTION";

function addQuestion(deckId, card) {
  return {
    type: ADD_QUESTION,
    deckId,
    card,
  };
}

export function handleAddQuestion(deckId, question, answer) {
  return (dispatch) => {
    const card = {};
    card["answer"] = answer;
    card["question"] = question;
    return addCard(deckId, card).then(() => {
      dispatch(addQuestion(deckId, card));
    });
  };
}
