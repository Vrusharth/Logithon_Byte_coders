import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Switch,
  Pressable,
} from 'react-native';
import {blackText, blueText, colorTheme, grayText} from '../../constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import Header from '../../components/Header';
import LineTextInput from '../../components/TextInputs/LineTextInput';
import RadioButton from '../../components/RadioButton';
import DateTextInput from '../../components/TextInputs/DateTextInput';
import OptionInput from '../../components/TextInputs/OptionInput';
import {Composition_scheme_data} from '../../assets/data/OptionInputData';
import {CurrencyData, CustomDutyData} from '../../assets/data/DropDownData';
import DropDownLineText from '../../components/TextInputs/DropDownLineText';
import {userAuth} from '../../services/userauth';

export default TaxPreference = () => {
  const [isTaxEnabled, setIsTaxEnabled] = useState(false);
  const [iscompositionScheme, setiscompositionScheme] = useState(false);
  const [reverseCharge, setReverseCharge] = useState(false);
  const [isImportexport, setIsImportexport] = useState(false);
  const [disgitalservice, setdisgitalservice] = useState(false);
  const [gstInfo, setGstInfo] = useState({
    gstin: '',
    gstdate: '',
    compostion_scheme_percent: '',
    customduty_tracking: '',
    digital_service: false,
    compostion_scheme: false,
    import_export: false,
    isbuisness_register_gst: false,
  });
  const handleChange = (name, value) => {
    setGstInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  function handleClick(params) {
    try {
      userAuth.GstDetails(gstInfo).then(() => {
        navigation.navigate('SideDrawer');
      });
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
          header={'Gst Settings'}
          leftIconName={'keyboard-backspace'}
          rightIconName2={'check'}
          rightIconName2Fuction={handleClick}
        />
      </View>
      {/* Main Content */}
      <ScrollView>
        <View style={styles.content}>
          <Text
            onPress={() => console.log(gstInfo)}
            style={[
              styles.bigText,
              {fontSize: 16, color: colorTheme.primaryColor, fontWeight: '500'},
            ]}>
            Tax Registration
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text
              style={[
                styles.bigText,
                {fontSize: 16, fontWeight: '400', width: '70%'},
              ]}>
              Is your business registered for GST?
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isTaxEnabled ? colorTheme.blue : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                setIsTaxEnabled(previousState => !previousState);
                handleChange('isbuisness_register_gst', true);
              }}
              value={isTaxEnabled}
            />
          </View>
          {isTaxEnabled && (
            <View>
              <LineTextInput
                title={'GST identification Number (GSTIN)'}
                atEndIconName={'factory'}
                value={gstInfo.gstin}
                handleChange={handleChange}
                textInputParams={'gstin'}
                isRequire
                isiconRequire
                style={{marginTop: 20}}
              />
              <DateTextInput
                inputTitle={'GST Registerd On'}
                isRequire
                textInputParams={'gstdate'}
                handleChange={handleChange}
                style={{marginTop: 20}}
              />
            </View>
          )}
        </View>
        {isTaxEnabled && (
          <>
            <View style={styles.content}>
              <Text
                style={[
                  styles.bigText,
                  {
                    fontSize: 16,
                    color: colorTheme.primaryColor,
                    fontWeight: '500',
                  },
                ]}>
                Composition Scheme
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Text
                  style={[
                    styles.bigText,
                    {fontSize: 16, fontWeight: '400', width: '70%'},
                  ]}>
                  Is your business registered for Composition Scheme?
                </Text>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={iscompositionScheme ? colorTheme.blue : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => {
                    setiscompositionScheme(previousState => !previousState);
                    handleChange('compostion_scheme', true);
                  }}
                  value={iscompositionScheme}
                />
              </View>
              {iscompositionScheme && (
                <OptionInput
                  title={'Composition Scheme Percentage (%)'}
                  data={Composition_scheme_data}
                  isRequire
                  textInputParams={'compostion_scheme_percent'}
                  handleChange={handleChange}
                />
              )}
            </View>
            <View style={styles.content}>
              <Text
                style={[
                  styles.bigText,
                  {
                    fontSize: 16,
                    color: colorTheme.primaryColor,
                    fontWeight: '500',
                  },
                ]}>
                Import / Export (Overseas Trading)
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 20,
                }}>
                <Text
                  style={[
                    styles.bigText,
                    {fontSize: 16, fontWeight: '400', width: '70%'},
                  ]}>
                  Does your business involve overseas trading?
                </Text>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={isImportexport ? colorTheme.blue : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => {
                    setIsImportexport(previousState => !previousState);
                    handleChange('import_export', true);
                  }}
                  value={isImportexport}
                />
              </View>
              {isImportexport && (
                <View>
                  <DropDownLineText
                    inputTitle={'Custom Duty Tracking Account'}
                    data={CustomDutyData}
                    style={{marginTop: 20}}
                    textInputParams={'customduty_tracking'}
                    handleChange={handleChange}
                    isRequire
                  />
                </View>
              )}
            </View>
            <View style={styles.content}>
              <Text
                style={[
                  styles.bigText,
                  {
                    fontSize: 16,
                    color: colorTheme.primaryColor,
                    fontWeight: '500',
                  },
                ]}>
                Digital Service
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: 20,
                  marginBottom: 10,
                }}>
                <Text
                  style={[
                    styles.bigText,
                    {fontSize: 16, fontWeight: '400', width: '70%'},
                  ]}>
                  Do you want to track sale of digital service to overseas
                  customer
                </Text>
                <Switch
                  trackColor={{false: '#767577', true: '#81b0ff'}}
                  thumbColor={disgitalservice ? colorTheme.blue : '#f4f3f4'}
                  ios_backgroundColor="#3e3e3e"
                  onValueChange={() => {
                    setdisgitalservice(previousState => !previousState);
                    handleChange('digital_service', true);
                  }}
                  value={disgitalservice}
                />
              </View>
              {!disgitalservice ? (
                <Text>
                  Enabling this option will let you record and track export of
                  digital service to individuals
                </Text>
              ) : (
                <Text>
                  If you disable this option any digital service created by you
                  will be{' '}
                </Text>
              )}
            </View>
          </>
        )}
      </ScrollView>
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
