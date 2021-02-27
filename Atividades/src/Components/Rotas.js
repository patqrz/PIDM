import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AlbumList from './AlbumList';
import Modal from './Modal';

const Rotas = createStackNavigator();

function RotasSistema (){
    return(
        <NavigationContainer>
            <Rotas.Navigator initialRouteName="Home">
                <Rotas.Screen name="Home" component={AlbumList} options={{headerShown: false}}></Rotas.Screen>
                <Rotas.Screen name="Modal" component={Modal} options={{headerShown: false}}></Rotas.Screen>
            </Rotas.Navigator>
        </NavigationContainer>
    )
}

export default RotasSistema;
