import { StyleSheet } from 'react-native'

export const globalCss = StyleSheet.create({
    centered:{
        justifyContent:'center',
        alignItems:'center',
        height:'100%'
    },
    primaryBackgroundColor:{
        backgroundColor:'#4285F4',
    }
}) 

export const myName = (name) =>{
    return 'hello ' + name
}