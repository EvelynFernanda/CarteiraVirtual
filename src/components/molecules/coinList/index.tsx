import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

type Props = {
  item: {
    name: string;
    data: number;
    valor: number;
  };
};

export const CoinList = ({ item }: Props) => {
  const { name, data } = item;

  //   {"date": "16/3/2022 ", "name": "Ethereum", "price": 215262.18, "quantity": "9"}
  return (
    <View>
      <View style={styles.containerLetter}>
        {name == 'Bitcoin' && <Text style={styles.textInitialLetter}>B</Text>}
        {name == 'Ethereum' && <Text style={styles.textInitialLetter}>E</Text>}
        {name == 'Dogecoin' && <Text style={styles.textInitialLetter}>D</Text>}
      </View>
      <Text>{name}</Text>
      <Text>{data}</Text>
    </View>
  );
};
