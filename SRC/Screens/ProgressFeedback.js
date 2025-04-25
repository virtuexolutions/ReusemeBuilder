import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Components/Header'
import { windowHeight, windowWidth } from '../Utillity/utils'
import { moderateScale } from 'react-native-size-matters'
import CustomText from '../Components/CustomText'
import Color from '../Assets/Utilities/Color'
import { mode } from 'native-base/lib/typescript/theme/tools'

const ProgressFeedback = props => {
    const data = props?.route?.params?.data;
    return (
        <ImageBackground
            style={styles.bg_container}
            source={require('../Assets/Images/bg.png')}>
            <Header title={''} hideUser={true} showBack={true} />
            <View style={styles.main_view}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{
                        backgroundColor: "#fbf7f4",
                        width: windowWidth * 0.96,
                        height: windowHeight * 0.8,
                        paddingVertical: moderateScale(20, 0.6),
                        paddingHorizontal: moderateScale(10, 0.6)
                    }}>
                        <CustomText isBold style={{ textAlign: 'center', fontSize: moderateScale(20, 0.6), marginTop: moderateScale(10, 0.6) }}>Progress Feedback</CustomText>
                        <CustomText isBold style={{ textAlign: 'center', fontSize: moderateScale(20, 0.6), }}>Form</CustomText>
                        <CustomText style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</CustomText>
                        <CustomText style={styles.text}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever</CustomText>
                        <View style={{
                            width: windowWidth * 0.8,
                            height: windowHeight * 0.45,
                            // backgroundColor: 'red',
                            borderColor: Color.black,
                            borderWidth: 1,
                            alignSelf: 'center',
                            marginTop: moderateScale(20, 0.6)
                        }}>
                            <View style={{ width: '100%', height: moderateScale(30, 0.6), backgroundColor: Color.black, justifyContent: 'center', alignItems: 'center' }}>
                                <CustomText style={{
                                    fontSize: moderateScale(14, 0.6),
                                    color: Color.white,
                                    textAlign: "center",
                                }}>
                                    Strenghts Observed
                                </CustomText>
                            </View>
                            <CustomText style={{
                                width: '100%',
                                height: moderateScale(30, 0.6),
                                borderBottomWidth: 1,
                                borderColor: Color.black,
                                justifyContent: 'center',
                                alignItems: "center",
                                paddingTop: moderateScale(5, 0.6),
                                paddingLeft: moderateScale(10, 0.6)
                            }}>
                                he is well behaved
                            </CustomText>
                            <CustomText style={{
                                width: '100%',
                                height: moderateScale(30, 0.6),
                                borderBottomWidth: 1,
                                borderColor: Color.black,
                                justifyContent: 'center',
                                alignItems: "center",
                                paddingTop: moderateScale(5, 0.6),
                                paddingLeft: moderateScale(10, 0.6)

                            }}>
                                he is well behaved
                            </CustomText>
                            <CustomText style={{
                                width: '100%',
                                height: moderateScale(30, 0.6),
                                borderBottomWidth: 1,
                                borderColor: Color.black,
                                justifyContent: 'center',
                                alignItems: "center",
                                paddingTop: moderateScale(5, 0.6),
                                paddingLeft: moderateScale(10, 0.6)

                            }}>
                            </CustomText>
                            <View style={{ width: '100%', height: moderateScale(30, 0.6), backgroundColor: Color.black, justifyContent: 'center', alignItems: 'center' }}>
                                <CustomText style={{
                                    fontSize: moderateScale(14, 0.6),
                                    color: Color.white,
                                    textAlign: "center",
                                }}>
                                    Strenghts Observed
                                </CustomText>
                            </View>
                            <CustomText style={{
                                width: '100%',
                                height: moderateScale(30, 0.6),
                                borderBottomWidth: 1,
                                borderColor: Color.black,
                                justifyContent: 'center',
                                alignItems: "center",
                                paddingTop: moderateScale(5, 0.6),
                                paddingLeft: moderateScale(10, 0.6)

                            }}>
                                he is well behaved
                            </CustomText>
                            <CustomText style={{
                                width: '100%',
                                height: moderateScale(30, 0.6),
                                borderBottomWidth: 1,
                                borderColor: Color.black,
                                justifyContent: 'center',
                                alignItems: "center",
                                paddingTop: moderateScale(5, 0.6),
                                paddingLeft: moderateScale(10, 0.6)

                            }}>
                                he is well behaved
                            </CustomText>
                            <CustomText style={{
                                width: '100%',
                                height: moderateScale(30, 0.6),
                                borderBottomWidth: 1,
                                borderColor: Color.black,
                                justifyContent: 'center',
                                alignItems: "center",
                                paddingTop: moderateScale(5, 0.6),
                                paddingLeft: moderateScale(10, 0.6)
                            }}>
                            </CustomText>
                            <View style={{ width: '100%', height: moderateScale(30, 0.6), backgroundColor: Color.black, justifyContent: 'center', alignItems: 'center' }}>
                                <CustomText style={{
                                    fontSize: moderateScale(14, 0.6),
                                    color: Color.white,
                                    textAlign: "center",
                                }}>
                                    Strenghts Observed
                                </CustomText>
                            </View>
                            <CustomText style={{
                                width: '100%',
                                height: moderateScale(30, 0.6),
                                borderBottomWidth: 1,
                                borderColor: Color.black,
                                justifyContent: 'center',
                                alignItems: "center",
                                paddingTop: moderateScale(5, 0.6),
                                paddingLeft: moderateScale(10, 0.6)
                            }}>
                                he is well behaved
                            </CustomText>
                        </View>
                    </View>
                </ScrollView></View>
        </ImageBackground>
    )
}

export default ProgressFeedback

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
    text: {
        fontSize: moderateScale(10, 0.6),
        textAlign: 'center',
        width: windowWidth * 0.8,
        alignSelf: 'center'
    }
})