import React from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'
import Card from '../components/Card'
import { globalCss } from '../style/style.js'

const EndScreen = props => {
    return(
        <View style={globalCss.centered}>
            <Card>
                <Text>That took me only {props.numberOfGuesses} guesses!</Text>
                <Text style={css.guessedNumber}>
                    {props.userNumber}
                </Text>
                <Text>That's the end myfriend, I won!</Text>
            </Card>
            <View style={css.imageContainer} >
                <Image 
                    style={css.image}
                    resizeMode='cover'
                    source={require('../assets/lose.jpg')}
                />
            </View>
            <Button onPress={ () => props.restart() } title='play shit again' />
        </View>
    )
}

const css = StyleSheet.create({
    guessedNumber:{
        paddingVertical:12,
        fontSize:32,
    },
    imageContainer:{
        width:200,
        height:200,
        marginTop:24,
        borderRadius: 300,
        borderColor:'white',
        borderWidth:8,
        overflow:'hidden',
        marginBottom:12
    },
    image:{
        width:'100%',
        height:'100%',
    },
})

export default EndScreen
