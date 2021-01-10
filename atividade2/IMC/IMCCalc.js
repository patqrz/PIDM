import React, { Component } from 'react'
import {StyleSheet, Text, View} from 'react-native'
import IMCMsg from './IMCMsg'

export class IMCCalc extends Component {
    constructor(props){
        super(props)
    }

    render() {
        let imc = this.props.peso/(this.props.altura*this.props.altura)
        console.log(imc)
        let a = ""
        if (this.props.peso){
            a = imc
        }
        return (
            <View style={style.container}>
                <Text style={style.negrito}>
                    Seu IMC é: {a}
                </Text>
                <IMCMsg imc={imc}></IMCMsg>

            </View>
        )
    }
}

const style = StyleSheet.create({
    negrito: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',


    }
})
export default IMCCalc