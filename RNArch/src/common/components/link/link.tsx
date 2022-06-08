import React, {memo} from 'react';
import {
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  Text,
  TextStyle,
} from 'react-native';
import styles from './styles';

interface LinkProps {
  children?: any;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  color?: string;
}

export const Link = (props: LinkProps) => {
  return (
    <TouchableOpacity style={props.style} onPress={props.onPress}>
      <Text style={[styles.link, props.textStyle, {color: props.color}]}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
};

Link.defaultProps = {
  children: 'Link',
  color: 'blue',
};

export default memo(Link);
