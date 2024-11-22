import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = ({ title, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: { backgroundColor: '#007BFF', padding: 10, borderRadius: 5 },
  text: { color: '#fff', fontSize: 16, textAlign: 'center' },
});

export default Button;
