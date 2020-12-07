import React from 'react'
import { Button, StyleSheet, Text, View, Image } from 'react-native'
import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'

const GameOverScreen = (props) => {
    return (
        <View style={styles.screen}>
            <TitleText>Game Over!</TitleText>
            <View style={styles.imageCont}>
                <Image style={styles.image} resizeMode='cover' source={require('../assets/success.png')}/>
            </View>
            <BodyText>Number of Rounds: {props.roundsNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
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
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageCont:{
        height: 300,
        width: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 30
    }
})
