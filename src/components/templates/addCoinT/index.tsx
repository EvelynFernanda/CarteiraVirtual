/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { listCoin } from '../../../data/listCoin';
import { Picker } from '@react-native-picker/picker';
import { Input } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './styles';

export const AddCoinT = () => {
  const [coin] = useState([
    'Select the coin...',
    listCoin[0].label,
    listCoin[1].label,
    listCoin[2].label,
  ]);
  const [selectedCurrency, setSelectedCurrency] = useState([]);
  const [quantity, setQuantity] = useState('');
  const [errorQuantity, setErrorQuantity] = useState('');
  // const [valueC, setValueC] = useState([]) as any[];

  const validate = () => {
    let error = false;
    setErrorQuantity('');

    if (quantity == '') {
      setErrorQuantity('Quantity must be filled!');
      error = true;
    }
    return !error;
  };

  const dateForm = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year} `;
  };
  const condPrice = () => {
    if (selectedCurrency == [listCoin[0].label]) {
      return listCoin[0].value.price;
    }
    if (selectedCurrency == [listCoin[1].label]) {
      return listCoin[1].value.price;
    }
    if (selectedCurrency == [listCoin[2].label]) {
      return listCoin[2].value.price;
    }
  };

  async function storeData() {
    if (validate()) {
      const dados = {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        name: selectedCurrency,
        price: condPrice(),
        quantity: quantity,
        date: dateForm(),
      };
      try {
        await AsyncStorage.setItem('@coin', JSON.stringify(dados));
      } catch (error) {
        console.warn(error);
      }
    }
  }
  return (
    <View style={{ margin: 15 }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.containerLetter}>
          {selectedCurrency == ['Bitcoin'] && (
            <Text style={styles.textInitialLetter}>B</Text>
          )}
          {selectedCurrency == ['Ethereum'] && (
            <Text style={styles.textInitialLetter}>E</Text>
          )}
          {selectedCurrency == ['Dogecoin'] && (
            <Text style={styles.textInitialLetter}>D</Text>
          )}
        </View>
        <View style={styles.containerSelect}>
          <Text style={[styles.textPadrao, { marginLeft: 15 }]}>Coin</Text>
          <Picker
            selectedValue={selectedCurrency}
            onValueChange={itemValue => setSelectedCurrency(itemValue)}>
            {coin.map(cn => {
              return <Picker.Item key={cn.length} label={cn} value={cn} />;
            })}
          </Picker>
        </View>
      </View>
      {selectedCurrency == ['Select the coin...'] && (
        <View>
          <Text style={styles.description}>No description.</Text>
          <Text style={styles.textPadrao}>Price</Text>
          <Text style={styles.price} />
        </View>
      )}
      {selectedCurrency == ['Bitcoin'] && (
        <View>
          <Text>{listCoin[0].value.description}</Text>
          <Text style={styles.textPadrao}>Price</Text>
          <Text style={styles.price}>{listCoin[0].value.price}</Text>
        </View>
      )}
      {selectedCurrency == ['Ethereum'] && (
        <View>
          <Text>{listCoin[1].value.description}</Text>
          <Text style={styles.textPadrao}>Price</Text>
          <Text style={styles.price}>{listCoin[1].value.price}</Text>
        </View>
      )}
      {selectedCurrency == ['Dogecoin'] && (
        <View>
          <Text>{listCoin[2].value.description}</Text>
          <Text style={styles.textPadrao}>Price</Text>
          <Text style={styles.price}>{listCoin[2].value.price}</Text>
        </View>
      )}

      <Text style={styles.textPadrao}>Quantity</Text>
      <Input
        keyboardType="numeric"
        value={quantity}
        errorMessage={errorQuantity}
        onChangeText={value => {
          setQuantity(value);
          setErrorQuantity('');
        }}
      />
      <View>
        <TouchableOpacity style={styles.button} onPress={storeData}>
          <Text style={styles.textButton}> ADD COIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
