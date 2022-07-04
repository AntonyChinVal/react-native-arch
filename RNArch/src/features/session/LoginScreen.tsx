import React, { useState } from 'react';
import { useCallback } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Column, Input, Link, Button } from 'common/components';
import { useDispatch, useSelector } from 'react-redux';
import { selectSession } from 'store/session/sessionSelectors';
import { requestLogin } from 'store/session/sessionCreators';

export const LoginScreen: React.FC = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { isLoading, user, error } = useSelector(selectSession);
  const dispatch = useDispatch();

  const login = useCallback(() => {
    dispatch(requestLogin(username, password));
  }, [dispatch, password, username]);

  return (
    <SafeAreaView style={styles.container}>
      <Column style={styles.formContainer}>
        <Input
          onChangeText={setUserName}
          value={username}
          placeholder={'User name'}
          style={styles.input}
        />
        <Input
          onChangeText={setPassword}
          value={password}
          placeholder={'Password'}
          style={styles.input}
        />
        <Link style={styles.link}>{'Link'}</Link>
        <Button onPress={login}>{'Login'}</Button>
        <View style={styles.messageContainer}>
          <Text>{isLoading && 'Loading'} </Text>
          <Text>{user && `${user.name} ${user.lastname}`}</Text>
          <Text>{error && error}</Text>
        </View>
      </Column>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  formContainer: {
    marginHorizontal: 30,
    alignItems: 'center',
  },
  messageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginBottom: 10,
  },
  link: {
    marginBottom: 10,
  },
});
