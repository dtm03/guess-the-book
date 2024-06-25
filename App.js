import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GameScreen from './screens/GameScreen';
import StartScreen from './screens/StartScreen';
import { useFonts, Mulish_400Regular, Mulish_600SemiBold, Mulish_700Bold, Mulish_800ExtraBold } from '@expo-google-fonts/mulish';
// import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

// Fix stat updates and write tests
// Create a logo for the app using stability.ai
// Implement API calls to fetch movie data

// const resetAsyncStorage = async () => {
//     try {
//         await AsyncStorage.clear();
//     } catch(e) {
//         console.log(e);
//     }
//
//     console.log('Done.');
// }

export default function App() {
    let [fontsLoaded] = useFonts({
        Mulish: Mulish_400Regular,
        MulishSemiBold: Mulish_600SemiBold,
        MulishBold: Mulish_700Bold,
        MulishExtraBold: Mulish_800ExtraBold
    });

    if (!fontsLoaded) {
        return null;
    }

    // resetAsyncStorage();

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Start"
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name="Game" component={GameScreen} />
                <Stack.Screen name="Start" component={StartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}