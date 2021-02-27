import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AlbumList from './src/Components/AlbumList';
import Header from './src/Components/Header';
import RotasSistema from './src/Components/Rotas';

export default function App() {
    return (
        <SafeAreaProvider>
            <RotasSistema></RotasSistema>
        </SafeAreaProvider>
    )
}



