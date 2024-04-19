import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colorTheme, blackText, blueText, grayText} from '../../constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import LineTextInput from '../../components/TextInputs/LineTextInput';
import DropDownTextInput from '../../components/TextInputs/DropDownTextInput';
import {CountryData, stateData} from '../../assets/data/DropDownData';
import DropDownLineText from '../../components/TextInputs/DropDownLineText';
import {userAuth} from '../../services/userauth';

export default function Signup() {
  const navigation = useNavigation();
  const [registerInfo, setRegisterInfo] = useState({
    companyname: '',
    fullname: '',
    email: '',
    password: '',
    phone_no: '',
    country: '',
    state: '',
  });
  const handleChange = (name, value) => {
    setRegisterInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  function handleClick(params) {
    try {
      userAuth.RegisterUser(registerInfo);
      navigation.navigate('AddOrganisation');
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Header
        header={'Registration'}
        leftIconName={'keyboard-backspace'}
        rightIconName2={'check'}
      />
      <ScrollView>
        <View style={styles.subContainer}>
          <Text
            style={[
              styles.bigText,
              {
                marginVertical: 10,
                textAlign: 'center',
                fontSize: 20.9,
                fontWeight: '300',
              },
            ]}>
            Simplify Inventory Management
          </Text>
          <LineTextInput
            title={'Company Name'}
            atEndIconName={'factory'}
            style={{marginTop: 5}}
            value={registerInfo.companyname}
            handleChange={handleChange}
            textInputParams={'companyname'}
          />
          <LineTextInput
            title={'Full Name'}
            atEndIconName={'rename-box'}
            style={{marginTop: 5}}
            value={registerInfo.fullname}
            handleChange={handleChange}
            textInputParams={'fullname'}
          />
          <LineTextInput
            title={'Email Address'}
            atEndIconName={'email'}
            style={{marginTop: 5}}
            value={registerInfo.email}
            handleChange={handleChange}
            textInputParams={'email'}
          />
          <LineTextInput
            title={'Password'}
            atEndIconName={'key-variant'}
            style={{marginTop: 5}}
            value={registerInfo.password}
            handleChange={handleChange}
            textInputParams={'password'}
          />
          <LineTextInput
            title={'Phone Number'}
            atEndIconName={'phone'}
            style={{marginTop: 5}}
            value={registerInfo.phone_no}
            handleChange={handleChange}
            textInputParams={'phone_no'}
            keyboardType={'number-pad'}
          />
          <DropDownLineText
            inputTitle={'Choose Country/Region'}
            data={CountryData}
            style={{marginTop: 5}}
            textInputParams={'country'}
            handleChange={handleChange}
          />
          <DropDownLineText
            inputTitle={'State'}
            data={stateData}
            style={{marginTop: 5}}
            textInputParams={'state'}
            handleChange={handleChange}
          />
          <TouchableOpacity
            onPress={() => handleClick()}
            style={{
              backgroundColor: colorTheme.primaryColor,
              paddingVertical: 20,
              paddingHorizontal: 30,
              borderRadius: 5,
              elevation: 5,
              width: '80%',
              alignSelf: 'center',
              marginVertical: 30,
            }}>
            <Text style={{color: 'white', textAlign: 'center', marginLeft: 10}}>
              Create Account
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colorTheme.appBackGroundColor,
  },
  subContainer: {
    width: '90%',
    height: 'auto',
    alignSelf: 'center',
    // backgroundColor:"red"
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
});
