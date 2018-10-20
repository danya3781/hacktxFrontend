import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator, createStackNavigator } from 'react-navigation';
import Login from './components/Login.js';
import Home from './components/Home.js';



const RootStack = createStackNavigator({
    Login: {
        screen: Login,
    },
    Home: {
        screen: Home
    }
});

export default class App extends React.Component {
    render() {
        return (
            <RootStack />
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


