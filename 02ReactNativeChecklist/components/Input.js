import React, {useState} from 'react'
import { Button, TextInput, View, StyleSheet } from 'react-native'

const Input = props => {
    const [value, setValue] = useState('')
    const addItem = () => {
        props.addItem(value)
        setValue('')
    }

    return(
        <View>
            <TextInput autoCapitalize={false} autoCorrect={false} multiline={true} style={css.input} placeholder='gimme items man' value={value} onChangeText={ txt => setValue(txt) } />
            <Button title='add item' onPress={ addItem } />
        </View>
    )
}

const css = StyleSheet.create({
    input:{
        minWidth:'100%',
        borderColor:'#e6e6ea',
        borderBottomWidth: 1,
        marginBottom:12,
        padding:6,
        textAlign:'center'
    }
})
export default Input 