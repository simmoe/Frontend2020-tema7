import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Item = props => {
    return(
        <TouchableOpacity onPress={ () => props.removeItem(props.id) }>
            <View style={css.item}>
                <Text style={css.itemText}>{props.element}</Text>
            </View>
        </TouchableOpacity>
    )
}

const css = StyleSheet.create({
    item:{
        width:'100%',
        height:60,
        backgroundColor:'gray',
        marginTop:8,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'
    },
    itemText:{
        color:'white'
    }
})
export default Item
