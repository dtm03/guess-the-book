import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    guessInput: {
        flex: 1,
        fontSize: 16,
        color: '#738296',
        fontFamily: 'Mulish',
    },
    guessButtonText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'MulishExtraBold'
    },
    guessInputContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#D5D0CD',
        paddingVertical: 5,
        paddingLeft: 24,
        paddingRight: 5,
        borderRadius: 40,
        backgroundColor: '#FFF',
        marginHorizontal: 12,
        marginTop: 40,
        marginBottom: 10,
    },
    gameScreenContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    score: {
        fontSize: 80,
        fontWeight: 'bold',
        marginTop: 80,
        color: '#D5D0CD',
        fontFamily: 'MulishExtraBold',
    },
    hint: {
        fontSize: 20,
        marginTop: 30,
        color: '#FFF',
        fontFamily: 'Mulish'
    },
    hintButton: {
        backgroundColor: '#7899D4',
        paddingVertical: 15,
        paddingHorizontal: 25,
        borderRadius: 40,
        marginTop: 40,
    },
    hintButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontFamily: 'MulishExtraBold'
    },
    remainingGuesses: {
        marginTop: 20,
        fontSize: 16,
        color: '#D5D0CD',
        fontFamily: 'Mulish'
    },
    guessButton: {
        backgroundColor: '#7899D4',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 30,
    },
    startScreenContainer: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    statRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: 10,
    },
    stat: {
        fontSize: 20,
        color: "#FFF",
        fontFamily: 'MulishSemiBold',
    },
    statValue: {
        fontSize: 20,
        color: "#FFF",
        fontFamily: 'MulishSemiBold',
    },
    playButton: {
        backgroundColor: '#8D7C81',
        paddingVertical: 10,
        paddingHorizontal: 50,
        borderRadius: 50,
    },
    playButtonText: {
        color: '#FFF',
        fontSize: 34,
        fontFamily: 'MulishExtraBold',
    },
    image: {
        width: 300,
        height: 300,
        borderRadius: 150,
    },
});

export default styles;