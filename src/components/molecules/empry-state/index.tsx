import React from 'react';
import { View, Image } from 'react-native';

import { Text } from 'components/atoms/text';

import EmptyStateImage from 'assets/images/empty-state-no-coins.png';
import styles from './styles';

export enum EmptyStateType {
  empty_wallet = 'empty_wallet',
}

const emptyStateImages = { [EmptyStateType.empty_wallet]: EmptyStateImage };
const emptyStateTexts = {
  [EmptyStateType.empty_wallet]: "You don't have\nany coins yet!",
};
interface EmptyStateProps {
  type: EmptyStateType;
}

const getImageType = (type: EmptyStateType) => emptyStateImages[type];

const getTextType = (type: EmptyStateType) => emptyStateTexts[type];

export const EmptyState = ({
  type = EmptyStateType.empty_wallet,
}: EmptyStateProps) => (
  <View style={styles.container}>
    <Image
      source={getImageType(type)}
      style={styles.image}
      resizeMode="contain"
    />
    <Text style={styles.text}>{getTextType(type)}</Text>
  </View>
);
