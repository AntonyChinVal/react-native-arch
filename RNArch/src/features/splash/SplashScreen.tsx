import {Route} from 'navigation/Routes';
import {AppNavigationProp} from 'navigation/Types';
import React from 'react';
import {useEffect} from 'react';
import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

export const SplashScreen: React.FC<AppNavigationProp> = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Route.LOGIN);
    }, 2000);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <Text>SplashScreen</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});
