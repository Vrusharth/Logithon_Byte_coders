import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import { colorTheme } from '../../constant';

export default function Logout() {
  const navigation = useNavigation();
  async function handleLogout(params) {
    await AsyncStorage.removeItem('userToken');
    await AsyncStorage.removeItem('profileComplete');
    navigation.navigate('Choice');
  }
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity
        onPress={() => {
          handleLogout()
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
         Log out
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
