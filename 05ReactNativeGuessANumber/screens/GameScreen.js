import React, {useState} from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import { generateRandomNumber } from '../utils/utils.js'
import { globalCss } from '../style/style.js'
import Card from '../components/Card'

const GameScreen = props => {
    const [guess, setGuess] = useState(generateRandomNumber(0, 100))
    return(
        <View style={globalCss.centered}>
            <Text>Here's my guess:</Text>
            <Card>
                <Text style={ {fontSize:32} }>{guess}</Text> 
            </Card>
        </View>
    )
}

export default GameScreen
