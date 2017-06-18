import assert from 'assert';
import {countAnswer} from './count-answer';

describe(`countAnswer`, () => {
  it(`counts long timed correct answer`, () => {
    const prevState = Object.freeze({
      lives: 3,
      questionsLeft: 10,
      points: 0,
      gameStatus: null
    });

    const nextState = countAnswer(prevState, {correct: true, time: 12000});

    assert.deepEqual(nextState, {
      lives: 3,
      questionsLeft: 9,
      points: 1,
      gameStatus: null
    });
  });

  it(`counts short timed correct answer`, () => {
    const prevState = Object.freeze({
      lives: 3,
      questionsLeft: 10,
      points: 0,
      gameStatus: null
    });

    const nextState = countAnswer(prevState, {correct: true, time: 2000});

    assert.deepEqual(nextState, {
      lives: 3,
      questionsLeft: 9,
      points: 2,
      gameStatus: null
    });
  });

  it(`counts incorrect answer`, () => {
    const prevState = Object.freeze({
      lives: 3,
      questionsLeft: 10,
      points: 0,
      gameStatus: null
    });

    const nextState = countAnswer(prevState, {correct: false, time: 2000});

    assert.deepEqual(nextState, {
      lives: 2,
      questionsLeft: 9,
      points: 0,
      gameStatus: null
    });
  });

  it(`fails game on incorrect answer with last life`, () => {
    const prevState = Object.freeze({
      lives: 1,
      questionsLeft: 10,
      points: 0,
      gameStatus: null
    });

    const nextState = countAnswer(prevState, {correct: false, time: 2000});

    assert.deepEqual(nextState, {
      lives: 0,
      questionsLeft: 9,
      points: 0,
      gameStatus: `fail`
    });
  });

  it(`wins game with last question left`, () => {
    const prevState = Object.freeze({
      lives: 3,
      questionsLeft: 1,
      points: 23,
      gameStatus: null
    });

    const nextState = countAnswer(prevState, {correct: true, time: 2000});

    assert.deepEqual(nextState, {
      lives: 3,
      questionsLeft: 0,
      points: 25,
      gameStatus: `success`
    });
  });

  it(`fails game on incorrect answer with last life and last question left`, () => {
    const prevState = Object.freeze({
      lives: 1,
      questionsLeft: 1,
      points: 23,
      gameStatus: null
    });

    const nextState = countAnswer(prevState, {correct: false, time: 2000});

    assert.deepEqual(nextState, {
      lives: 0,
      questionsLeft: 0,
      points: 23,
      gameStatus: `fail`
    });
  });
});
