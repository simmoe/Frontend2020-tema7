import React from 'react'
import { View, Text, Button, StyleSheet, Image } from 'react-native'

const App = () => {
  return(
    <View style={css.main}>
      <View style={css.header}>
        <Text style={css.headerText}>Hei og goddag</Text>
      </View>
      <View style={css.body}>
        <Image 
          source={require('./assets/man.jpeg')}
          resizeMode='cover'
          style={css.image}
        />
        <Text style={css.bodyText}>Body</Text>
        <Text style={css.abs} >Noe tekst om ingenting</Text>
      </View>
      <View style={css.footer}>
        <Text style={css.footerText}>Footer</Text>
      </View>
    </View>
  )
}

const css = StyleSheet.create({
  main:{
    flex:1,
  },
  header:{
    backgroundColor:'#4285F4',
    flex:2,
    justifyContent:'center',
    alignItems:'center',
  },
  headerText:{
    color:'white',
    fontSize:24,
  },
  body:{
    backgroundColor:'orangered',
    flex:8,
    justifyContent:'center',
    alignItems:'center',
    overflow:'hidden',
  },
  bodyText:{
    color:'white',
    position:'absolute',
  },
  image:{
    width:'100%',
    height:'100%',
  },

  abs:{
    position:'absolute',
    left:10,
    top:10,
  },
  footer:{
    position:'absolute',
    height:100,
    bottom:40,
    width:'100%',
    backgroundColor:'rgba(0,0,0,.5)',
    justifyContent:'center',
  },
  footerText:{
    color:'white'
  }


})

export default App