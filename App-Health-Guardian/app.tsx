import React from 'react';
import { StatusBar } from 'expo-status-bar';
import WelcomeScreen from './src/app/welcome';  

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <WelcomeScreen />
      
    </>
  );
}
