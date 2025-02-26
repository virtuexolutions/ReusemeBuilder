import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ScreenBoiler from '../Components/ScreenBoiler';
import CustomText from '../Components/CustomText';
import Header from '../Components/Header';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import SearchContainer from '../Components/SearchContainer';
import {FlatList} from 'native-base';

const Home = () => {
  const category = [
    {
      id: 1,
      text: 'resume tempaletes',
    },
    {
      id: 2,
      text: 'cv tempaletes',
    },
    {
      id: 3,
      text: 'cover latter',
    },
    {
      id: 4,
      text: 'career blog',
    },
  ];
  return (
    <ImageBackground
      style={styles.bg_container}
      source={require('../Assets/Images/bg.png')}>
      <Header hideUser={false} showBack={false} />
      <View style={styles.text_con}>
        <CustomText isBold style={styles.h1}>
          hello, ryan
        </CustomText>
        <CustomText style={styles.h2}>0 - 5 years of experience</CustomText>
      </View>
      <SearchContainer
        width={windowWidth * 0.9}
        height={windowHeight * 0.055}
        rightIcon={true}
        placeHolder={'search ..'}
        input={true}
        // data=
      />
      <CustomText style={styles.h3}>What do you need</CustomText>
      <FlatList
        contentContainerStyle={{
          flexDirection: 'row',
        }}
        style={{
          width: '100%',
        }}
        data={category}
        renderItem={({item, index}) => {
          return <View style={styles.category_con}></View>;
        }}
      />
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  bg_container: {
    width: windowWidth,
    height: windowHeight,
    alignItems: 'left',
    paddingHorizontal: moderateScale(10, 0.6),
  },
  h1: {
    fontSize: moderateScale(25, 0.6),
    color: Color.white,
    textAlign: 'left',
  },
  h2: {
    fontSize: moderateScale(15, 0.6),
    color: Color.white,
    textAlign: 'left',
  },
  text_con: {
    width: '95%',
    paddingVertical: moderateScale(10, 0.6),
  },
  h3: {
    fontSize: moderateScale(15, 0.6),
    backgroundColor: 'red',
    color: Color.white,
  },
  category_con: {
    height: windowHeight * 0.065,
    width: windowWidth * 0.2,
    backgroundColor: Color.white,
    marginHorizontal: moderateScale(8, 0.3),
    marginVertical: moderateScale(5, 0.3),
    borderRadius: moderateScale(10, 0.6),
  },
});
