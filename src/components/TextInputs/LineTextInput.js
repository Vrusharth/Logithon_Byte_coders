import {Keyboard, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colorTheme} from '../../constant';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function LineTextInput({
  title,
  value,
  style,
  isRequire,
  isiconRequire,
  placeholder,
  keyboardType,
  handleChange,
  textInputParams,
  atEndIconName,
}) {
  return (
    <View
      style={{
        ...style,
        borderColor: colorTheme.borderColor,
        borderBottomWidth: 1,
        paddingVertical: 0,
      }}>
      {title && (
        <View style={{flexDirection: 'row'}}>
          <Text
            style={{color: colorTheme.blue, fontSize: 15, fontWeight: '400'}}>
            {title}
          </Text>
          {isRequire && <Text style={{color: 'red', marginLeft: 3}}>*</Text>}
          {isiconRequire && (
            <MaterialCommunityIcons
              name={'alert-circle-outline'}
              color={'black'}
              size={20}
              style={{marginLeft: 5}}
            />
          )}
        </View>
      )}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInput
          style={{paddingVertical: 5, width: atEndIconName ?'90%':'100%'}}
          onChangeText={text => {
            handleChange(textInputParams, text);
          }}
          value={value}
          placeholder={placeholder ? placeholder : ''}
          keyboardType={keyboardType ? keyboardType : 'default'}
        />
        {atEndIconName && (
          <MaterialCommunityIcons
            name={atEndIconName}
            color={colorTheme.borderColor}
            size={25}
            style={{}}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
