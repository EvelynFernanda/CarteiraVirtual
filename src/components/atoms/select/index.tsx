import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { View } from 'react-native';

export const Select = () => {
  const [selectedCoin, setSelectedCoin] = useState();
  return (
    <View>
      <Picker
        selectedValue={selectedCoin}
        onValueChange={itemValue => setSelectedCoin(itemValue)}>
        <Picker.Item style={{ color: '#AFAFAF' }} label="Select the coin..." />
        <Picker.Item label="Bitcoin" value="Bitcoin" />
        <Picker.Item label="Ethereum" value="Ethereum" />
        <Picker.Item label="Dogecoin" value="Dogecoin" />
      </Picker>
    </View>
  );
};
