import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AppNavigator } from './AppNavigator';

export function RootNavigator() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
