import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {blackText, blueText, colorTheme, grayText} from '../../constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import LineTextInput from '../../components/TextInputs/LineTextInput';
import DropDownTextInput from '../../components/TextInputs/DropDownTextInput';
import DropDownLineText from '../../components/TextInputs/DropDownLineText';
import DateTextInput from '../../components/TextInputs/DateTextInput';
import {CountryData, CurrencyData} from '../../assets/data/DropDownData';

export default App = () => {
  const [organizationInfo, setorganizationInfo] = useState({
    inventory_name: '',
    business_location: '',
    company_name: '',
    fiscal_Year: '',
    currency: '',
    Language: '',
    time_zone: '',
    inventory_start_date: '',
  });
  const handleChange = (name, value) => {
    setorganizationInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Header
          header={"Let's setup your organization"}
          rightIconName1={'headset'}
          rightIconName2={'dots-vertical'}
        />
      </View>
      {/* Main Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <LineTextInput
          title={'Inventory Name'}
          atEndIconName={'factory'}
          style={{marginTop: 5}}
          value={organizationInfo.inventory_name}
          handleChange={handleChange}
          textInputParams={'inventory_name'}
          isRequire
        />
        <DropDownTextInput
          inputTitle={'Business Location'}
          data={CountryData}
          style={{marginTop: 5}}
          textInputParams={'business_location'}
          handleChange={handleChange}
          isRequire
        />
        <DropDownLineText
          inputTitle={'Fiscal Year'}
          data={CountryData}
          style={{marginTop: 5}}
          textInputParams={'fiscal_Year'}
          handleChange={handleChange}
          isRequire
        />
        <DropDownLineText
          inputTitle={'Currency'}
          data={CurrencyData}
          style={{marginTop: 5}}
          textInputParams={'currency'}
          handleChange={handleChange}
          isRequire
        />
        <DropDownLineText
          inputTitle={'Language'}
          data={CountryData}
          style={{marginTop: 5}}
          textInputParams={'Language'}
          handleChange={handleChange}
          isRequire
        />
        <DateTextInput inputTitle={'Inventory Start Date'} isRequire  />
      </ScrollView>
      <View style={styles.header}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
  },
  content: {
    flex: 1,
    width: '95%',
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: colorTheme.appBackGroundColor,
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
