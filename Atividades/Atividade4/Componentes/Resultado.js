import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export class Resultado extends Component {
    render() {
        let peso = this.props.route.params.peso
        let altura  = this.props.route.params.altura
        let imc = peso/(altura * altura)
        let situacao = "";

        if (imc < 17 && imc > 0) {
            situacao = "Muito abaixo do peso"
        } else if (imc > 17 && imc < 18.49) {
            situacao = "Abaixo do peso"
        } else if (imc > 18.5 && imc < 24.99) {
            situacao = "Peso normal"           
        } else if (imc > 25 && imc < 29.99) {
            situacao = "Acima do peso";
        } else if (imc > 30 && imc < 34.99) {
            situacao = "Obesidade";
        } else if (imc > 35 && imc < 39.99) {
            situacao = "Obesidade severa";
        } else if (imc > 40) {
            situacao = "Obesidade mórbida";
        }

        return (
           <View style={styles.container}>
                <Text>Seu IMC é: {imc}</Text>
                <Text>{situacao}</Text> 
                <Button color="#ff3b7f" title="Home" onPress={()=>{this.props.navigation.navigate('Home')}}></Button>
           </View>
        )
    }
}

export default Resultado;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        justifyContent: 'center',
        alignItems: 'center',
    },
})