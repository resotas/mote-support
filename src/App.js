import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import TrainingScreen from './screens/TrainingScreen';
import AssistantScreen from './screens/AssistantScreen';
import LogScreen from './screens/LogScreen';
import AchievementScreen from './screens/AchievementScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Training" component={TrainingScreen} />
        <Stack.Screen name="Assistant" component={AssistantScreen} />
        <Stack.Screen name="Log" component={LogScreen} />
        <Stack.Screen name="Achievement" component={AchievementScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
