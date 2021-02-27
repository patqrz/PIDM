import React, { Component } from 'react'
import { Button, Text } from 'react-native'
import { estilo } from '../Style/style'
import Card from './Card'
import CardItem from './CardItem'

export class Modal extends Component {
    render() {
        return (
            <Card style={estilo.modal}>
                <CardItem>
                    <Text style={estilo.title}>
                    {this.props.route.params.album}
                    </Text>

                    <Text>
                        Lista de músicas
                    </Text>
                </CardItem><br />

                <CardItem>
                    <Text>
                        {this.props.route.params.lista}
                    </Text>
                </CardItem><br />


                <CardItem>
                    <Button color="#EE594A" title="Voltar" onPress={()=>{this.props.navigation.navigate("Home")}}></Button>
                </CardItem>
            </Card>
                
        )
    }
}

export default Modal
