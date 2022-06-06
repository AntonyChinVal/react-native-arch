import React, {memo} from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
import styles from './styles';

interface ColumnProps {
  children?: any;
  style?: StyleProp<ViewStyle>;
}

const Column = (props: ColumnProps) => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

export default memo(Column);
