import React, { Component } from 'react'
import { StyleSheet, Text, View} from 'react-native'

export class IMCMsg extends Component {
    constructor(props){
        super(props)
    }

    render() {
        let situacao = "";
        let css = style.situacao;
        if(this.props.imc < 17){
            situacao = "Muito abaixo do peso";
        } else if (this.props.imc > 17 && this.props.imc < 18.49 ) {
            situacao = "Abaixo do peso";
        } else if (this.props.imc > 18.5 && this.props.imc < 24.99 ) {
            situacao = "Peso normal";
            css = style.normal;
        } else if (this.props.imc > 25 && this.props.imc < 29.99 ) {
            situacao = "Acima do peso";
        } else if (this.props.imc > 30 && this.props.imc < 34.99 ) {
            situacao = "Obesidade 1";
        } else if (this.props.imc > 35 && this.props.imc < 39.99 ) {
            situacao = "Obesidade 2";
        } else if (this.props.imc > 40) {
            situacao = "Obesidade 3";
        }

        return (
            <View>
                <Text style={css}>
                    {situacao}
                </Text>
                
            </View>
        )
    }
}

const style = StyleSheet.create({
    situacao: {
        color: "red",
        fontWeight: 'bold',
        fontSize: 20,

    },
    normal: {
        color: "blue",
        fontWeight: 'bold',
        fontSize: 20,

    }
    
})

export default IMCMsg
