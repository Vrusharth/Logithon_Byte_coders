import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {blackText, blueText, colorTheme, grayText} from '../../constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import LineTextInput from '../../components/TextInputs/LineTextInput';
import DropDownTextInput from '../../components/TextInputs/DropDownTextInput';
import DropDownLineText from '../../components/TextInputs/DropDownLineText';
import DateTextInput from '../../components/TextInputs/DateTextInput';
import {CountryData, CurrencyData, FiscalYearData, PortalLanuuag} from '../../assets/data/DropDownData';
import { userAuth } from '../../services/userauth';

export default App = () => {
  const [organizationInfo, setorganizationInfo] = useState({
    inventory_name: '',
    inventory_location: '',
    fiscal_year: '',
    currency: '',
    language: '',
    inventory_startdate: '',
  });
  const handleChange = (name, value) => {
    setorganizationInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  function handleClick(params) {
    try {
      userAuth.AddInventory(organizationInfo).then(()=>{
        navigation.navigate('TaxPreference');
      })
    } catch (error) {
      console.log(error);
    }
  }
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
      <View style={styles.content}>
        <ScrollView>
          <LineTextInput
            title={'Inventory Name'}
            atEndIconName={'factory'}
            value={organizationInfo.inventory_name}
            handleChange={handleChange}
            textInputParams={'inventory_name'}
            isRequire
          />
          <DropDownTextInput
            inputTitle={'Business Location'}
            data={CountryData}
            style={{marginTop: 20}}
            textInputParams={'inventory_location'}
            handleChange={handleChange}
            isRequire
          />
          <DropDownLineText
            inputTitle={'Fiscal Year'}
            data={FiscalYearData}
            style={{marginTop: 20}}
            textInputParams={'fiscal_year'}
            handleChange={handleChange}
            isRequire
          />
          <DropDownLineText
            inputTitle={'Currency'}
            data={CurrencyData}
            style={{marginTop: 20}}
            textInputParams={'currency'}
            handleChange={handleChange}
            isRequire
          />
          <DropDownLineText
            inputTitle={'Language'}
            data={PortalLanuuag}
            style={{marginTop: 20}}
            textInputParams={'language'}
            handleChange={handleChange}
            isRequire
          />
          <DateTextInput
            inputTitle={'Inventory Start Date'}
            isRequire
            textInputParams={'inventory_startdate'}
            handleChange={handleChange}
            style={{marginTop: 20}}
          />
        </ScrollView>
      </View>
      <View style={styles.header}>
        <TouchableOpacity
            onPress={()=>handleClick()}
          style={{
            borderRadius: 5,
            backgroundColor: colorTheme.primaryColor,
            width: '60%',
            paddingVertical: 10,
            alignSelf: 'center',
            marginVertical: 10,
            elevation: 2,
          }}>
          <Text
            style={[
              styles.bigText,
              {
                fontSize: 18,
                textAlign: 'center',
                color: colorTheme.secondaryColor,
                fontWeight: 400,
              },
            ]}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
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
    alignItems:'center',
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
