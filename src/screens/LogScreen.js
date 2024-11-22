import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const LogScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>行動ログ画面</Text>
      <Button title="戻る" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});

export default LogScreen;
