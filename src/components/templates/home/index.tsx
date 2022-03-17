import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import { FloatingAction } from 'react-native-floating-action';
import { useNavigation } from '@react-navigation/native';

import { EmptyState, EmptyStateType } from 'components/molecules/empry-state';
import { GREEN_TINT_1 } from 'styles/colors';
import styles from './styles';
// import stylesC from '../addCoinT/styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-elements';

interface HomeTemplateProps {}

export const HomeTemplate = ({}: HomeTemplateProps) => {
  const navigation = useNavigation();

  const [valueC, setValueC] = useState([] as any[]);

  useEffect(() => {
    findCoins();
  }, [setValueC]);

  const findCoins = async () => {
    try {
      const result = await AsyncStorage.getItem('@coin');
      if (result) {
        valueC.push(JSON.parse(result));
        setValueC([...valueC]);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {!valueC.length ? (
        <View style={{ flex: 1 }}>
          <View>
            <EmptyState type={EmptyStateType.empty_wallet} />
          </View>
          <FloatingAction
            color={GREEN_TINT_1}
            onPressMain={() => {
              navigation.navigate('AddCoinT');
            }}
          />
        </View>
      ) : (
        <View>
          {/* {valueC.map(item => (
            <Text key={item.id}>{item.name}</Text>
          ))} */}
          <FlatList
            data={valueC}
            keyExtractor={item => item}
            renderItem={({ item }) => <Text key={item}>{item.name}</Text>}
          />
          <Button
            onPress={() => {
              navigation.navigate('AddCoinT');
            }}>
            {' '}
            add
          </Button>
        </View>
      )}
    </SafeAreaView>
  );
};

// export const renderList = () =>{

//   <View style={{ flexDirection: 'row' }}>
//         <View style={stylesC.containerLetter}>
//           { == ['Bitcoin'] && (
//             <Text style={stylesC.textInitialLetter}>B</Text>
//           )}
//           {selectedCurrency == ['Ethereum'] && (
//             <Text style={stylesC.textInitialLetter}>E</Text>
//           )}
//           {selectedCurrency == ['Dogecoin'] && (
//             <Text style={stylesC.textInitialLetter}>D</Text>
//           )}
//         </View>
//         <View style={stylesC.containerSelect}>
//           <Text style={[stylesC.textPadrao, { marginLeft: 15 }]}>Coin</Text>
//           <Picker
//             selectedValue={selectedCurrency}
//             onValueChange={itemValue => setSelectedCurrency(itemValue)}>
//             {coin.map(cn => {
//               return <Picker.Item key={cn.length} label={cn} value={cn} />;
//             })}
//           </Picker>
//         </View>
//       </View>
// }
