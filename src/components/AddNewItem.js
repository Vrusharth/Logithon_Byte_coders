import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  Pressable,
} from 'react-native';
import {blackText, blueText, colorTheme, grayText} from '../constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import OptionInput from './TextInputs/OptionInput';
import {ItemType} from '../assets/data/OptionInputData';
import LineTextInput from './TextInputs/LineTextInput';
import {
  AccountData,
  CustomDutyData,
  UnitData,
} from '../assets/data/DropDownData';
import DropDownLineText from './TextInputs/DropDownLineText';
import {TextInput} from 'react-native-gesture-handler';

export default App = () => {
  const navigation = useNavigation();
  const [isSalesInfo, setisSalesInfo] = useState(false);
  const [isPurchaseInfo, setIsPurchaseInfo] = useState(false);
  const [isMoreField, setisMoreField] = useState(false);
  const [ItemData, setItemData] = useState({
    item_type: '',
    item_name: '',
    selling_price: '',
    cost_price: '',
    unit: '',
    account_sale: '',
    account_cost: '',
    description_sale: '',
    description_cost: '',
  });
  const handleChange = (name, value) => {
    setItemData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <View style={styles.container}>
      {/* Main Content */}
      <ScrollView>
        <View style={styles.content}>
          <OptionInput
            title={'Item Type'}
            data={ItemType}
            textInputParams={'item_type'}
            handleChange={handleChange}
          />
          <LineTextInput
            title={'Item Name'}
            value={ItemData.item_name}
            handleChange={handleChange}
            textInputParams={'item_name'}
            isRequire
            style={{marginTop: 20}}
          />
          <DropDownLineText
            inputTitle={'Unit'}
            data={UnitData}
            style={{marginTop: 20}}
            textInputParams={'unit'}
            handleChange={handleChange}
            isRequire
          />
          <OptionInput
            data={['Returnable Item']}
            textInputParams={'item_type'}
            handleChange={handleChange}
          />
        </View>
        <View style={styles.content}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={[
                styles.bigText,
                {fontSize: 17, fontWeight: '500', width: '70%'},
              ]}>
              Sales Information
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isSalesInfo ? colorTheme.blue : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                setisSalesInfo(previousState => !previousState);
              }}
              value={isSalesInfo}
            />
          </View>
          <LineTextInput
            title={'Selling Price (INR)'}
            value={ItemData.selling_price}
            handleChange={handleChange}
            textInputParams={'selling_price'}
            isRequire
            style={{marginTop: 20}}
          />
          <DropDownLineText
            inputTitle={'Account'}
            data={AccountData}
            style={{marginTop: 20}}
            textInputParams={'account_sale'}
            handleChange={handleChange}
            isRequire
          />
          <LineTextInput
            title={'Description'}
            value={ItemData.description_sale}
            handleChange={handleChange}
            textInputParams={'description_sale'}
            style={{marginTop: 20}}
          />
        </View>
        <View style={styles.content}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={[
                styles.bigText,
                {fontSize: 17, fontWeight: '500', width: '70%'},
              ]}>
              Purchase Information
            </Text>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isPurchaseInfo ? colorTheme.blue : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => {
                setIsPurchaseInfo(previousState => !previousState);
              }}
              value={isPurchaseInfo}
            />
          </View>
          <LineTextInput
            title={'Cost Price (INR)'}
            value={ItemData.cost_price}
            handleChange={handleChange}
            textInputParams={'cost_price'}
            isRequire
            style={{marginTop: 20}}
          />
          <DropDownLineText
            inputTitle={'Account'}
            data={CustomDutyData}
            style={{marginTop: 20}}
            textInputParams={'account_cost'}
            handleChange={handleChange}
            isRequire
          />
          <LineTextInput
            title={'Description'}
            value={ItemData.description_cost}
            handleChange={handleChange}
            textInputParams={'description_cost'}
            style={{marginTop: 20}}
          />
        </View>
        <View style={[styles.content, {marginBottom: 20}]}>
          <Pressable
            onPress={() => {
              setisMoreField(!isMoreField);
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={[
                styles.bigText,
                {fontSize: 17, fontWeight: '500', width: '70%'},
              ]}>
              More Field
            </Text>
            <MaterialCommunityIcons
              name={'arrow-up-drop-circle'}
              size={25}
              color={colorTheme.primaryColor}
            />
          </Pressable>
          <Text
            style={{color: colorTheme.blue, fontSize: 15, fontWeight: '400'}}>
            Dimensions
            <Text style={{color: 'gray', fontSize: 15, fontWeight: '400'}}>
              {' '}
              (cm)
            </Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput
              style={{
                borderColor: colorTheme.borderColor,
                borderBottomWidth: 1,
                width: '25%',
              }}
            />
            <Text>X</Text>
            <TextInput
              style={{
                borderColor: colorTheme.borderColor,
                borderBottomWidth: 1,
                width: '25%',
              }}
            />
            <Text>X</Text>
            <TextInput
              style={{
                borderColor: colorTheme.borderColor,
                borderBottomWidth: 1,
                width: '25%',
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // justifyContent: 'space-evenly',
            }}>
            <Text style={{textAlign:'left',width:'37%'}}>Length</Text>
            <Text style={{textAlign:'left',width:'37%'}}>Length</Text>
            <Text>Length</Text>
          </View>
        </View>
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
    backgroundColor: colorTheme.appBackGroundColor,
    padding: 15,
    elevation: 2,
    borderRadius: 5,
    marginTop: 20,
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
