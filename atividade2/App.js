import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import IMCApp from './IMC/IMCApp';

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={"#381859"}></StatusBar>
            <IMCApp></IMCApp>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E3E3E3',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 40,

    },
})

