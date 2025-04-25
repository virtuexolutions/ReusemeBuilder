import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomImage from '../Components/CustomImage';
import CustomText from '../Components/CustomText';
import Header from '../Components/Header';
import {windowHeight, windowWidth} from '../Utillity/utils';
import CustomButton from '../Components/CustomButton';
import navigationService from '../navigationService';

const OnboardingScreen = props => {
  const data = props?.route?.params?.data;
  const data1 = props?.route?.params?.design_data;
  console.log('🚀 ~ data1:', data1?.templeteType);
  return (
    <ImageBackground
      style={styles.bg_container}
      source={require('../Assets/Images/bg.png')}>
      <Header title={'Edit cover letter'} hideUser={true} showBack={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {data1?.templeteType == 1 ? (
          <View style={styles.main_container}>
            <CustomText style={styles.h1_text}>{data?.companyName}</CustomText>
            <CustomText style={styles.h2_text}>{data?.heading}</CustomText>
            <View style={styles.image_con}>
              <CustomImage style={styles.image} source={{uri: data?.image}} />
            </View>
            <CustomText style={styles.h3_text}>{data?.name}</CustomText>
            <CustomText style={styles.h4_text}>{data?.designation}</CustomText>
            <View style={styles.line}></View>
            <CustomText style={styles.description}>{data?.details}</CustomText>
            <CustomText style={styles.h5_text}>best regards.</CustomText>
            <CustomText
              style={[
                styles.h5_text,
                {
                  paddingTop: moderateScale(0, 0.6),
                },
              ]}>
              {data?.regards}
            </CustomText>

            <View style={styles.con}>
              <View style={styles.sec_line}></View>
              <CustomText style={styles.h6_text}>Mr. james Gordon</CustomText>
            </View>
          </View>
        ) : (
          <ImageBackground
            style={styles.main_container}
            source={require('../Assets/Images/TEM_BG.png')}>
            {/* <View style={styles.row}></View> */}
            <CustomText style={styles.h1_text}>{data?.companyName}</CustomText>
            <CustomText style={styles.h2_text}>{data?.heading}</CustomText>
            <View style={styles.circle_image}>
              <CustomImage style={styles.image} source={{uri: data?.image}} />
            </View>
            <CustomText style={styles.h3_text}>{data?.name}</CustomText>
            <CustomText style={styles.h4_text}>{data?.designation}</CustomText>
            <View
              style={[
                styles.line,
                {
                  backgroundColor:
                    data1?.templeteType == 1 ? Color.grey : '#07a39f',
                },
              ]}></View>
            <CustomText style={styles.description}>{data?.details}</CustomText>
            <CustomText style={styles.h5_text}>best regards.</CustomText>
            <CustomText
              style={[
                styles.h5_text,
                {
                  paddingTop: moderateScale(0, 0.6),
                },
              ]}>
              {data?.regards}
            </CustomText>

            <View style={styles.con}>
              <View style={styles.sec_line}></View>
              <CustomText style={styles.h6_text}>Mr. james Gordon</CustomText>
            </View>
          </ImageBackground>
        )}
        <CustomButton
          text={'save'}
          textColor={Color.darkBlue}
          onPress={() => {
            navigationService.navigate('Home');
            // console.log('first', skills);
            // onPressConfirm();
          }}
          width={windowWidth * 0.8}
          height={windowHeight * 0.06}
          borderRadius={moderateScale(20, 0.3)}
          bgColor={Color.white}
          marginTop={moderateScale(20, 0.6)}
          marginBottom={moderateScale(30, 0.6)}
        />
      </ScrollView>
    </ImageBackground>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  main_container: {
    height: windowHeight * 0.85,
    width: windowWidth * 0.95,
    paddingHorizontal: moderateScale(20, 0.6),
    paddingVertical: moderateScale(40, 0.6),
    alignItems: 'center',

    backgroundColor: '#fbe3d1',
  },
  h1_text: {
    fontSize: moderateScale(16, 0.6),
    color: Color.grey,
  },
  h2_text: {
    paddingTop: moderateScale(20, 0.6),
    fontSize: moderateScale(26, 0.6),
    color: Color.grey,
  },
  image_con: {
    height: windowHeight * 0.25,
    width: windowWidth * 0.4,
    borderTopLeftRadius: 80,
    borderTopRightRadius: 80,
    overflow: 'hidden',
    marginTop: moderateScale(20, 0.6),
  },
  image: {
    height: '100%',
    width: '100%',
  },
  h3_text: {
    paddingTop: moderateScale(10, 0.6),
    fontSize: moderateScale(30, 0.6),
    color: Color.grey,
    letterSpacing: 0.5,
  },
  h4_text: {
    fontSize: moderateScale(14, 0.6),
    color: Color.grey,
    marginBottom: moderateScale(30, 0.6),
  },
  line: {
    width: windowWidth * 0.15,
    height: 1,
    backgroundColor: Color.grey,
  },
  description: {
    fontSize: moderateScale(11, 0.6),
    color: Color.grey,
    paddingTop: moderateScale(10, 0.6),
  },
  h5_text: {
    fontSize: moderateScale(11, 0.6),
    alignItems: 'flex-start',
    width: '100%',
    paddingTop: moderateScale(15, 0.6),
    color: Color.grey,
  },
  h6_text: {
    fontSize: moderateScale(11, 0.6),
    alignItems: 'flex-start',
    width: '100%',
    paddingTop: moderateScale(5, 0.6),
    color: Color.grey,
  },
  con: {
    position: 'absolute',
    bottom: 50,
    left: 22,
  },
  sec_line: {
    width: windowWidth * 0.15,
    height: 1,
    backgroundColor: Color.grey,
    alignItems: 'flex-start',
  },
  circle_image: {
    height: windowHeight * 0.2,
    width: windowHeight * 0.2,
    borderRadius: (windowHeight * 0.2) / 2,
    overflow: 'hidden',
    marginTop: moderateScale(25, 0.6),
    borderWidth: 2,
    borderColor: '#07a39f',
  },
  bg_container: {
    width: windowWidth,
    alignItems: 'center',
    height: windowHeight,
    justifyContent: 'center',
  },
});
