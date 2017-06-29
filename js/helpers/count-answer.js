export const countAnswer = (prevState, answerData) => {
  const currentState = Object.assign({}, prevState);

  currentState.questionsLeft--;

  if (answerData.correct === true) {
    currentState.correctAnswers++;
    if (answerData.time > 10) {
      currentState.points++;
    } else {
      currentState.points += 2;
    }
  } else {
    currentState.lives--;
  }

  if (currentState.lives === 0) {
    currentState.gameStatus = `fail`;
  } else if (currentState.questionsLeft === 0) {
    currentState.gameStatus = `success`;
  }

  return currentState;
};
