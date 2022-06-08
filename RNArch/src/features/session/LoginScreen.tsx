import React, {useState} from 'react';
import {useCallback} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Column, Input, Link, Button} from 'common/components';
import {useDispatch, useSelector} from 'react-redux';
import {SessionSagaActions} from 'store/session/sessionSaga';
import {selectSession} from 'store/session/sessionSelectors';

export const LoginScreen: React.FC = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const {isLoading, user, error} = useSelector(selectSession);
  const dispatch = useDispatch();

  const requestLogin = useCallback(() => {
    dispatch({
      type: SessionSagaActions.REQUEST_LOGIN,
      payload: {userName, password},
    });
  }, [dispatch, password, userName]);

  return (
    <SafeAreaView style={styles.container}>
      <Column style={styles.formContainer}>
        <Input
          onChangeText={setUserName}
          value={userName}
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
        <Button onPress={requestLogin}>{'Login'}</Button>
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
  container: {flex: 1},
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
