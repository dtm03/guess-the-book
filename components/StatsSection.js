import React from 'react';
import { View, Text } from 'react-native';
import styles from '../config/styles';

const StatsSection = ({ score, highScore, moviesGuessed, roundsPlayed }) => {
    return (
        <View>
            <View style={styles.statRow}>
                <Text style={styles.stat}>Score</Text>
                <Text style={styles.statValue}>{score}</Text>
            </View>
            <View style={styles.statRow}>
                <Text style={styles.stat}>Highscore</Text>
                <Text style={styles.statValue}>{highScore}</Text>
            </View>
            <View style={styles.statRow}>
                <Text style={styles.stat}>Movies guessed</Text>
                <Text style={styles.statValue}>{moviesGuessed}</Text>
            </View>
            <View style={styles.statRow}>
                <Text style={styles.stat}>Rounds played</Text>
                <Text style={styles.statValue}>{roundsPlayed}</Text>
            </View>
        </View>
    );
};

export default StatsSection;