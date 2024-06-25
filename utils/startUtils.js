import AsyncStorage from '@react-native-async-storage/async-storage';

export const handlePlay = async (stats, navigation) => {
    let newRoundsPlayed = stats.roundsPlayed + 1;
    stats.setRoundsPlayed(newRoundsPlayed);
    await AsyncStorage.setItem('roundsPlayed', newRoundsPlayed.toString());
    navigation.navigate('Game');
};

export const getPersistentStates = async (stats, route) => {
    let storedRoundsPlayed = await AsyncStorage.getItem('roundsPlayed') || '0';
    let storedHighScore = await AsyncStorage.getItem('highScore') || '0';
    let storedMoviesGuessed = await AsyncStorage.getItem('moviesGuessed') || '0';

    stats.setRoundsPlayed(parseInt(storedRoundsPlayed));
    stats.setHighScore(parseInt(storedHighScore));
    stats.setMoviesGuessed(parseInt(storedMoviesGuessed));

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