import React, {memo} from 'react';
import {TextInput, TextInputProps} from 'react-native';
import styles from './styles';

interface InputProps extends TextInputProps {}

const Input = (props: InputProps) => {
  return <TextInput {...props} style={[styles.input, props.style]} />;
};

export default memo(Input);
