import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { listCoin } from '../../../data/listCoin';

export const Select = () => {
  const [coin] = useState([
    listCoin[0].label,
    listCoin[1].label,
    listCoin[2].label,
  ]);
  const [selectedCurrency, setSelectedCurrency] = useState([]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Coin</Text>
      <Picker
        style={styles.picker}
        selectedValue={selectedCurrency}
        onValueChange={itemValue => setSelectedCurrency(itemValue)}>
        {coin.map(cn => {
          return <Picker.Item label={cn} value={cn} />;
        })}
      </Picker>
    </View>
  );
};
