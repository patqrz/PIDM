import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { estilo } from '../Style/style'

export class Header extends Component {
    render() {
        return (
            <View style={estilo.header}>
                <Text style={estilo.tituloheader}>
                    {this.props.title}
                </Text>
            </View>
        )
    }
}

export default Header;
