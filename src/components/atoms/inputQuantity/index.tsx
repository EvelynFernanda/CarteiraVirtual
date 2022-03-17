import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import styles from './styles';

export const InputQuantity = () => {
  const [quantity, setQuantity] = useState('');
  const [errorQuantity, setErrorQuantity] = useState('');

  const validate = () => {
    let error = false;
    setErrorQuantity('');

    if (quantity == '') {
      setErrorQuantity('Quantity must be filled!');
      error = true;
    }
    return !error;
  };

  const save = () => {
    if (validate()) {
      console.log('salvou');
    }
  };

  return (
    <View>
      <Text style={styles.text}>Quantity</Text>
      <Input
        keyboardType="numeric"
        errorMessage={errorQuantity}
        onChangeText={value => {
          setQuantity(value);
          setErrorQuantity('');
        }}
      />

      <Button onPress={save}>save</Button>
    </View>
  );
};
