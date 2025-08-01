export const handlePlay = async (stats, navigate) => {
    let newRoundsPlayed = stats.roundsPlayed + 1;
    stats.setRoundsPlayed(newRoundsPlayed);
    localStorage.setItem('roundsPlayed', newRoundsPlayed.toString());
    navigate('/game');
};

export const getPersistentStates = async (stats, location) => {
    let storedRoundsPlayed = localStorage.getItem('roundsPlayed') || '0';
    let storedHighScore = localStorage.getItem('highScore') || '0';
    let storedMoviesGuessed = localStorage.getItem('moviesGuessed') || '0';

    stats.setRoundsPlayed(parseInt(storedRoundsPlayed));
    stats.setHighScore(parseInt(storedHighScore));
    stats.setMoviesGuessed(parseInt(storedMoviesGuessed));

    if (location.state?.moviesGuessed) {
        let newMoviesGuessed = stats.moviesGuessed + location.state.moviesGuessed;
        stats.setMoviesGuessed(newMoviesGuessed);
        localStorage.setItem('moviesGuessed', newMoviesGuessed.toString());
    }
    if (location.state?.score) {
        stats.setScore(location.state.score);
        if (location.state.score > stats.highScore) {
            stats.setHighScore(location.state.score);
            localStorage.setItem('highScore', location.state.score.toString());
        }
    }
};