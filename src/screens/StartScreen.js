import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import GradientBackground from "../components/GradientBackground";
import StatsSection from "../components/StatsSection";
import { handlePlay, getPersistentStates } from '../utils/startUtils';
import { useStats } from '../hooks/useStats';
import { StartScreenContainer, Button, Image } from '../styles/GlobalStyles';
import sherlockImage from '../assets/sherlockHolmesBnWCloseUp.png';

export default function StartScreen() {
    const navigate = useNavigate();
    const location = useLocation();
    const stats = useStats();

    useEffect(() => {
        getPersistentStates(stats, location);
    }, [location.state]);

    return (
        <StartScreenContainer>
            <GradientBackground color1="#8D7C81" color2="#E3DEE0"/>
            <Image src={sherlockImage} alt="Sherlock Holmes" />
            <StatsSection 
                score={stats.score} 
                highScore={stats.highScore} 
                moviesGuessed={stats.moviesGuessed} 
                roundsPlayed={stats.roundsPlayed}
            />
            <Button 
                bgColor="#8D7C81"
                padding="10px 50px"
                borderRadius="50px"
                fontSize="34px"
                onClick={() => handlePlay(stats, navigate)}
            >
                Play
            </Button>
        </StartScreenContainer>
    );
}