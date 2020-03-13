import React from 'react'
import {View, StyleSheet} from 'react-native'

const Card = props => {
    return(
        <View style={css.card}>
            { props.children }
        </View>
    )
}

const css = StyleSheet.create({
    card:{
        marginVertical:24,
        justifyContent:'center',
        alignItems:'center',
        width:300,
        shadowColor:'black',
        shadowOffset:{ width:0, height:2 },
        shadowRadius: 6,
        backgroundColor:'white',
        elevation:8,
        shadowOpacity: .23,
        padding: 24,
        borderRadius:8,
    }
})

export default Card