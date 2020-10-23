import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import KrKode from './page/KrKode';
import DetailsKode from './page/DetailsKode';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#f2f3f5' },
        }}
      >
        <Screen name="KrKode" component={KrKode} />
        <Screen name="DetailsKode" component={DetailsKode} />
      </Navigator>
    </NavigationContainer>
  );
}
