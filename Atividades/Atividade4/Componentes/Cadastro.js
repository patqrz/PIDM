import React, { Component } from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'

export class Cadastro extends Component {
    constructor(props){
        super(props)
        this.state = {
            nome: '',
            idade: 0,
            email: '',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="Digite seu nome" onChangeText={(nomeDigitado)=>{this.setState({nome:nomeDigitado})}}></TextInput> <br />
                <TextInput placeholder="Digite sua idade"  onChangeText={(idadeDigitada)=>{this.setState({idade:idadeDigitada})}}></TextInput> <br />
                <TextInput placeholder="Digite seu e-mail"  onChangeText={(emailDigitado)=>{this.setState({email:emailDigitado})}}></TextInput> <br /><br />
                <Button color="#ff3b7f" title="Enviar" onPress={()=>{this.props.navigation.navigate("perfil", {nome: this.state.nome, idade: this.state.idade, email: this.state.email})}}></Button><br /><br />
            
            </View>
        )
    }
}

export default Cadastro;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,
    },
})