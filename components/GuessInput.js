import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import styles from '../config/styles';

const GuessInput = ({ guess, setGuess, takeGuess }) => {
    return (
        <View style={styles.guessInputContainer}>
            <TextInput
                style={styles.guessInput}
                placeholder="Enter your guess here"
                placeholderTextColor="#D5D0CD"
                onChangeText={(text) => setGuess(text)}
                value={guess}
            />
            <TouchableOpacity style={styles.guessButton} onPress={() => takeGuess(guess)}>
                <Text style={styles.guessButtonText}>Guess</Text>
            </TouchableOpacity>
        </View>
    );
};

export default GuessInput;