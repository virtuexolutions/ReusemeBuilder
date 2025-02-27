import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import {Icon} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {moderateScale} from 'react-native-size-matters';
import navigationService from '../navigationService';
import CustomText from '../Components/CustomText';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {color} from 'native-base/lib/typescript/theme/styled-system';
import CustomButton from '../Components/CustomButton';

const LoginScreen = ({navigationService}) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <Icon
        onPress={() => {
          navigationService.goback();
        }}
        as={Ionicons}
        name="arrow-back"
        size={moderateScale(25, 0.3)}
        color={Color.blue}
        style={{
          position: 'absolute',
          top: moderateScale(20, 0.3),
          left: moderateScale(10, 0.3),
        }}
      />
      <CustomText isBold style={styles.welcomeText}>
        Welcome!
      </CustomText>
      <CustomText isBold style={styles.subtextStyle}>
        Log in to your Approvedocx
      </CustomText>
      <TextInputWithTitle
        iconName={'user'}
        iconType={FontAwesome}
        color={Color.blue}
        setText={setUserName}
        value={userName}
        placeholder={'Username'}
        placeholderColor={Color.grey}
        viewWidth={0.7}
        borderBottomWidth={2}
        borderColor={Color.blue}
        marginTop={moderateScale(40,0.3)}
      />
      <TextInputWithTitle
      iconSize={moderateScale(20,0.3)}
        iconName={'key'}
        iconType={Ionicons}
        color={Color.blue}
        secureText={true}
        setText={setPassword}
        value={password}
        placeholder={'Password'}
        placeholderColor={Color.grey}
        viewWidth={0.7}
        borderBottomWidth={2}
        borderColor={Color.blue}
        marginTop={moderateScale(30, 0.3)}
      />
      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          alignSelf: 'flex-end',
          right: moderateScale(42, 0.3),
        }}>
        <CustomText
          style={{
            fontSize: moderateScale(11, 0.3),
            color: Color.darkbrown,
          }}>
          Forgot password
        </CustomText>
      </TouchableOpacity>
      <CustomButton
        text={'Log In'}
        textColor={Color.white}
        style={{
          width: windowWidth * 0.35,
          height: moderateScale(40, 0.3),
          borderRadius: moderateScale(20, 0.3),
          backgroundColor: Color.darkBlue,
          top:windowHeight *0.05
        }}
      />
      <CustomText style={{
            fontSize: moderateScale(11, 0.3),
            color: Color.darkbrown,
            paddingTop:windowHeight *0.1,
           
          }}>Don’t have an accout ?</CustomText>
      <TouchableOpacity activeOpacity={0.8}>
        <CustomText isBold style={{
            fontSize: moderateScale(18, 0.3),
            color: Color.blue,
          }}>Sign Up</CustomText>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    height: windowHeight,
    backgroundColor: Color.white,
    paddingHorizontal: moderateScale(15, 0.3),
    // paddingVertical: moderateScale(20, 0.6),
    alignItems: 'center',
    paddingTop: windowHeight * 0.2,
    // justifyContent : 'center'
  },
  welcomeText: {
    fontSize: moderateScale(40, 0.3),
    color: Color.darkbrown,
  },
  subtextStyle: {
    fontSize: moderateScale(12, 0.3),
    color: '#333333',
  },
});
