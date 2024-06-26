import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import styles from '../config/styles';
import GradientBackground from "../components/GradientBackground";
import StatsSection from "../components/StatsSection";
import {handlePlay, getPersistentStates} from '../utils/startUtils';
import { useStats } from '../hooks/useStats';

export default function StartScreen({route}) {
    const navigation = useNavigation();
    const stats = useStats();
    const isFocused = useIsFocused();

    useEffect(() => {
        if (isFocused) {
            getPersistentStates(stats, route);
        }
    }, [route.params, isFocused]);

    return (
        <View style={styles.startScreenContainer}>
            <GradientBackground color1="#8D7C81" color2="#E3DEE0"/>
            <Image source={require('../assets/sherlockHolmesBnWCloseUp.png')} style={styles.image} />
            <StatsSection score={stats.score} highScore={stats.highScore} moviesGuessed={stats.moviesGuessed} roundsPlayed={stats.roundsPlayed}/>
            <TouchableOpacity style={styles.playButton} onPress={() => handlePlay(stats, navigation)}>
                <Text style={styles.playButtonText}>Play</Text>
            </TouchableOpacity>
        </View>
    );
}