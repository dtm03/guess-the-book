import { Keyboard } from 'react-native';

export const handleNewHint = (hintIndex, setHintIndex, hints) => {
    if (hintIndex < hints.length - 1) {
        setHintIndex(hintIndex + 1);
    }
};

export const takeGuess = (gameState, solution, navigation) => {
    Keyboard.dismiss();
    let guess = gameState.guess.replace(/[^a-zA-Z0-9]+/g, "").toLowerCase();
    if (guess === solution) {
        gameState.setIsGuessCorrect(true);
        gameState.setScore(gameState.score + 30 - (gameState.hintIndex + 1) * 5);
        gameState.setMoviesGuessed(gameState.moviesGuessed + 1);
        setTimeout(() => {
            resetGame(false, gameState);
        }, 1000);
        return true;
    } else {
        gameState.setIsGuessCorrect(false);
        if (gameState.remainingNumberOfGuesses > 0) {
            gameState.setRemainingNumberOfGuesses(gameState.remainingNumberOfGuesses - 1);
        }
        setTimeout(() => {
            gameState.setIsGuessCorrect(null);
            if (gameState.remainingNumberOfGuesses <= 1) {
                navigation.navigate('Start', { score: gameState.score, moviesGuessed: gameState.moviesGuessed });
            }
        }, 300);
        return false;
    }
};

export const resetGame = (resetScore, gameState) => {
    if (resetScore) {
        gameState.setScore(0);
    }
    gameState.setHintIndex(0);
    gameState.setIsGuessCorrect(null);
    gameState.setGuess('');
    gameState.setRemainingNumberOfGuesses(3);
};