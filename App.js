import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// comment
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Rosa's app works!</Text>
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
