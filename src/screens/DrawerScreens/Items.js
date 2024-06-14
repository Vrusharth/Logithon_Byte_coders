import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { colorTheme } from '../../constant';

export default function Items() {
  const navigation = useNavigation();
  function handleClick(params) {
   navigation.navigate('AddNewItem')
  }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity
        onPress={() => {
          handleClick()
        }}
        style={{
          borderRadius: 5,
          backgroundColor: colorTheme.primaryColor,
          width: '60%',
          paddingVertical: 10,
          alignSelf: 'center',
          marginVertical: 10,
        }}>
        <Text
          style={[
            styles.bigText,
            {
              fontSize: 16,
              textAlign: 'center',
              color: colorTheme.secondaryColor,
              fontWeight: 300,
            },
          ]}>
         Add New Item
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
