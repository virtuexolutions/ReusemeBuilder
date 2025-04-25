import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Header from '../Components/Header';
import CustomImage from '../Components/CustomImage';
import CustomButton from '../Components/CustomButton';
import {moderateScale} from 'react-native-size-matters';
import navigationService from '../navigationService';

const ResumeScreen = props => {
  const data = props?.route?.params?.data;
  const detailData = props?.route?.params?.detailData;

  const category = props?.route?.params?.type;
  return (
    <ImageBackground
      style={styles.bg_container}
      source={require('../Assets/Images/bg.png')}>
      <Header hideUser={true} showBack={true} />
      <View
        style={{
          justifyContent: 'center',

          alignItems: 'center',
        }}>
        <View
          style={{
            width: windowWidth * 0.9,
            height: windowHeight * 0.7,
          }}>
          <CustomImage
            source={data}
            style={{
              width: '100%',
              height: '100%',
              resizeMode: 'contain',
            }}
          />
        </View>
        <CustomButton
          text={'Edit'}
          textColor={Color.darkBlue}
          onPress={() => {
            category == 'resume'
              ? navigationService.navigate('EditResume', {data: data})
              : category == 'career'
              ? navigationService.navigate('EditBlogPost', {
                  data: data,
                  type: detailData,
                })
              : category === 'survay'
              ? navigationService.navigate('ChecklistForm', {data: data})
              : navigationService.navigate('EditCoverLetter', {
                  data: data,
                  type: 'email',
                });
          }}
          width={windowWidth * 0.65}
          height={windowHeight * 0.075}
          borderRadius={moderateScale(20, 0.3)}
          bgColor={Color.white}
          marginTop={moderateScale(20, 0.6)}
        />
      </View>
    </ImageBackground>
  );
};

export default ResumeScreen;

const styles = StyleSheet.create({
  bg_container: {
    width: windowWidth,
    height: windowHeight,
    // alignItems: 'left',
    // paddingHorizontal: moderateScale(10, 0.6),
  },
});
