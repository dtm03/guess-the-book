import { useState, useEffect } from "react";

export const useGameState = () => {
  const [score, setScore] = useState(0);
  const [remainingNumberOfGuesses, setRemainingNumberOfGuesses] = useState(3);
  const [isGuessCorrect, setIsGuessCorrect] = useState(null);
  const [guess, setGuess] = useState("");
  const [hintIndex, setHintIndex] = useState(0);
  const [movieData, setMovieData] = useState(null);
  
  // Persistent stats
  const [roundsPlayed, setRoundsPlayed] = useState(0);
  const [moviesGuessed, setMoviesGuessed] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Load stats from localStorage on mount
  useEffect(() => {
    // Rounds played resets on app restart, so we start at 0
    const savedMoviesGuessed = localStorage.getItem('moviesGuessed');
    const savedHighScore = localStorage.getItem('highScore');

    if (savedMoviesGuessed) setMoviesGuessed(parseInt(savedMoviesGuessed));
    if (savedHighScore) setHighScore(parseInt(savedHighScore));
    
    // Always start rounds at 0 on app restart
    setRoundsPlayed(0);
  }, []);

  // Save stats to localStorage when they change
  const updateRoundsPlayed = (newRounds) => {
    setRoundsPlayed(newRounds);
    localStorage.setItem('roundsPlayed', newRounds.toString());
  };

  const updateMoviesGuessed = (newMoviesGuessed) => {
    setMoviesGuessed(newMoviesGuessed);
    localStorage.setItem('moviesGuessed', newMoviesGuessed.toString());
  };

  const updateHighScore = (newHighScore) => {
    setHighScore(newHighScore);
    localStorage.setItem('highScore', newHighScore.toString());
  };

  return {
    score,
    setScore,
    remainingNumberOfGuesses,
    setRemainingNumberOfGuesses,
    isGuessCorrect,
    setIsGuessCorrect,
    guess,
    setGuess,
    hintIndex,
    setHintIndex,
    movieData,
    setMovieData,
    roundsPlayed,
    moviesGuessed,
    highScore,
    updateRoundsPlayed,
    updateMoviesGuessed,
    updateHighScore,
  };
};