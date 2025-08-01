import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import GradientBackground from "../components/GradientBackground";
import GuessInput from "../components/GuessInput";
import { handleNewHint, takeGuess, resetGame } from '../utils/gameUtils';
import { useGameState } from '../hooks/useGameState';
import { 
    Container, 
    Score, 
    RemainingGuesses, 
    Hint, 
    Button, 
    LoadingContainer, 
    LoadingSpinner 
} from '../styles/GlobalStyles';

export default function GameScreen() {
    const gameState = useGameState();
    const navigate = useNavigate();

    useEffect(() => {
        resetGame(true, gameState);
    }, []);

    if (!gameState.movieData) {
        return (
            <LoadingContainer>
                <GradientBackground color1="#134074" color2="#7899D4" />
                <LoadingSpinner />
            </LoadingContainer>
        );
    }

    return (
        <Container>
            <GradientBackground
                color1={gameState.isGuessCorrect === null ? "#134074" : gameState.isGuessCorrect ? "#C3D350" : "#C52233"}
                color2={gameState.isGuessCorrect === null ? "#7899D4" : gameState.isGuessCorrect ? "#52AA5E" : "#FF8833"}
            />
            <Score>{gameState.score}</Score>
            <RemainingGuesses>Remaining Guesses: {gameState.remainingNumberOfGuesses}</RemainingGuesses>
            <GuessInput 
                guess={gameState.guess} 
                setGuess={gameState.setGuess} 
                takeGuess={() => takeGuess(gameState, navigate)} 
            />
            {gameState.movieData.hints && gameState.movieData.hints.slice(0, gameState.hintIndex + 1).map((hint, index) => (
                <Hint key={index}>{hint}</Hint>
            ))}
            <Button 
                onClick={() => handleNewHint(gameState.hintIndex, gameState.setHintIndex, gameState.movieData.hints)}
            >
                New Hint
            </Button>
        </Container>
    );
}