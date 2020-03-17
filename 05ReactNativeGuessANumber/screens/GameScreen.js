import React, {useState, useRef, useEffect} from 'react'
import { View, Text, TextInput, Button, StyleSheet, Alert, KeyboardAvoidingView  } from 'react-native'
import { generateRandomNumber } from '../utils/utils.js'
import { globalCss } from '../style/style.js'
import Card from '../components/Card'

const GameScreen = props => {
    console.log('Game screen mounts ')
    const [guess, setGuess] = useState(generateRandomNumber(0, 100))
    let currentLow = useRef(0)
    let currentHigh = useRef(100)

    const nextGuess = dir => {
        //Er det helt korrekt hva han/hun sir?
        if( (dir == 'up' && props.userNumber < guess)
            ||
            (dir == 'down' && props.userNumber > guess)
            ){
                Alert.alert(
                    'Ahhhh, Sam', 
                    'Thats not entirely correct, man',
                    [
                        {
                        text:'Alright', style:'cancel'
                        }
                    ]
                )
                return
            }
            props.setNumberOfGuesses(props.numberOfGuesses + 1)

            //Now we can set a current high/low
            if(dir == 'down'){
                currentHigh.current = guess
            }else{
                currentLow.current = guess
            }
            setGuess( 
                generateRandomNumber(currentLow.current, currentHigh.current) 
            )
    }
    useEffect( () => {
        if(guess == props.userNumber){
            props.setGameOver(true)
        }
    })


    return(
        <KeyboardAvoidingView>

        <View style={globalCss.centered}>
            <Text>Here's my guess:</Text>
            <Card>
                <Text style={ {fontSize:32} }>{guess}</Text> 
            </Card>
            <View style={css.buttonContainer}>
                <Button title='guess lower' 
                    onPress = { () => nextGuess('down') } />

                <Button 
                    onPress = { () => nextGuess('up') } title='guess higher' />
            </View>
        </View>
        </KeyboardAvoidingView>
    )
}

const css = StyleSheet.create({
    buttonContainer:{
        width:'80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default GameScreen
