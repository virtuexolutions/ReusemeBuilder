import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import CustomText from '../Components/CustomText';
import Header from '../Components/Header';
import {windowHeight, windowWidth} from '../Utillity/utils';
import {moderateScale} from 'react-native-size-matters';
import Color from '../Assets/Utilities/Color';
import SearchContainer from '../Components/SearchContainer';
import {FlatList, ScrollView} from 'native-base';
import CustomImage from '../Components/CustomImage';
import {Rating} from 'react-native-ratings';
import {useSelector} from 'react-redux';
import navigationService from '../navigationService';

const Home = () => {
  const userData = useSelector(state => state.commonReducer.userData);
  const [selectedCategoty, setSelectedCategory] = useState({
    id: 1,
    text: 'resume',
    subtext: 'tempaletes',
  });
  const category = [
    {
      id: 1,
      text: 'resume',
      subtext: 'tempaletes',
    },
    {
      id: 2,
      text: 'email',
      subtext: 'tempaletes',
    },
    {
      id: 3,
      text: 'cover',
      subtext: 'letter',
    },
    {
      id: 4,
      text: 'career',
      subtext: 'blog',
    },
  ];
  const resumeData = [
    {
      id: 1,
      heading: 'Creative ',
      description:
        'Land your dream job in the creative industries by using this creative resume template, which will make your application stand out.',
      image: require('../Assets/Images/resume.jpeg'),
    },
    // {
    //   id: 2,
    //   heading: 'Creative',
    //   description:
    //     'Land your dream job in the creative industries by using this creative resume template, which will make your application stand out.',
    //   image: require('../Assets/Images/resume.jpeg'),
    // },
    // {
    //   id: 3,
    //   heading: 'Creative',
    //   description:
    //     'Land your dream job in the creative industries by using this creative resume template, which will make your application stand out.',
    // },
    // {
    //   id: 4,
    //   heading: 'Creative',
    //   description:
    //     'Land your dream job in the creative industries by using this creative resume template, which will make your application stand out.',
    // },
    // {
    //   id: 5,
    //   heading: 'Creative',
    //   description:
    //     'Land your dream job in the creative industries by using this creative resume template, which will make your application stand out.',
    // },
    // {
    //   id: 6,
    //   heading: 'Creative',
    //   description:
    //     'Land your dream job in the creative industries by using this creative resume template, which will make your application stand out.',
    // },
    // {
    //   id: 7,
    //   heading: 'Creative',
    //   description:
    //     'Land your dream job in the creative industries by using this creative resume template, which will make your application stand out.',
    // },
  ];
  const coverletterData = [
    {
      id: 1,
      heading: 'Creative',
      description:
        'Land your dream job in the creative industries by using this creative resume template, which will make your application stand out.',
      image: require('../Assets/Images/coverletter.png'),
    },
    // {
    //   id: 2,
    //   heading: 'Creative',
    //   description:
    //     'Land your dream job in the creative industries by using this creative resume template, which will make your application stand out.',
    //   image: require('../Assets/Images/resume.jpeg'),
    // },
  ];
  const careerBlogdata = [
    {
      id: 1,
      heading: 'Creative',
      description:
        'Land your dream job in the creative industries by using this creative resume template, which will make your application stand out.',
      image: require('../Assets/Images/blogbg.png'),
    },
  ];
  const cvdata = [
    {
      id: 1,
      heading: 'Creative',
      description:
        'Land your dream job in the creative industries by using this creative resume template, which will make your application stand out.',
      image: require('../Assets/Images/email.jpeg'),
    },
  ];
  return (
    <ImageBackground
      style={styles.bg_container}
      source={require('../Assets/Images/bg.png')}>
      <Header hideUser={false} showBack={false} />

      <View style={styles.text_con}>
        <CustomText isBold style={styles.h1}>
          hello, {userData?.name}
        </CustomText>
        <CustomText style={styles.h2}>0 - 5 years of experience</CustomText>
      </View>
      <View
        style={{
          height: windowHeight * 0.07,
          paddingHorizontal: moderateScale(10, 0.6),
          marginVertical: moderateScale(10, 0.6),
        }}>
        <SearchContainer
          width={windowWidth * 0.95}
          height={moderateScale(50, 0.6)}
          // rightIcon={true}
          placeHolder={'search ..'}
          input={true}
          // data=
        />
      </View>

      <CustomText style={styles.h3}>What do you need</CustomText>
      <View
        style={{
          width: '100%',
          height: windowHeight * 0.1,
          paddingHorizontal: moderateScale(10, 0.6),
        }}>
        <FlatList
          contentContainerStyle={{
            flexDirection: 'row',
          }}
          style={{
            width: '100%',
            height: windowHeight * 0.05,
          }}
          data={category}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setSelectedCategory(item);
                }}
                style={styles.category_con}>
                <CustomText>{item?.text}</CustomText>
                <CustomText>{item?.subtext}</CustomText>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.row}>
        <CustomText
          isBold
          style={[
            styles.txt,
            {
              fontSize: moderateScale(15, 0.6),
            },
          ]}>
          {selectedCategoty?.text} {selectedCategoty?.subtext}
        </CustomText>
        <CustomText style={styles.txt}>See more</CustomText>
      </View>
      <View
        style={{
          width: '100%',
          height: windowHeight * 0.8,
          paddingHorizontal: moderateScale(10, 0.6),
          paddingBottom: moderateScale(12, 0.2),
        }}>
        <FlatList
          style={{
            // width: '100%',
            height: '100%',
            // backgroundColor:"red"
          }}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          data={
            selectedCategoty?.text == 'resume'
              ? resumeData
              : selectedCategoty?.text == 'cover'
              ? coverletterData
              : selectedCategoty?.text == 'career'
              ? careerBlogdata
              : cvdata
          }
          ListFooterComponent={() => {
            return <View style={{height: windowHeight * 0.2}} />;
          }}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigationService.navigate('ResumeScreen', {
                    data: item?.image,
                    type :selectedCategoty?.text
                  })
                }
                style={styles.card}>
                <View style={styles.card_image}>
                  <CustomImage
                    source={item?.image}
                    style={{
                      height: '100%',
                      width: '100%',
                    }}
                  />
                </View>
                <View style={styles.content}>
                  <View>
                    <CustomText style={styles.heading}>
                      {item?.heading}
                    </CustomText>
                    <CustomText style={styles.description}>
                      {item?.description}
                    </CustomText>
                  </View>
                  <View style={styles.ratingView}>
                    <Rating
                      type="custom"
                      startingValue={4}
                      ratingCount={5}
                      imageSize={moderateScale(12, 0.3)}
                      style={
                        {
                          // width: windowWidth * 0.04,
                        }
                      }
                      ratingBackgroundColor={'white'}
                    />
                    <CustomText
                      style={{
                        fontSize: moderateScale(12, 0.2),
                        color: Color.grey,
                      }}>
                      1/16
                    </CustomText>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        
        />
        <View style={{height: windowHeight * 0.14}} />
      </View>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  bg_container: {
    width: windowWidth,
    height: windowHeight,
    // alignItems: 'left',
    // paddingHorizontal: moderateScale(10, 0.6),
  },
  h1: {
    fontSize: moderateScale(25, 0.6),
    color: Color.white,
    textAlign: 'left',
    marginVertical: moderateScale(2, 0.6),
  },
  h2: {
    fontSize: moderateScale(15, 0.6),
    color: Color.white,
    textAlign: 'left',
  },
  text_con: {
    width: '95%',
    // paddingVertical: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
  },
  h3: {
    fontSize: moderateScale(15, 0.6),
    color: Color.white,
    paddingVertical: moderateScale(10, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
  },
  category_con: {
    width: windowWidth * 0.22,
    backgroundColor: Color.white,
    marginHorizontal: moderateScale(3, 0.3),
    marginVertical: moderateScale(5, 0.3),
    borderRadius: moderateScale(10, 0.6),
    alignItems: 'center',
    paddingVertical: moderateScale(15, 0.6),
  },
  item_txt: {
    fontSize: moderateScale(12, 0.6),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(10, 0.6),
  },
  txt: {
    fontSize: moderateScale(13, 0.6),
    color: Color.white,
  },
  card: {
    width: windowWidth * 0.95,
    backgroundColor: Color.white,
    // height: windowHeight * 0.11,
    borderRadius: moderateScale(12, 0.6),
    flexDirection: 'row',
    gap: moderateScale(12, 0.3),
    marginTop: moderateScale(11, 0.2),
    paddingHorizontal: moderateScale(10, 0.6),
    paddingVertical: moderateScale(12, 0.2),
  },
  card_image: {
    height: windowHeight * 0.11,
    width: windowWidth * 0.2,
    // backgroundColor: 'red',
  },
  content: {
    width: '75%',
    //  backgroundColor: Color.red,
    // flexDirection:"column",
    // overflow:'hidden'
  },
  heading: {
    fontSize: moderateScale(16, 0.3),
  },
  description: {
    // width:"100%",
    fontSize: moderateScale(10, 0.2),
    color: Color.grey,
  },
  ratingView: {
    // width:'100%',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(4, 0.2),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(5, 0.4),
  },
});
