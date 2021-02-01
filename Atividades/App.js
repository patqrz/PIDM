import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RotaGeral from './Atividade4/Componentes/Rotas';

export default function App() {
    return (
        <SafeAreaProvider >
            <RotaGeral></RotaGeral>
        </SafeAreaProvider>
    )
}



