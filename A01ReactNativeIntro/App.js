import React, { useState } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const lyrics = [
  'det satt to katter på et bord',
  'kvittevittevitt bom bom',
  'så sa den ene hør min ven',
  'kvittevittevittevitt bom bom',
  'sku vi ikke klatre ned igjen',
  'kvittevittevitt bom bom',
]

const App = () => {
  const [pos, setPos] = useState(0) 
  const buttonPressed = () => {
    if(pos >= lyrics.length - 1){
      setPos(0)
    }else{
      setPos(pos + 1)
    }
  }
  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Intro til React Native</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>{lyrics[pos]}</Text>
        <Button onPress={ buttonPressed } title='tap me' />
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>footer</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
  },
  header:{
    flex:1,
    flexDirection:'row',
    backgroundColor:'#888',
    justifyContent:'center',
    alignItems:'center',
  },
  headerText:{
    marginTop:12,
    fontSize:24,
    color:'white',
  },
  body:{
    flex:5,
    backgroundColor:'#eee',
    justifyContent:'center',
    alignItems:'center',
    margin:'4%',
    borderRadius:12

  },
  bodyText:{
    fontSize:14,
    marginBottom:14
  },
  footer:{
    flex:1,
    backgroundColor:'#4285F4',
    justifyContent:'center',
    alignItems:'center',
  },
  footerText:{
    fontSize:14,
    color:'white',
    marginBottom:14
  },
})

export default App