import React, { Component } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'


export class Sobre extends Component {
    render() {
        return (
            <View  style={styles.container}>
                <Text>Hello World!</Text><br /><br />
                <Button color="#ff3b7f" title="Voltar para início" onPress={()=>{this.props.navigation.navigate('Início')}}></Button>
            </View>
        )
    }
}

export default Sobre;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        justifyContent: 'center',
        alignItems: 'center',
    },
})