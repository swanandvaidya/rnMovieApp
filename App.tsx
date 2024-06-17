import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import WelcomeScreen from './src/welcome/WelcomeScreen';

export const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <WelcomeScreen></WelcomeScreen>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFAF5',
  },
});

export default App;
