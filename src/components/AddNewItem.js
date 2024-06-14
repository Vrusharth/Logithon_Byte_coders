import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Switch,
  Pressable,
  TouchableOpacity,
  TextInput,
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
import RadioButton from './RadioButton';
import {userAuth} from '../services/userauth';

export default App = () => {
  const navigation = useNavigation();
  const [isSalesInfo, setisSalesInfo] = useState(false);
  const [isPurchaseInfo, setIsPurchaseInfo] = useState(false);
  const [isMoreField, setisMoreField] = useState(false);
  const [isReturnableItem, setIsReturnableItem] = useState(false);
  const [dimensions, setdimensions] = useState({
    length: '',
    breadth: '',
    height: '',
  });
  const [ItemData, setItemData] = useState({
    item_type: '',
    item_name: '',
    selling_price: 0,
    cost_price: 0,
    item_unit: '',
    sales_account: '',
    purchase_account: '',
    sales_description: '',
    purchase_description: '',
    weight: '',
    manifacturer: '',
    brand: '',
    upc: '',
    mnp: '',
    ean: '',
    isbn: '',
    returnable_item: false,
    dimension: '',
  });

  function handleClick(params) {
    userAuth.PostAddItem(ItemData).then(() => {
      alert('Item added succesfully');
    });
  }
  const handleChange = (name, value) => {
    setItemData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleDimension = (name, value) => {
    setdimensions(prevState => ({
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
            textInputParams={'item_unit'}
            handleChange={handleChange}
            isRequire
          />
          <Pressable
            onPress={() => {
              setIsReturnableItem(!isReturnableItem);
              handleChange('returnable_item', isReturnableItem);
            }}
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <RadioButton selected={isReturnableItem} />
            <Text style={[styles.bigText, {marginLeft: 10}]}>
              Returnable Item
            </Text>
          </Pressable>
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
            keyboardType={'number-pad'}
            style={{marginTop: 20}}
          />
          <DropDownLineText
            inputTitle={'Account'}
            data={AccountData}
            style={{marginTop: 20}}
            textInputParams={'sales_account'}
            handleChange={handleChange}
            isRequire
          />
          <LineTextInput
            title={'Description'}
            value={ItemData.sales_description}
            handleChange={handleChange}
            textInputParams={'sales_description'}
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
            keyboardType={'number-pad'}
          />
          <DropDownLineText
            inputTitle={'Account'}
            data={CustomDutyData}
            style={{marginTop: 20}}
            textInputParams={'purchase_account'}
            handleChange={handleChange}
            isRequire
          />
          <LineTextInput
            title={'Description'}
            value={ItemData.purchase_description}
            handleChange={handleChange}
            textInputParams={'purchase_description'}
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
                padding: 0,
              }}
              onChangeText={text => {
                handleDimension('length', text);
              }}
            />
            <Text>X</Text>
            <TextInput
              style={{
                borderColor: colorTheme.borderColor,
                borderBottomWidth: 1,
                width: '25%',
                padding: 0,
              }}
              onChangeText={text => {
                handleDimension('breadth', text);
              }}
            />
            <Text>X</Text>
            <TextInput
              style={{
                borderColor: colorTheme.borderColor,
                borderBottomWidth: 1,
                width: '25%',
                padding: 0,
              }}
              onChangeText={text => {
                handleDimension('height', text);
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // justifyContent: 'space-evenly',
            }}>
            <Text style={{textAlign: 'left', width: '37%'}}>(Length)</Text>
            <Text style={{textAlign: 'left', width: '37%'}}>(Breadth)</Text>
            <Text>(Height)</Text>
          </View>
          <LineTextInput
            title={'Weight (kg)'}
            value={ItemData.weight}
            handleChange={handleChange}
            textInputParams={'weight'}
            style={{marginTop: 20}}
          />
          <LineTextInput
            title={'Manufacturer'}
            value={ItemData.manifacturer}
            handleChange={handleChange}
            textInputParams={'manifacturer'}
            style={{marginTop: 20}}
          />
          <LineTextInput
            title={'Brand'}
            value={ItemData.brand}
            handleChange={handleChange}
            textInputParams={'brand'}
            style={{marginTop: 20}}
          />
          <LineTextInput
            title={'UPC'}
            value={ItemData.upc}
            handleChange={handleChange}
            textInputParams={'upc'}
            style={{marginTop: 20}}
            isiconRequir
          />
          <LineTextInput
            title={'MPN'}
            value={ItemData.mnp}
            handleChange={handleChange}
            textInputParams={'mnp'}
            style={{marginTop: 20}}
            isiconRequir
          />
          <LineTextInput
            title={'EAN'}
            value={ItemData.ean}
            handleChange={handleChange}
            textInputParams={'ean'}
            style={{marginTop: 20}}
            isiconRequir
          />
          <LineTextInput
            title={'ISBN'}
            value={ItemData.isbn}
            handleChange={handleChange}
            textInputParams={'isbn'}
            style={{marginTop: 20}}
            isiconRequir
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            handleChange(
              'dimension',
              `${dimensions.length}X${dimensions.breadth}X${dimensions.height}`,
            );
            handleClick();
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
            Add Item
          </Text>
        </TouchableOpacity>
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
