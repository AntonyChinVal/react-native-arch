import React, { memo } from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import styles from './styles';

interface RowProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Row = (props: RowProps) => {
  return <View style={[styles.container, props.style]}>{props.children}</View>;
};

export default memo(Row);
