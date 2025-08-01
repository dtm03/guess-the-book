import React from 'react';
import { StatRow, Stat, StatValue } from '../styles/GlobalStyles';

const StatsSection = ({ score, highScore, moviesGuessed, roundsPlayed }) => {
    return (
        <div>
            <StatRow>
                <Stat>Score</Stat>
                <StatValue>{score}</StatValue>
            </StatRow>
            <StatRow>
                <Stat>Highscore</Stat>
                <StatValue>{highScore}</StatValue>
            </StatRow>
            <StatRow>
                <Stat>Movies guessed</Stat>
                <StatValue>{moviesGuessed}</StatValue>
            </StatRow>
            <StatRow>
                <Stat>Rounds played</Stat>
                <StatValue>{roundsPlayed}</StatValue>
            </StatRow>
        </div>
    );
};

export default StatsSection;