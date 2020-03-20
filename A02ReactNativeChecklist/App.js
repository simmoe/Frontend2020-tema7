import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Item from './components/Item'
import Input from './components/Input'

const App = () => {
  const [items, setItems] = useState(['feed cat', 'buy food'])
  
  const addItem = item => {
    setItems([...items, item])
  }

  const removeItem = id => {setItems(items.filter((element, index) => index != id))}

  return(
    <View style={css.container}>
      <View style={[css.header, css.centered]}><Text style={css.headerText}>Checklist</Text></View>
      <View style={[css.input, css.centered]} >
        <Input addItem={addItem} />
      </View>
      <View style={[css.items]}>        
        <ScrollView>
          {
            items.map( (element, index) =>          
              <Item removeItem={removeItem} key={index} id={index} element={element} />
            )        
          }
        </ScrollView>
      </View>
      <View style={[css.footer, css.centered]}><Text>Footer</Text></View>
    </View>
  )
}

const css = StyleSheet.create({
  container:{
    width:'100%',
    height:'100%',
  },
  centered:{
    justifyContent:'center',
    alignItems:'center'
  },
  input:{
    flex:2,
    backgroundColor:'lightblue',
  },
  header:{
    flex:1,
    backgroundColor:'black',
  },
  headerText:{
    marginTop:24,
    fontSize:24,
    color:'white'
  },
  items:{
    flex:5,
    backgroundColor:'white',    
    margin:'6%',
  },
  footer:{
    flex:1,
    backgroundColor:'black',
  },
})

export default App