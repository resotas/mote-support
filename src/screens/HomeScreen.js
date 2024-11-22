import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>モテサポート</Text>
      <Button title="トレーニング" onPress={() => navigation.navigate('Training')} />
      <Button title="リアルタイムアシスタント" onPress={() => navigation.navigate('Assistant')} />
      <Button title="第一印象サポート" onPress={() => navigation.navigate('Log')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 20 },
});

export default HomeScreen;
