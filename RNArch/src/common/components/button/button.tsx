import React, {memo} from 'react';
import {Text, StyleProp, ViewStyle, TextStyle, Pressable} from 'react-native';
import styles from './styles';

export enum ButtonType {
  NORMAL = 1,
  OUTLINED = 2,
}

interface ButtonProps {
  children?: any;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  type?: ButtonType;
  disabled?: boolean;
  color?: string;
}

const Button = (props: ButtonProps) => {
  var btnStyle: StyleProp<ViewStyle>;
  var textStyle: StyleProp<TextStyle>;
  switch (props.type) {
    case ButtonType.NORMAL: {
      btnStyle = {...styles.normalButton, backgroundColor: props.color};
      break;
    }
    case ButtonType.OUTLINED: {
      btnStyle = {...styles.outlinedButton, borderColor: props.color};
      textStyle = {color: props.color};
      break;
    }
  }

  return (
    <Pressable
      onPress={props.onPress}
      style={[
        btnStyle,
        styles.button,
        props.style,
        props.disabled ? styles.buttonDisabled : {},
      ]}
      disabled={props.disabled}>
      <Text style={[styles.text, textStyle, props.textStyle]}>
        {props.children}
      </Text>
    </Pressable>
  );
};

Button.defaultProps = {
  children: 'Button',
  onPress: () => {},
  type: ButtonType.NORMAL,
  flexed: true,
  disabled: false,
  color: 'blue',
};

export default memo(Button);
