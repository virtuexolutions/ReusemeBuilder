import React from 'react';
import {ImageBackground, ScrollView, StyleSheet, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import CustomButton from '../Components/CustomButton';
import CustomText from '../Components/CustomText';
import Header from '../Components/Header';
import navigationService from '../navigationService';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {color} from 'native-base/lib/typescript/theme/styled-system';

const EditEmailTamplate2 = props => {
  const data = props?.route?.params?.data;
  console.log('🚀 ~ EditEmailTamplate2 ~ props:', props?.route?.params?.data);
  return (
    <ImageBackground
      style={styles.bg_container}
      source={require('../Assets/Images/bg.png')}>
      <Header title={'Edit cover letter'} hideUser={true} showBack={true} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main_con}>
          <View style={styles.border}></View>
          <View style={styles.txt_con}>
            <CustomText style={styles.txt}> {data?.name}</CustomText>
            <CustomText style={styles.txt2}> {data?.contact}</CustomText>
            <CustomText style={styles.txt2}> {data?.email}</CustomText>
            <CustomText style={styles.txt2}>{data?.address}</CustomText>
          </View>
          <View
            style={{
              alignItems: 'flex-start',

              width: windowWidth * 0.7,
            }}>
            <CustomText style={styles.txt}> {data?.managerName} </CustomText>
            <CustomText style={styles.txt2}>
              hiring represntive, really Great place
            </CustomText>
            <CustomText style={styles.txt2}> {data?.contact}</CustomText>
            <CustomText style={styles.txt2}> {data?.email}</CustomText>
            <CustomText style={styles.txt2}>{data?.address}</CustomText>
            <CustomText
              style={[
                styles.txt,
                {
                  paddingVertical: moderateScale(10, 0.6),
                },
              ]}>
              policy :{data?.subject}
            </CustomText>
            <CustomText style={styles.des}>
             {data?.description}
            </CustomText>

            <CustomText
              // isBold
              style={[
                styles.txt2,
                {
                  fontSize: moderateScale(14, 0.6),
                  color: Color.black,
                },
              ]}>
              {data?.name}
            </CustomText>
            <View style={styles.row}>
              <CustomText style={styles.txt2}> data :</CustomText>
              <CustomText style={styles.txt2}> {data?.date}</CustomText>
            </View>
          </View>
          <View
            style={[
              styles.border,
              {
                position: 'absolute',
                bottom: 60,
                height: windowHeight * 0.004,
              },
            ]}></View>
          <View
            style={[
              styles.border,
              {
                position: 'absolute',
                bottom: 0,
                height: windowHeight * 0.015,
              },
            ]}></View>
        </View>
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

export default EditEmailTamplate2;

const styles = StyleSheet.create({
  bg_container: {
    width: windowWidth,
    alignItems: 'center',
    height: windowHeight,
    justifyContent: 'center',
  },
  main_con: {
    height: windowHeight * 0.8,
    width: windowWidth * 0.95,
    backgroundColor: 'white',
    // paddingHorizontal: moderateScale(20, 0.6),
    alignItems: 'center',
  },
  border: {
    width: windowWidth * 0.85,
    backgroundColor: '#d1e4e2',
    height: windowHeight * 0.015,
    alignSelf: 'center',
  },
  txt_con: {
    width: windowWidth * 0.7,
    paddingVertical: moderateScale(20, 0.6),
    borderBottomWidth: 2,
    borderTopWidth: 2,
    borderColor: '#d1e4e2',
    marginVertical: moderateScale(25, 0.6),
  },
  txt: {
    fontSize: moderateScale(14, 0.6),
  },
  txt2: {
    fontSize: moderateScale(11, 0.6),
    color: Color.grey,
  },
  des: {
    fontSize: moderateScale(11, 0.6),
    width: windowWidth * 0.8,
    paddingBottom: moderateScale(50, 0.6),
  },
  row: {
    flexDirection: 'row',
  },
});
