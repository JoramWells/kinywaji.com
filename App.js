import React from 'react';
import { StyleSheet, Text, StatusBar } from 'react-native';
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from './screens/HomeScreen';
import { store } from './store';
import ProductScreen from './screens/ProductScreen';
import AccountScreen from './screens/AccountScreen';

console.log(StatusBar.currentHeight)
export default function App() {
  const Stack = createStackNavigator()
  return (
    <Provider store={store} style={styles.container}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="ProductScreen"
              component={ProductScreen}
              options={{
                headerShown: false
              }}
            />
            <Stack.Screen
              name="AccountScreen"
              component={AccountScreen}
              options={{
                headerShown: false
              }}
            />
          </Stack.Navigator>


        </SafeAreaProvider>
      </NavigationContainer>

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
