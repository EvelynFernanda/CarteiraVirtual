import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from 'scenes/home';
import { AddCoin } from 'scenes/addCoin';

import { WHITE, BLUE_1 } from 'styles/colors';
import { FONT_WEIGHT_SEMIBOLD } from 'styles/typography';
import { AddCoinT } from 'components/templates/addCoinT';

const Stack = createStackNavigator();

export const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: BLUE_1,
        },
        headerTintColor: WHITE,
        headerTitleStyle: {
          fontWeight: FONT_WEIGHT_SEMIBOLD,
        },
        headerTitleAlign: 'center',
      }}>
      <Stack.Screen
        name="home"
        component={Home}
        options={{ title: 'Watchlist' }}
      />
      <Stack.Screen
        name="AddCoin"
        component={AddCoin}
        options={{ title: 'Add New Coin' }}
      />
      <Stack.Screen
        name="AddCoinT"
        component={AddCoinT}
        options={{ title: 'Add New Coin' }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
