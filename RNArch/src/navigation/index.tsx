import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppNavigator} from './appNavigator';

export function RootNavigator() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
