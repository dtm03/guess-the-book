import { useState } from 'react';

export const useStats = () => {
    const [roundsPlayed, setRoundsPlayed] = useState(0);
    const [moviesGuessed, setMoviesGuessed] = useState(0);
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);

    return {
        roundsPlayed,
        setRoundsPlayed,
        moviesGuessed,
        setMoviesGuessed,
        score,
        setScore,
        highScore,
        setHighScore
    };
};