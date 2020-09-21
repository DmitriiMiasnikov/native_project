import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {Navbar} from './src/Navbar';

export default function App() {
  return (
    <View style={styles.container} >
      <Navbar title='title of navbar'/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
