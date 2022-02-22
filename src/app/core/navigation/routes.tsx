import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from 'scenes/home';

import { WHITE, BLUE_1 } from 'styles/colors';
import { FONT_WEIGHT_SEMIBOLD } from 'styles/typography';

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
    </Stack.Navigator>
  </NavigationContainer>
);
