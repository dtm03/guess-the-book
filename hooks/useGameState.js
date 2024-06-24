import { useState } from 'react';

export const useGameState = () => {
    const [remainingNumberOfGuesses, setRemainingNumberOfGuesses] = useState(3);
    const [score, setScore] = useState(0);
    const [moviesGuessed, setMoviesGuessed] = useState(0);
    const [guess, setGuess] = useState('');
    const [isGuessCorrect, setIsGuessCorrect] = useState(null);
    const [hintIndex, setHintIndex] = useState(0);

    return {
        remainingNumberOfGuesses,
        setRemainingNumberOfGuesses,
        score,
        setScore,
        moviesGuessed,
        setMoviesGuessed,
        guess,
        setGuess,
        isGuessCorrect,
        setIsGuessCorrect,
        hintIndex,
        setHintIndex
    };
};