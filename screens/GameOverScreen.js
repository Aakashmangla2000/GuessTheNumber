import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Game Over!</Text>
            <Text>Number of Rounds: {props.roundsNumber}</Text>
            <Text>Number was: {props.userNumber}</Text>
            <Button title="NEW GAME" onPress={props.restart} />
        </View>
    )
}

export default GameOverScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
