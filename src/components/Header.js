import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {blackText, colorTheme, grayText} from '../constant';
import {useNavigation, DrawerActions} from '@react-navigation/native';

export default function Header({
  header,
  leftIconName,
  rightIconName1,
  rightIconName2,
  rightIconName2Fuction,
  drawerRequire
}) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: colorTheme.primaryColor,
        paddingVertical: 15,
        paddingHorizontal: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {leftIconName && (
            <TouchableOpacity
              onPress={() => {
                !drawerRequire
                  ? navigation.goBack()
                  : navigation.dispatch(DrawerActions.openDrawer());
              }}>
              <MaterialCommunityIcons
                name={leftIconName ? leftIconName : 'menu'}
                color={colorTheme.secondaryColor}
                size={30}
                style={{marginRight: 15}}
              />
            </TouchableOpacity>
          )}
          <Text style={[styles.bigText, {color: colorTheme.secondaryColor}]}>
            {header.length > 30 ? `${header.substring(0, 30)}.....` : header}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          {rightIconName1 && (
            <MaterialCommunityIcons
              name={rightIconName1}
              color={colorTheme.secondaryColor}
              size={25}
              style={{marginRight: 15}}
            />
          )}
          {rightIconName2 && (
            <MaterialCommunityIcons
              name={rightIconName2}
              color={colorTheme.secondaryColor}
              size={25}
              style={{marginRight: 15}}
              onPress={() => {
                rightIconName2Fuction ? rightIconName2Fuction() : {};
              }}
            />
          )}
        </View>
      </View>
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
});
