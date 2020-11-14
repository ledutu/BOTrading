import React, { Component } from 'react'
import { Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Buffer } from 'buffer';
import StockScreen from './src/screens/Stock/Stock';
import { SafeAreaView } from 'react-native-safe-area-context';
window.localStorage = AsyncStorage;
global.Buffer = Buffer;
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StockScreen />
      </SafeAreaView>
    )
  }
}
