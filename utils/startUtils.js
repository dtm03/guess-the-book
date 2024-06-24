import AsyncStorage from '@react-native-async-storage/async-storage';

export const handlePlay = async (stats, navigation) => {
    let newRoundsPlayed = stats.roundsPlayed + 1;
    stats.setRoundsPlayed(newRoundsPlayed);
    await AsyncStorage.setItem('roundsPlayed', newRoundsPlayed.toString());
    navigation.navigate('Game');
};

export const getPersistentStates = async (stats, route) => {
    let storedRoundsPlayed = await AsyncStorage.getItem('roundsPlayed');
    let storedHighScore = await AsyncStorage.getItem('highScore');
    let storedMoviesGuessed = await AsyncStorage.getItem('moviesGuessed');

    if (storedRoundsPlayed) {
        stats.setRoundsPlayed(parseInt(storedRoundsPlayed));
    }
    if (storedHighScore) {
        stats.setHighScore(parseInt(storedHighScore));
    }
    if (storedMoviesGuessed) {
        stats.setMoviesGuessed(parseInt(storedMoviesGuessed));
    }

    if (route.params?.moviesGuessed) {
        let newMoviesGuessed = stats.moviesGuessed + route.params.moviesGuessed;
        stats.setMoviesGuessed(newMoviesGuessed);
        await AsyncStorage.setItem('moviesGuessed', newMoviesGuessed.toString());
    }
    if (route.params?.score) {
        stats.setScore(route.params.score);
        if (route.params.score > stats.highScore) {
            stats.setHighScore(route.params.score);
            await AsyncStorage.setItem('highScore', route.params.score.toString());
        }
    }
};