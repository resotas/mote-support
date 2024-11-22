import React from 'react';
import { View, StyleSheet } from 'react-native';

const ProgressBar = ({ progress }) => (
  <View style={styles.container}>
    <View style={[styles.bar, { width: `${progress}%` }]} />
  </View>
);

const styles = StyleSheet.create({
  container: { height: 10, backgroundColor: '#e0e0df', borderRadius: 5 },
  bar: { height: 10, backgroundColor: '#007BFF', borderRadius: 5 },
});

export default ProgressBar;
