import React from 'react';
import { SafeAreaView } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import { useNavigation } from '@react-navigation/native';

import { EmptyState, EmptyStateType } from 'components/molecules/empry-state';
import { GREEN_TINT_1 } from 'styles/colors';
import styles from './styles';

interface HomeTemplateProps {}

export const HomeTemplate = ({}: HomeTemplateProps) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <EmptyState type={EmptyStateType.empty_wallet} />
      <FloatingAction
        color={GREEN_TINT_1}
        onPressMain={() => {
          navigation.navigate('AddCoin');
        }}
      />
    </SafeAreaView>
  );
};