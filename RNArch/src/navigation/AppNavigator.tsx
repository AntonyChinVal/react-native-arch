import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SplashScreen, LoginScreen} from 'features';
import React from 'react';
import {Route} from './Routes';
import {AppStackParamList} from './Types';

const AppStack = createNativeStackNavigator<AppStackParamList>();

export function AppNavigator() {
  return (
    <AppStack.Navigator
      initialRouteName={Route.SPLASH}
      screenOptions={{headerShown: false}}>
      <AppStack.Screen component={SplashScreen} name={Route.SPLASH} />
      <AppStack.Screen component={LoginScreen} name={Route.LOGIN} />
    </AppStack.Navigator>
  );
}
