import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {blackText, blueText, colorTheme, grayText} from '../constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import OptionInput from './TextInputs/OptionInput';
import {ItemType} from '../assets/data/OptionInputData';
import LineTextInput from './TextInputs/LineTextInput';

export default App = () => {
  const navigation = useNavigation();
  const [ItemData, setItemData] = useState({
    item_type: '',
    item_name:'',
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
    padding: 20,
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
