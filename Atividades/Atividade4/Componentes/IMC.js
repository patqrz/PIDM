import React, { Component } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'


export class IMC extends Component {
    constructor(props){
        super(props)
        this.state = {
            altura: 0,
            peso: 0
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="Digite sua altura" onChangeText={(alturaDigitada)=>{this.setState({altura:alturaDigitada})}}></TextInput> <br />
                <TextInput placeholder="Digite seu peso" onChangeText={(pesoDigitado)=>{this.setState({peso:pesoDigitado})}}></TextInput><br /><br />
                <Button color="#ff3b7f" title="Calcular" onPress={()=>{this.props.navigation.navigate('Resultado', {altura: this.state.altura, peso: this.state.peso})}}></Button>
            </View>
        )
    }
}

export default IMC;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        justifyContent: 'center',
        alignItems: 'center',
    },
})