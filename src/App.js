import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GameScreen from './screens/GameScreen';
import StartScreen from './screens/StartScreen';
import './App.css';

export default function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<StartScreen />} />
                    <Route path="/game" element={<GameScreen />} />
                </Routes>
            </div>
        </Router>
    );
}