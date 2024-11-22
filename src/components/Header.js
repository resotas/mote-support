import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { backgroundColor: '#007BFF', padding: 15 },
  text: { color: '#fff', fontSize: 20, fontWeight: 'bold', textAlign: 'center' },
});

export default Header;
