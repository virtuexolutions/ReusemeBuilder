import {
  FlatList,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Header from '../Components/Header';
import Color from '../Assets/Utilities/Color';
import CustomText from '../Components/CustomText';
import {moderateScale} from 'react-native-size-matters';
import {Icon} from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import TextInputWithTitle from '../Components/TextInputWithTitle';
import CustomButton from '../Components/CustomButton';
import navigationService from '../navigationService';
import ImagePickerModal from '../Components/ImagePickerModal';
import {object} from 'yup';
import CustomImage from '../Components/CustomImage';
// import Entypo from 'react-native-vector-icons/Entypo'

const EditBlogPost = () => {
  const [personalDataTab, setPersonalDataTab] = useState(true);
  const [description, setDescription] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [date, setDate] = useState(new Date());
  const [city, setCity] = useState('');
  const [month, setMonth] = useState(new Date());
  const [year, setYear] = useState(new Date());
  const [details, setDetails] = useState('');
  const [skillVisible, setSkillVisible] = useState(true);
  const [skills, setSkill] = useState([]);
  const [skillsVal, setSkillVal] = useState([]);
  const [phone, setphone] = useState([]);
  const [heading, setHeading] = useState(true);
  const [socialData, setSocialData] = useState(true);
  const [socialAccount, setSocialAccount] = useState('');
  const [experience, setexperience] = useState(true);
  const [Certificate, setCertificate] = useState(true);
  const [managerName, setManagerName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyAddress, setCompanyAddress] = useState('');
  const [subject, setSubject] = useState('');
  const [CertificatePlaceName, setCertificatPlaceName] = useState('');
  const [CertificatYear, setCertificatYear] = useState('');
  const [positonName, setpositonName] = useState('');
  const [experiencePlaceName, setexperiencePlaceName] = useState('');
  const [DateofJoining, setDateofJoining] = useState('');
  const [DateofEnding, setDateofEnding] = useState('');
  const [companyCity, setCompanyCity] = useState('');
  const [summaryDetails, setsummaryDetails] = useState('');
  const [image, setImage] = useState({});
  console.log('🚀 ~ EditBlogPost ~ image:', image?.uri);
  const [isImage, setIsImage] = useState(false);
  const onPressConfirm = () => {
    const data = {
      //   name: name,
      //   email: email,
      //   data: date,
      //   month: month,
      //   description: description,
      image: image,
      heading: heading,
      //   address: address,
      details: details,
      //   phone: phone,
      //   managerName: managerName,
      //   companyName: companyName,
      //   companyAddress: companyAddress,
      //   subject: subject,
      //   date: date,
    };
    navigationService.navigate('FinalBlogPost', {data: data});
  };

  return (
    <ImageBackground
      style={styles.bg_container}
      source={require('../Assets/Images/bg.png')}>
      <Header title={'Edit blog'} hideUser={true} showBack={true} />
      <View style={styles.main_view}>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <View
            style={[
              styles.btn_view,
              {
                height:
                  personalDataTab === true
                    ? windowHeight * 0.11
                    : windowHeight * 0.7,
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}>
              <View>
                <CustomText isBold style={styles.btn_txt}>
                  Personal Data
                </CustomText>
                <CustomText style={styles.btn_sub_txt}>
                  Complete your personal Data make your resume even better
                </CustomText>
              </View>
              <Icon
                name="down"
                onPress={() => setPersonalDataTab(!personalDataTab)}
                as={AntDesign}
                color={Color.black}
                size={moderateScale(18, 0.6)}
              />
            </View>
            {personalDataTab === false && (
              <>
                <CustomText isBold style={styles.text}>
                  Name :
                </CustomText>
                <TextInputWithTitle
                  iconSize={moderateScale(20, 0.3)}
                  color={Color.blue}
                  placeholder={'Enter your full name '}
                  placeholderColor={Color.grey}
                  viewWidth={0.84}
                  marginTop={moderateScale(10, 0.3)}
                  style={styles.text_input}
                  backgroundColor={Color.lightGrey}
                  setText={setName}
                  value={name}
                />
                <CustomText isBold style={styles.text}>
                  Email :
                </CustomText>
                <TextInputWithTitle
                  iconSize={moderateScale(20, 0.3)}
                  color={Color.blue}
                  placeholder={'Enter your email '}
                  placeholderColor={Color.grey}
                  viewWidth={0.84}
                  marginTop={moderateScale(10, 0.3)}
                  style={styles.text_input}
                  backgroundColor={Color.lightGrey}
                  setText={setEmail}
                  value={email}
                />
                <CustomText isBold style={styles.text}>
                  Address :
                </CustomText>
                <TextInputWithTitle
                  iconSize={moderateScale(20, 0.3)}
                  color={Color.blue}
                  placeholder={'Enter your Address '}
                  placeholderColor={Color.grey}
                  viewWidth={0.84}
                  marginTop={moderateScale(10, 0.3)}
                  style={styles.text_input}
                  backgroundColor={Color.lightGrey}
                  setText={setAddress}
                  value={address}
                />
                <CustomText isBold style={styles.text}>
                  {' '}
                  city :
                </CustomText>
                <View style={styles.row_view}>
                  <View>
                    <CustomText isBold style={styles.sub_text}>
                      city
                    </CustomText>
                    <TextInputWithTitle
                      iconSize={moderateScale(20, 0.3)}
                      color={Color.blue}
                      placeholder={'city'}
                      placeholderColor={Color.grey}
                      viewWidth={0.25}
                      marginTop={moderateScale(10, 0.3)}
                      style={styles.text_input}
                      backgroundColor={Color.lightGrey}
                      setText={setCity}
                      value={city}
                    />
                  </View>
                  <View>
                    <CustomText isBold style={styles.sub_text}>
                      state
                    </CustomText>
                    <TextInputWithTitle
                      iconSize={moderateScale(20, 0.3)}
                      color={Color.blue}
                      placeholder={'state'}
                      placeholderColor={Color.grey}
                      viewWidth={0.25}
                      marginTop={moderateScale(10, 0.3)}
                      style={styles.text_input}
                      backgroundColor={Color.lightGrey}
                      setText={setMonth}
                      value={month}
                    />
                  </View>
                  <View>
                    <CustomText isBold style={styles.sub_text}>
                      zip code
                    </CustomText>
                    <TextInputWithTitle
                      iconSize={moderateScale(20, 0.3)}
                      color={Color.blue}
                      placeholder={'40202 '}
                      placeholderColor={Color.grey}
                      viewWidth={0.25}
                      marginTop={moderateScale(10, 0.3)}
                      style={styles.text_input}
                      backgroundColor={Color.lightGrey}
                      setText={setYear}
                      value={year}
                    />
                  </View>
                </View>
                <CustomText isBold style={styles.text}>
                  Phone Number :
                </CustomText>
                <TextInputWithTitle
                  iconSize={moderateScale(20, 0.3)}
                  color={Color.blue}
                  placeholder={'Enter your Phone Number'}
                  placeholderColor={Color.grey}
                  viewWidth={0.84}
                  marginTop={moderateScale(10, 0.3)}
                  style={styles.text_input}
                  backgroundColor={Color.lightGrey}
                  setText={setphone}
                  value={phone}
                />
              </>
            )}
          </View> */}
          <View
            style={[
              styles.btn_view,
              {
                height:
                  description === true
                    ? windowHeight * 0.11
                    : windowHeight * 0.53,
                marginTop: moderateScale(15, 0.6),
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}>
              <View>
                <CustomText isBold style={styles.btn_txt}>
                  blog data
                </CustomText>
                <CustomText
                  style={[
                    styles.btn_sub_txt,
                    {
                      color: Color.veryLightGray,
                      width: windowWidth * 0.8,
                    },
                  ]}>
                  Enter a brief description of your selected topic
                </CustomText>
              </View>
              <Icon
                name="down"
                onPress={() => setDescription(!description)}
                as={AntDesign}
                color={Color.black}
                size={moderateScale(18, 0.6)}
              />
            </View>

            {description === false && (
              <>
                <CustomText isBold style={styles.text}>
                  add image :
                </CustomText>
                <TouchableOpacity
                  onPress={() => {
                    setIsImage(true);
                  }}
                  style={[
                    styles.image_con,
                    Object.keys(image).length == 0 && {
                      alignItems: 'center',
                      justifyContent: 'center',
                    },
                  ]}>
                  {Object.keys(image).length > 0 ? (
                    <CustomImage
                      style={{
                        height: '100%',
                        width: '100%',
                        backgroundColor: 'red',
                      }}
                      source={{uri: image?.uri}}
                    />
                  ) : (
                    <Icon
                      as={Entypo}
                      name="camera"
                      size={moderateScale(20, 0.6)}
                      color={Color.themeDarkGray}
                    />
                  )}
                </TouchableOpacity>
                <CustomText isBold style={styles.text}>
                  heading :
                </CustomText>
                <TextInputWithTitle
                  iconSize={moderateScale(20, 0.3)}
                  color={Color.blue}
                  placeholder={'heading'}
                  placeholderColor={Color.grey}
                  viewWidth={0.84}
                  // inputHeight={windowHeight * 0.07}
                  viewHeight={0.06}
                  marginTop={moderateScale(10, 0.3)}
                  style={styles.text_input}
                  backgroundColor={Color.lightGrey}
                  setText={setHeading}
                  value={heading}
                  //   multiline
                />
                <CustomText isBold style={styles.text}>
                  description :
                </CustomText>
                <TextInputWithTitle
                  iconSize={moderateScale(20, 0.3)}
                  color={Color.blue}
                  placeholder={'Details'}
                  placeholderColor={Color.grey}
                  viewWidth={0.84}
                  // inputHeight={windowHeight * 0.07}
                  viewHeight={0.15}
                  marginTop={moderateScale(10, 0.3)}
                  style={styles.text_input}
                  backgroundColor={Color.lightGrey}
                  setText={setDetails}
                  value={details}
                  multiline
                />
              </>
            )}
          </View>

          {/* <View
            style={[
              styles.btn_view,
              {
                height:
                  companyInfoheading== trheadsetHeading
                    ? windowHeight * 0.11
                    : windowHeight * 0.5,
                marginTop: moderateScale(15, 0.6),
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}>
              <View>
                <CustomText isBold style={styles.btn_txt}>
                  company info
                </CustomText>
                <CustomText
                  style={[
                    styles.btn_sub_txt,
                    {
                      color: Color.veryLightGray,
                      width: windowWidth * 0.8,
                    },
                  ]}>
                  Enter info of company
                </CustomText>
              </View>
              <Icon
                name="down"
                onPress={() => setCompanyInfo(!companyInfo)}
                as={AntDesign}
                color={Color.black}
                size={moderateScale(18, 0.6)}
              />
            </View>
            {companyInfo === false && (
              <>
                <CustomText isBold style={styles.text}>
                  manager full name :
                </CustomText>
                <TextInputWithTitle
                  iconSize={moderateScale(20, 0.3)}
                  color={Color.blue}
                  placeholder={'Enter manager full name '}
                  placeholderColor={Color.grey}
                  viewWidth={0.84}
                  marginTop={moderateScale(10, 0.3)}
                  style={styles.text_input}
                  backgroundColor={Color.lightGrey}
                  setText={setManagerName}
                  value={managerName}
                />
                <CustomText isBold style={styles.text}>
                  company Name
                </CustomText>
                <TextInputWithTitle
                  iconSize={moderateScale(20, 0.3)}
                  color={Color.blue}
                  placeholder={'Enter company name '}
                  placeholderColor={Color.grey}
                  viewWidth={0.84}
                  marginTop={moderateScale(10, 0.3)}
                  style={styles.text_input}
                  backgroundColor={Color.lightGrey}
                  setText={setCompanyName}
                  value={companyName}
                />
                <CustomText isBold style={styles.text}>
                  company address
                </CustomText>
                <TextInputWithTitle
                  iconSize={moderateScale(20, 0.3)}
                  color={Color.blue}
                  placeholder={'Enter address '}
                  placeholderColor={Color.grey}
                  viewWidth={0.84}
                  marginTop={moderateScale(10, 0.3)}
                  style={styles.text_input}
                  backgroundColor={Color.lightGrey}
                  setText={setCompanyAddress}
                  value={companyAddress}
                />
                <CustomText isBold style={styles.text}>
                  city
                </CustomText>
                <TextInputWithTitle
                  iconSize={moderateScale(20, 0.3)}
                  color={Color.blue}
                  placeholder={'Enter city'}
                  placeholderColor={Color.grey}
                  viewWidth={0.84}
                  marginTop={moderateScale(10, 0.3)}
                  style={styles.text_input}
                  backgroundColor={Color.lightGrey}
                  setText={setCompanyCity}
                  value={companyCity}
                />
              </>
            )}
          </View>
          <View
            style={[
              styles.btn_view,
              {
                height:
                  Certificate === true
                    ? windowHeight * 0.09
                    : windowHeight * 0.3,
                marginTop: moderateScale(15, 0.6),
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}>
              <View>
                <CustomText isBold style={styles.btn_txt}>
                  subject
                </CustomText>
                <CustomText
                  style={[
                    styles.btn_sub_txt,
                    {
                      color: Color.veryLightGray,
                      width: windowWidth * 0.8,
                    },
                  ]}>
                  Enter your subject for cover Letter
                </CustomText>
              </View>
              <Icon
                name="down"
                onPress={() => setCertificate(!Certificate)}
                as={AntDesign}
                color={Color.black}
                size={moderateScale(18, 0.6)}
              />
            </View>
            {Certificate === false && (
              <>
                <CustomText isBold style={styles.text}>
                  subject :
                </CustomText>
                <TextInputWithTitle
                  iconSize={moderateScale(20, 0.3)}
                  color={Color.blue}
                  placeholder={'Enter subject '}
                  placeholderColor={Color.grey}
                  viewWidth={0.84}
                  marginTop={moderateScale(10, 0.3)}
                  style={styles.text_input}
                  backgroundColor={Color.lightGrey}
                  setText={setSubject}
                  value={subject}
                />
                <CustomText isBold style={styles.text}>
                  date :
                </CustomText>
                <TextInputWithTitle
                  iconSize={moderateScale(20, 0.3)}
                  color={Color.blue}
                  placeholder={'Enter date '}
                  placeholderColor={Color.grey}
                  viewWidth={0.84}
                  marginTop={moderateScale(10, 0.3)}
                  style={styles.text_input}
                  backgroundColor={Color.lightGrey}
                  setText={setDate}
                  value={date}
                />
              </>
            )}
          </View>

          <View
            style={[
              styles.btn_view,
              {
                height:
                  socialData === true
                    ? windowHeight * 0.09
                    : windowHeight * 0.2,
                marginTop: moderateScale(15, 0.6),
              },
            ]}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
              }}>
              <View>
                <CustomText isBold style={styles.btn_txt}>
                  social Data
                </CustomText>
                <CustomText
                  style={[
                    styles.btn_sub_txt,
                    {
                      color: Color.veryLightGray,
                      width: windowWidth * 0.8,
                    },
                  ]}>
                  Enter your social Data
                </CustomText>
              </View>
              <Icon
                name="down"
                onPress={() => setSocialData(!socialData)}
                as={AntDesign}
                color={Color.black}
                size={moderateScale(18, 0.6)}
              />
            </View>
            {socialData === false && (
              <>
                <CustomText isBold style={styles.text}>
                  linkdin id :
                </CustomText>
                <TextInputWithTitle
                  iconSize={moderateScale(20, 0.3)}
                  color={Color.blue}
                  placeholder={'Enter your user name '}
                  placeholderColor={Color.grey}
                  viewWidth={0.84}
                  marginTop={moderateScale(10, 0.3)}
                  style={styles.text_input}
                  backgroundColor={Color.lightGrey}
                  setText={setSocialAccount}
                  value={socialAccount}
                />
              </>
            )}
          </View> */}
          <View style={styles.btn_con}>
            <CustomButton
              text={'confirm'}
              textColor={Color.darkBlue}
              onPress={() => {
                // console.log('first', skills);
                onPressConfirm();
              }}
              width={windowWidth * 0.8}
              height={windowHeight * 0.06}
              borderRadius={moderateScale(20, 0.3)}
              bgColor={Color.white}
              marginTop={moderateScale(20, 0.6)}
            />
          </View>
          <ImagePickerModal
            show={isImage}
            setShow={setIsImage}
            setFileObject={setImage}
          />
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default EditBlogPost;

const styles = StyleSheet.create({
  bg_container: {
    width: windowWidth,
    height: windowHeight,
    alignItems: 'center',
    height: windowHeight,
    justifyContent: 'center',
    // alignItems: 'left',
    // paddingHorizontal: moderateScale(10, 0.6),
  },
  main_view: {
    width: windowWidth,
    height: windowHeight * 0.9,
    paddingHorizontal: moderateScale(10, 0.6),
    paddingVertical: moderateScale(15, 0.6),
  },
  btn_view: {
    width: windowWidth * 0.93,
    backgroundColor: Color.white,
    paddingVertical: moderateScale(12, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    borderRadius: moderateScale(10, 0.6),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  btn_txt: {
    fontSize: moderateScale(18, 0.6),
  },
  btn_sub_txt: {
    fontSize: moderateScale(12, 0.6),
    width: windowWidth * 0.8,
  },
  text_input: {
    borderWidth: 1,
    // height : windowWidth*0.5,
    // backgroundColor :'red'
  },
  text: {
    fontSize: moderateScale(14, 0.6),
    marginTop: moderateScale(10, 0.6),
    color: Color.blue,
  },
  row_view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sub_text: {
    fontSize: moderateScale(11, 0.6),
    marginTop: moderateScale(9, 0.6),
    marginLeft: moderateScale(5, 0.6),
  },
  image_con: {
    height: windowHeight * 0.08,
    width: windowWidth * 0.2,
    backgroundColor: Color.lightGrey,

    borderRadius: moderateScale(10, 0.6),
    marginVertical: moderateScale(5.6),
    overflow: 'hidden',
  },
});
