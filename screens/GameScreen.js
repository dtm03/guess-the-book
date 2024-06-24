import React, {useEffect} from 'react';
import {Text, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import GradientBackground from "../components/GradientBackground";
import GuessInput from "../components/GuessInput";
import styles from '../config/styles';
import {handleNewHint, takeGuess, resetGame} from '../utils/gameUtils';
import {useGameState} from '../hooks/useGameState';

export default function GameScreen() {

    const navigation = useNavigation();
    const isFocused = useIsFocused();
    const gameState = useGameState();
    const hints = ['The movie features Will Smith', 'The movie also features Margot Robbie'
        , 'The movie was released in 2015', 'The movie is about a group of thieves', 'The movie is set in Buenos Aires'];
    const solution = 'focus';

    useEffect(() => {
        if (isFocused) {
            resetGame(true, gameState);
        }
    }, [isFocused]);

    return (
        <KeyboardAvoidingView style={styles.gameScreenContainer}>
            <GradientBackground
                color1={gameState.isGuessCorrect === null ? "#134074" : gameState.isGuessCorrect ? "#C3D350" : "#C52233"}
                color2={gameState.isGuessCorrect === null ? "#7899D4" : gameState.isGuessCorrect ? "#52AA5E" : "#FF8833"}
            />
            <Text style={styles.score}>{gameState.score}</Text>
            <Text style={styles.remainingGuesses}>Remaining Guesses: {gameState.remainingNumberOfGuesses}</Text>
            <GuessInput guess={gameState.guess} setGuess={gameState.setGuess} takeGuess={() => takeGuess(gameState, solution, navigation)} />
            {hints.slice(0, gameState.hintIndex + 1).map((hint, index) => (
                <Text key={index} style={styles.hint}>{hint}</Text>
            ))}
            <TouchableOpacity style={styles.hintButton} onPress={() => handleNewHint(gameState.hintIndex, gameState.setHintIndex, hints)}>
                <Text style={styles.hintButtonText}>New Hint</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}