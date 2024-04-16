import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Config from 'react-native-config';

const App = () => {
  console.log(Config)
  return (
    <View>
      <Text>{Config.URL}</Text>
      <Text>dfdsfsjlkjklfjl</Text>
      <Text>kfkjsdfsj</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})