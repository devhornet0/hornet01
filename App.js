import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './components/Header';

export default function App() {
  let contador = 0;

  return (
    <>
      <Header title="Header Param" />
      <View style={styles.container}>
        <Text style={styles.title}>Olá Mundo!</Text>
        <TouchableOpacity style={styles.button}>
          <Text>Pressione Aqui</Text>
        </TouchableOpacity>
        <Text>{contador} toques!</Text>
        <StatusBar style="auto" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffb300',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black'
  }
});
