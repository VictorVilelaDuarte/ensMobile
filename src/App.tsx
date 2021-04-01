import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const theme = {
  colors: {
    primary: '#326b97',
    background: '#f3f3f3',
    card: '#f3f3f3',
    text: '#000',
    border: '#000',
    notification: '#000',
  },
  dark: false,
};

const App: React.FC = () => (
  <NavigationContainer theme={theme}>
    <StatusBar barStyle="dark-content" backgroundColor="#f3f3f3" />
    <View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
      <Routes />
    </View>
  </NavigationContainer>
);

export default App;
