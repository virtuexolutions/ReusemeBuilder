import {
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {apiHeader, windowHeight, windowWidth} from '../Utillity/utils';
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
import { setUserToken } from '../Store/slices/auth';
import { useDispatch } from 'react-redux';
import { setUserData } from '../Store/slices/common';
import { Post } from '../Axios/AxiosInterceptorFunction';

const LoginScreen = ({navigation, route}) => {
  const dispatch= useDispatch();
  const fromSignup = route?.params?.fromSignup;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const Login = async () =>{
    const url="login";
    const body={
      email: email,
      password:password,
      // photo:null,
    };
    for(let key in body){
      if(body[key] == ""){
        return ToastAndroid.show(`${key} is required`, ToastAndroid.SHORT);
      }
    }
    setIsLoading(true);
    const response = await Post(url, body,apiHeader());
    setIsLoading(false);
    if(response != undefined){
        dispatch(setUserData(response?.data?.user_info));
        dispatch(setUserToken({token: response?.data?.token }));
    }

  }

  return (
    <SafeAreaView style={styles.container}>
    {fromSignup &&  <Icon
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
      />}
      <CustomText isBold style={styles.welcomeText}>
        Welcome!
      </CustomText>
      <CustomText isBold style={styles.subtextStyle}>
        Log in to your Approvedocx
      </CustomText>
      {/* <TextInputWithTitle
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
      /> */}
      <TextInputWithTitle
          iconName={'mail'}
          iconType={Ionicons}
          color={Color.blue}
          setText={setEmail}
          value={email}
          placeholder={'Type your Email'}
          placeholderColor={Color.grey}
          viewWidth={0.7}
          borderBottomWidth={2}
          borderColor={Color.blue}
          marginTop={moderateScale(30,0.3)}
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
      onPress={()=>{
        navigation.navigate("VerifyEmail")
      }}
        activeOpacity={0.8}
        style={{
          alignSelf: 'flex-end',
          marginTop:moderateScale(7,0.2),
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
      
        text={ isLoading ? <ActivityIndicator color={'white'} size={moderateScale(12,0.2)}/> :'Log In'}
        textColor={Color.white}
        width={windowWidth * 0.35}
        
        style={{
          height: moderateScale(40, 0.3),
          borderRadius: moderateScale(20, 0.3),
          backgroundColor: Color.darkBlue,
          // top:windowHeight *0.05
          marginTop:windowHeight *0.05
        }}
        onPress={() =>{
          Login()
        // dispatch(setUserToken({token:'abcdef'}))
        // navigation.navigate('SignupScreen')

      }}
      />
      <CustomText style={{
            fontSize: moderateScale(11, 0.3),
            color: Color.darkbrown,
            paddingTop:windowHeight *0.05,
           
          }}>Don’t have an accout ?</CustomText>
      <TouchableOpacity activeOpacity={0.8}>
        <CustomText onPress={() => {
          navigation.navigate('SignupScreen')
        }}
        isBold style={{
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
