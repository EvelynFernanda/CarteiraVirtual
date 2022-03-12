import React from 'react';
import { View } from 'react-native';
import { InputQuantity } from 'components/atoms/inputQuantity';
import { InitialLetter } from 'components/atoms/initialLetter';
import { Select } from 'components/atoms/select';

// import { AddCoinTemplate } from 'components/templates/addCoin';

export const AddCoin = () => {
  return (
    <View>
      {/* <AddCoinTemplate /> */}
      <InputQuantity />
      <InitialLetter />
      <Select />
    </View>
  );
};
