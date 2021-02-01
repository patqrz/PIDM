import React, { Component } from 'react'
import { Button, Image, StyleSheet, Text, View } from 'react-native'

export class Perfil extends Component {
    render() {
        return (
            <View  style={styles.container}>
                <Image source={{uri:'https://images.unsplash.com/photo-1450297350677-623de575f31c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'}} style={{width: 100, height: 100}}></Image><br />
                <Text>Nome: {this.props.route.params.nome}</Text>
                <Text>Idade: {this.props.route.params.idade}</Text>
                <Text>Email: {this.props.route.params.email}</Text><br /><br />
                <Button color="#ff3b7f" title="Voltar para início" onPress={()=>{this.props.navigation.navigate('Início')}}></Button>
            </View>
        )
    }
}

export default Perfil;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        justifyContent: 'center',
        alignItems: 'center',
    },
})