import React, {useState} from 'react'
import { Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import Card from '../components/Card'
import Input from '../components/Input'

const StartGameScreen = (props) => {

    const [enteredValue, setEnteredValue] = useState('')

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g),'')
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card style={styles.inputCont}>
                    <Text>Select a Number</Text>
                    <Input 
                        style={styles.input} 
                        blurOnSubmit 
                        autoCapitalize='none' 
                        autoCorrect={false} 
                        keyboardType='number-pad' 
                        maxLength={2}
                        onChangeText = {numberInputHandler}
                        value = {enteredValue}
                    />
                    <View style={styles.buttonCont}>
                    <View style={styles.button}><Button title="Reset" onPress = {() => {}} color='red'/></View>
                    <View style={styles.button}><Button title="Confirm" onPress = {() => {}} color='lime'/></View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    screen:{
        flex: 1,
        padding: 10,
        alignItems: 'center',
    },
    title:{
        fontSize: 20,
        marginVertical: 10,
    },
    inputCont:{
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonCont:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    button: {
        width: 100,
    },
    input: {
        width: 50,
        textAlign: 'center'
    }
})
