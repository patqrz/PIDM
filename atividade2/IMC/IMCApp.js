import React, { Component } from 'react'
import { Button, TextInput, View, StyleSheet, Text } from 'react-native'
import IMCCalc from './IMCCalc'


export class IMCApp extends Component {
    constructor(props){
        super(props)
        this.state = {
            peso: 0,
            altura: 0.0,
            pesoChange: 0,
            alturaChange: 0.0,
        }

    }

    calcular(){
        this.setState({
            altura: this.state.alturaChange,
            peso: this.state.pesoChange,
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <h2>Calculadora IMC</h2>
                    <TextInput styles={styles.campo} placeholder="Digite seu peso" onChangeText={(peso) => this.setState({pesoChange:peso})}></TextInput><br />
                    <TextInput placeholder="Digite sua altura" onChangeText={(altura) => this.setState({alturaChange:altura})}></TextInput><br />
                    <Button title="Calcular" onPress={() => this.calcular()}> </Button><br />
                    <IMCCalc peso={this.state.peso} altura={this.state.altura}></IMCCalc>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
        fontFamily: 'Sans-Serif',

    },

    campo: {
        backgroundColor: 'green',
    }

})

export default IMCApp;

