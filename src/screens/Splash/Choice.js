import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {blackText, blueText, colorTheme, grayText} from '../../constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';

export default Choice = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}></View>
      {/* Main Content */}
        <View style={{backgroundColor: 'white', paddingHorizontal: 20}}>
          <Text
            style={[
              styles.bigText,
              {marginVertical: 10, textAlign: 'center', fontSize: 20.9},
            ]}>
            Complete inventory management
          </Text>
          <Text style={[styles.smallText, {textAlign: 'center'}]}>
            Manage your Contacts, Transaction and items easily
          </Text>
          <TouchableOpacity
              style={{
                backgroundColor: colorTheme.secondaryColor,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 2,
                elevation:5,
                width:'70%',
                alignSelf:'center',
                marginTop:20,
                flexDirection:'row',
                alignItems:'center'
              }}>
              <MaterialCommunityIcons name={'google'} size={25} color={colorTheme.primaryColor}/>
              <Text style={{color: 'black',textAlign:'center',marginLeft:10}}>Sign in with Google</Text>
            </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              alignItems: 'center',
              marginTop:30
            }}>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Signup')}
              style={{
                backgroundColor: colorTheme.primaryColor,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 2,
                elevation:5,
              }}>
              <Text style={{color: 'white'}}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>navigation.navigate('Login')}
              style={{
                backgroundColor: colorTheme.secondaryColor,
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 2,
                elevation:5,
              }}>
              <Text style={{color: 'black'}}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorTheme.appBackGroundColor,
  },
  header: {
    width: '100%',
    height: '65%',
  },
  content: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
    elevation: 2,
    borderRadius: 5,
  },
  bigText: {
    fontSize: blackText.fontSize,
    color: blackText.color,
    fontWeight: blackText.fontWeight,
  },
  smallText: {
    fontSize: grayText.fontSize,
    color: grayText.color,
    fontWeight: grayText.fontWeight,
  },
  blueText: {
    fontSize: blueText.fontSize,
    color: blueText.color,
    fontWeight: blueText.fontWeight,
  },
  textInput: {
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 7,
    borderWidth: 1,
    borderColor: '#d3d2d6',
    height: 200,
    textAlignVertical: 'top',
  },
  image: {
    width: 110,
    height: 110,
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: colorTheme.primaryColor,
  },
});
