import React, {useState} from 'react'
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native'
import { globalCss } from '../style/style.js'
import Card from '../components/Card'

const StartScreen = props => {
    const [val, setVal] = useState()
    
    const confirmNumber = () => {
        if( isNaN(val) || val <= 0 || val > 99){
            Alert.alert(
                'not a valid number, myfriend',
                'number must be between 1 and 99',
                [{text:'okay', style:'destructive'}]
            )
            return
        }
        props.setUserNumber(val)
    }

    return(
        <View style={globalCss.centered}>
            <Text>Please type your number</Text>
            <Card>
                <TextInput
                    placeholder='number between 1 and 99, please'
                    maxLength={2}
                    keyboardType='number-pad'
                    value={val}
                    onChangeText={ nr => setVal(nr) }
                />
            </Card>
            
            <Button title='ok' onPress={confirmNumber} />

        </View>
    )
}

export default StartScreen
