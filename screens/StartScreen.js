import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from '../config/styles';
import GradientBackground from "../components/GradientBackground";
import StatsSection from "../components/StatsSection";
import {handlePlay, getPersistentStates} from '../utils/startUtils';
import { useStats } from '../hooks/useStats';

export default function StartScreen({route}) {
    const navigation = useNavigation();
    const stats = useStats();

    useEffect(() => {
        getPersistentStates(stats, route);
    }, [route.params]);

    return (
        <View style={styles.startScreenContainer}>
            <GradientBackground color1="#8D7C81" color2="#E3DEE0"/>
            <TouchableOpacity style={styles.playButton} onPress={() => handlePlay(stats, navigation)}>
                <Text style={styles.playButtonText}>Play</Text>
            </TouchableOpacity>
            <StatsSection score={stats.score} highScore={stats.highScore} moviesGuessed={stats.moviesGuessed} roundsPlayed={stats.roundsPlayed}/>
        </View>
    );
}