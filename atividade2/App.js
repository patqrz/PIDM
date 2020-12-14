import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Navbar from '../votacao/navbar';
import Index  from '../votacao/index';
export default function App() {
  return (
    <View style={styles.container}>
      <Navbar></Navbar>
      <Index></Index>
      
      <StatusBar style="auto" />
  
    </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
