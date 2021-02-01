import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button color="#ff3b7f" title="Cadastrar" onPress={()=>{this.props.navigation.navigate('Cadastro')}}></Button> <br />
                <Button color="#ff3b7f" title="Calcular IMC" onPress={()=>{this.props.navigation.navigate('IMC')}}></Button> <br />
                <Button color="#ff3b7f" title="Sobre" onPress={()=>{this.props.navigation.navigate('Sobre')}}></Button>
            </View>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'Sans-serif'
    },
})