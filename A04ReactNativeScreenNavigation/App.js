import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } 
from 'react-native';
import { globalStyles } from './style/style.js'

const content = [
  {
    title:'side 1',
    text:'de første ordene'
  },
  {
    title:'side 2',
    text:'de mellomste ordene'
  },
  {
    title:'side 3',
    text:'de absolutt siste ordene'
  },
]

const App = () => {
    const [pos, setPos] = useState(2)

    return (
      <View style={css.container}>
        <View style={[css.header, globalStyles.centered]}>
          <Text style={css.headerText}>Header</Text>
        </View>
        <View style={[css.body, globalStyles.primaryBackground, globalStyles.centered]}>
          <Text style={[globalStyles.primaryText, css.title]}>{content[pos].title}</Text>
          <Text style={[globalStyles.primaryText]}>
            {content[pos].text}
          </Text>
        </View>
        <View style={[css.footer, globalStyles.centered]}>
          <Button onPress={ () => setPos(0) } title='side 1' />
          <Button onPress={ () => setPos(1) } title='side 2'/>
          <Button onPress={ () => setPos(2) } title='side 3'/>
        </View>
      </View>
    )
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF',
  },
  header:{
    flex:1,
  },
  body:{
    flex:5,
  },
  footer:{
    flex:1,
    flexDirection:'row',
  },
  title:{
    fontSize:24
  }
})

export default App
