import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './styles';

type Props = {
  name: string;
};

export const Button = ({ name }: Props) => {
  return (
    <View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}> {name}</Text>
      </TouchableOpacity>
    </View>
  );
};
