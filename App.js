import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import GameOverScreen from './screens/GameOverScreen';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf')
  });
}

export default function App() {
  const [userNumber, setUserNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)
  const [dataLoaded, setDataLoaded] = useState(false)

  if(!dataLoaded){
    console.log('return')
    return(
      <AppLoading
        startAsync={fetchFonts}
        onFinish = {() => setDataLoaded(true)}
        onError = {(err) => console.log(err)}
      />
    );
  };

  const startGameHandler = (selectedNumber) => {
    setUserNumber(selectedNumber)
    setGuessRounds(0)
  }

  const newGameHandler = () => {
    setGuessRounds(0)
    setUserNumber(null)
  }

  const gameOverHandler = (num) => {
    setGuessRounds(num)
  }

  let content = <StartGameScreen onStartGame = {startGameHandler}/>

  if (userNumber && guessRounds <= 0){
    content = <GameScreen userChoice={userNumber} onGameOver ={gameOverHandler}/>
  }
  else if (guessRounds > 0){
    content = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} restart ={newGameHandler}/>
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});
