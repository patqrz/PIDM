import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import React from 'react';
import Cadastro from "./Cadastro";
import IMC from "./IMC";
import Sobre from "./Sobre";
import Resultado from "./Resultado";
import Perfil from "./Perfil";

const rotas = createStackNavigator()
const rotasgerais = createStackNavigator()

function RotaPrincipal() {
    return (
        <rotas.Navigator initialRouteName="Início">
            <rotas.Screen name='Início' component={Home}></rotas.Screen>
            <rotas.Screen name='Cadastro' component={Cadastro}></rotas.Screen>
            <rotas.Screen name='IMC' component={IMC}></rotas.Screen>
            <rotas.Screen name='Sobre' component={Sobre}></rotas.Screen>
            <rotas.Screen name='Resultado' component={Resultado}></rotas.Screen>
        </rotas.Navigator>
    )
}

export default function RotaGeral() {
    return (
        <NavigationContainer>
            <rotasgerais.Navigator initialRouteName="principal">
                <rotasgerais.Screen name="principal" component={RotaPrincipal} options={{ headerShown: false }}></rotasgerais.Screen>
                <rotasgerais.Screen name="perfil" component={Perfil} options={{ headerShown: false }}></rotasgerais.Screen>
            </rotasgerais.Navigator>
        </NavigationContainer>
    )
}