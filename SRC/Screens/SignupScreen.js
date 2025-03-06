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
  import Feather from 'react-native-vector-icons/Feather';
  
  import {color} from 'native-base/lib/typescript/theme/styled-system';
  import CustomButton from '../Components/CustomButton';
import { useDispatch } from 'react-redux';
import { setUserToken } from '../Store/slices/auth-slice';
  
  const SignupScreen = ({navigation}) => {
    const dispatch = useDispatch()
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState(''); 
    const [email, setEmail] = useState(''); 
    
    return (
      <SafeAreaView style={styles.container}>
        <Icon
          onPress={() => {
            navigation.goback();
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
          Sign Up!
        </CustomText>
        <CustomText isBold style={styles.subtextStyle}>
        Create a New Account
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
          placeholder={'Type your password'}
          placeholderColor={Color.grey}
          viewWidth={0.7}
          borderBottomWidth={2}
          borderColor={Color.blue}
          marginTop={moderateScale(30, 0.3)}
        />
        <CustomButton
          text={'Create Account'}
          textColor={Color.white}
          onPress={()=>{
            dispatch(setUserToken({token: "abcdef"}))          
}}
          style={{
            width: windowWidth * 0.55,
            height: moderateScale(45, 0.3),
            borderRadius: moderateScale(20, 0.3),
            backgroundColor: Color.darkBlue,
            top:windowHeight *0.055
          }}
        />
        <CustomText style={{
              fontSize: moderateScale(11, 0.3),
              color: Color.darkbrown,
              paddingTop:windowHeight *0.09,
             
            }}>Do You Have An Account ?</CustomText>
        <TouchableOpacity 
        onPress={()=>{
          navigation.navigate("LoginScreen")
        }}
        activeOpacity={0.8}>
          
          <CustomText 
          
          isBold style={{
              fontSize: moderateScale(18, 0.3),
              color: Color.blue,
            }}>Log in</CustomText>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };
  
  export default SignupScreen;
  
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
      fontSize: moderateScale(13, 0.3),
      color: '#333333',
    },
  });
  