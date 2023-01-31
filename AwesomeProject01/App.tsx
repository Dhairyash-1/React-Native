import React from 'react';
import {SafeAreaView, View, Text, TextInput} from 'react-native';

export default function App() {
  const name = 'dhairyah';
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World I'm running the React-Native application</Text>
        <Text>{name}</Text>
        <TextInput>Enter your name dhairyah gupta thisis </TextInput>
      </View>
    </SafeAreaView>
  );
}
