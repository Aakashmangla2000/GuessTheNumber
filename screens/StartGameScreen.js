import React, {useState} from 'react'
import { Alert, Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native'
import BodyText from '../components/BodyText'
import Card from '../components/Card'
import Input from '../components/Input'
import NumberContainer from '../components/NumberContainer'
import TitleText from '../components/TitleText'

const StartGameScreen = (props) => {

    const [enteredValue, setEnteredValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState('')

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''))
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false)
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue)

        if(isNaN(chosenNumber) || chosenNumber <=0 || chosenNumber > 99){
            Alert.alert('Invalid Number!', 'Number has to be between 1 and 99', [{text: 'Okay', style: 'destructive', onPress: resetInputHandler}])
            return;
        }
        
        setConfirmed(true)
        setSelectedNumber(chosenNumber)
        setEnteredValue('')
        Keyboard.dismiss()
    }

    let confirmedOutput

    if (confirmed){
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text style={styles.text}>You Selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title="START GAME" onPress={() => props.onStartGame(selectedNumber)}/>
            </Card>
        )
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}>
            <View style={styles.screen}>
                <TitleText style={styles.title}>Start a New Game!</TitleText>
                <Card style={styles.inputCont}>
                    <BodyText>Select a Number</BodyText>
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
                    <View style={styles.button}><Button title="Reset" onPress = {resetInputHandler} color='red'/></View>
                    <View style={styles.button}><Button title="Confirm" onPress = {confirmInputHandler} color='lime'/></View>
                    </View>
                </Card>
                {confirmedOutput}
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
    },
    summaryContainer: {
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
})
