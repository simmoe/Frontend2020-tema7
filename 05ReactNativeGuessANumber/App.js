import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import StartScreen from './screens/StartScreen'
import GameScreen from './screens/GameScreen'
import EndScreen from './screens/EndScreen'

const App = () => {
  const [userNumber, setUserNumber] = useState()
  const [gameOver, setGameOver] = useState(false)

  let currentScreen = <StartScreen setUserNumber={setUserNumber} />

  if(!isNaN(userNumber)){
    currentScreen = <GameScreen />
  }
  
  if(gameOver){
    currentScreen = <EndScreen />
  }

  return(
    <View style={css.main}>
      <View style={css.header}>
        <Text style={css.headerText}>guess a number app</Text>
      </View>
      <View style={css.body}>
        { currentScreen }
      </View>
    </View>
  )
}

const css = StyleSheet.create({
  main:{
    flex:1,
    justifyContent:'center',
    alignItems:'stretch'
  },
  header:{
    flex:1,   
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'black' 
  },
  headerText:{
    marginTop:24,
    color:'white'
  },
  body:{
    flex:5,
  },
})


export default App