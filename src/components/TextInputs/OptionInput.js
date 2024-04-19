import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import RadioButton from '../RadioButton';
import {colorTheme} from '../../constant';

export default function OptionInput({
  title,
  data,
  isRequire,
  textInputParams,
  handleChange,
}) {
  const [selected, setselected] = useState(false);
  
  function handleClick(index, data) {
    handleChange(textInputParams, data);
    setselected(index)
  }
  return (
    <View style={{marginTop: 20}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{color: colorTheme.blue, fontSize: 15, fontWeight: '400'}}>
          {title}
        </Text>
        {isRequire && <Text style={{color: 'red', marginLeft: 3}}>*</Text>}
      </View>
      {data.map((dat, index) => (
        <Pressable
          key={index}
          onPress={() => handleClick(index, dat)}
          style={{flexDirection: 'row', alignItems: 'center', marginTop: 15}}>
          <RadioButton selected={selected === index} />
          <Text
            style={[
              styles.smallText,
              {marginLeft: 10, fontSize: 15, color: 'black'},
            ]}>
            {dat}
          </Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({});
