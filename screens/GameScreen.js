import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, KeyboardAvoidingView, ActivityIndicator } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import GradientBackground from "../components/GradientBackground";
import GuessInput from "../components/GuessInput";
import styles from '../config/styles';
import { handleNewHint, takeGuess, resetGame } from '../utils/gameUtils';
import { useGameState } from '../hooks/useGameState';

export default function GameScreen() {
    const gameState = useGameState();
    const isFocused = useIsFocused();
    const navigation = useNavigation();

    useEffect(() => {
        if (isFocused) {
            resetGame(true, gameState);
        }
    }, [isFocused]);

    if (!gameState.movieData) {
        return (
            <KeyboardAvoidingView style={styles.loadingScreenContainer}>
                <GradientBackground color1="#134074" color2="#7899D4" />
                <ActivityIndicator size="extra-large" color="#fff" />
            </KeyboardAvoidingView>
        );
    }

    return (
        <KeyboardAvoidingView style={styles.gameScreenContainer}>
            <GradientBackground
                color1={gameState.isGuessCorrect === null ? "#134074" : gameState.isGuessCorrect ? "#C3D350" : "#C52233"}
                color2={gameState.isGuessCorrect === null ? "#7899D4" : gameState.isGuessCorrect ? "#52AA5E" : "#FF8833"}
            />
            <Text style={styles.score}>{gameState.score}</Text>
            <Text style={styles.remainingGuesses}>Remaining Guesses: {gameState.remainingNumberOfGuesses}</Text>
            <GuessInput guess={gameState.guess} setGuess={gameState.setGuess} takeGuess={() => takeGuess(gameState, navigation)} />
            {hints.slice(0, gameState.hintIndex + 1).map((hint, index) => (
                <Text key={index} style={styles.hint}>{hint}</Text>
            ))}
            <TouchableOpacity style={styles.hintButton} onPress={() => handleNewHint(gameState.hintIndex, gameState.setHintIndex, gameState.movieData.movie)}>
                <Text style={styles.hintButtonText}>New Hint</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    );
}