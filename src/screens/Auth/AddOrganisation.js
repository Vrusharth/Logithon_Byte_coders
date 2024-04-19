import React from 'react';
import {View, Text, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {blackText, blueText, colorTheme, grayText} from '../../constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';

export default AddOrganisation = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Header
          header={'Add Inventory'}
          rightIconName2={'dots-vertical'}
        />
      </View>
      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <View>
          <Text style={[styles.bigText, {marginBottom: 10}]}>
            Select Organization
          </Text>
          <Text style={[styles.smallText, {textAlign: 'left'}]}>
            You belong to the following organisation. Please Select the
            organization which you wish to acess now
          </Text>
          <View
            style={{
              borderColor: colorTheme.borderColor,
              borderBottomWidth: 1,
              padding: 10,
              marginTop: 10,
            }}>
            <Text style={[styles.bigText]}>Organization Name</Text>
            <View
              style={{
                borderRadius: 5,
                borderColor: colorTheme.borderColor,
                borderWidth: 1,
                width: '25%',
                paddingVertical: 10,
                alignSelf: 'flex-end',
              }}>
              <Text
                style={[styles.bigText, {fontSize: 16, textAlign: 'center'}]}>
                Go
              </Text>
            </View>
          </View>
        </View>
        <View>
          <Text style={{textAlign: 'center', fontSize: 16}}>[OR]</Text>
          <Text style={{textAlign: 'center', fontSize: 16}}>
            Tap here to get started by creating a new organization
          </Text>
          <TouchableOpacity
          onPress={()=>navigation.navigate('SetupOrganization')}
            style={{
              borderRadius: 5,
              backgroundColor: colorTheme.primaryColor,
              width: '60%',
              paddingVertical: 10,
              alignSelf: 'center',
              marginVertical:10
            }}>
            <Text style={[styles.bigText, {fontSize: 16, textAlign: 'center',color:colorTheme.secondaryColor,fontWeight:300}]}>
              New Organization
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  },
  content: {
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
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
