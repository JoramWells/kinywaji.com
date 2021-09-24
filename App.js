import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {Provider} from 'react-redux'
import HomeScreen from './screens/HomeScreen';
import { store } from './store';

console.log(StatusBar.currentHeight)
export default function App() {
  return (
    <Provider store={store} style={styles.container}>
      <HomeScreen/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: StatusBar.currentHeight
  },
});
