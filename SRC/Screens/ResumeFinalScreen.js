import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../Utillity/utils'
import Header from '../Components/Header'
import { moderateScale } from 'react-native-size-matters'
import Color from '../Assets/Utilities/Color'
import CustomText from '../Components/CustomText'
import CustomButton from '../Components/CustomButton'

const ResumeFinalScreen = (props) => {
    const data = props?.route?.params?.data;
    console.log("🚀 ~ ResumeFinalScreen ~ data:", data)
    return (
        <ImageBackground
            style={styles.bg_container}
            source={require('../Assets/Images/bg.png')}>
            <Header title={' Resume'} hideUser={true} showBack={true} />
            <View style={styles.main_view}>
                <View style={styles.left_view}>
                    <CustomText isBold style={styles.heading}>{data?.name}</CustomText>
                    <View style={{
                        backgroundColor: '#741b47',
                        height: moderateScale(2, 0.6),
                        width: windowWidth * 0.45,
                        marginTop: moderateScale(10, 0.6)
                    }} />
                    <CustomText isBold style={[styles.sub_heading, {
                        marginTop: moderateScale(30, 0.6),
                        width: windowWidth * 0.5,
                    }]}>Profile</CustomText>
                    <CustomText style={styles.description}>{data?.summaryDetails}</CustomText>
                    <View style={{
                        backgroundColor: '#741b47',
                        height: moderateScale(2, 0.6),
                        width: windowWidth * 0.3,
                        marginTop: moderateScale(20, 0.6),

                    }} />
                    <CustomText isBold style={[styles.sub_heading, {
                        width: windowWidth * 0.5,
                        marginTop: moderateScale(20, 0.6)
                    }]}>professional Experience</CustomText>

                    <CustomText style={{
                        fontSize: moderateScale(12, 0.6),
                        marginTop: moderateScale(10, 0.6),
                        color: '#79244b',
                    }}>{data?.positonName}</CustomText>
                    <CustomText style={{
                        fontSize: moderateScale(12, 0.6),
                        marginTop: moderateScale(2, 0.6),
                        color: '#79244b',
                    }}>{data?.DateofJoining + ' - ' + data?.DateofEnding} </CustomText>
                    <CustomText style={styles.description}>
                        {data?.summaryDetails}
                    </CustomText>
                    <View style={{
                        backgroundColor: '#741b47',
                        height: moderateScale(2, 0.6),
                        width: windowWidth * 0.25,
                        marginTop: moderateScale(12, 0.6),
                    }} />

                </View>
                <View style={styles.right_view}>
                    <CustomText isBold style={[styles.sub_heading, {
                        marginTop: moderateScale(30, 0.6),
                        width: windowWidth * 0.5,
                    }]}>CONTACT</CustomText>
                    <CustomText style={styles.description}>{data?.phone}</CustomText>
                    <CustomText style={styles.description}>{data?.email}</CustomText>
                    <CustomText style={styles.description}>{data?.address}</CustomText>
                    <CustomText style={styles.description}>Linkdin | Protfolio</CustomText>
                    <View style={{
                        backgroundColor: '#741b47',
                        height: moderateScale(2, 0.6),
                        width: windowWidth * 0.25,
                        marginTop: moderateScale(12, 0.6),
                    }} />
                    <CustomText isBold style={[styles.sub_heading, {
                        marginTop: moderateScale(20, 0.6),
                        width: windowWidth * 0.5,
                    }]}>Education</CustomText>
                    <CustomText style={styles.description}>{data?.education}</CustomText>
                    <CustomText style={styles.description}>anythonygentile@gmail.com</CustomText>
                    <CustomText style={styles.description}>Sans Franciso, CA 12345</CustomText>
                    <CustomText style={styles.description}>Linkdin | Protfolio</CustomText>
                    <View style={{
                        backgroundColor: '#741b47',
                        height: moderateScale(2, 0.6),
                        width: windowWidth * 0.25,
                        marginTop: moderateScale(12, 0.6),
                    }} />
                    {data?.skills.map((item) => {
                        return (
                            <CustomText isBold style={[styles.sub_heading, {
                                marginTop: moderateScale(20, 0.6),
                                width: windowWidth * 0.5,
                            }]}>Key Skills</CustomText>
                        )
                    })

                    }
                    {/* <CustomText style={[styles.description, {
                        marginTop: moderateScale(5, 0.6)
                    }]}>Software Development</CustomText>
                    <CustomText style={[styles.description, {
                        marginTop: moderateScale(5, 0.6)
                    }]}>Phyton</CustomText>
                    <CustomText style={[styles.description, {
                        marginTop: moderateScale(5, 0.6)
                    }]}>Full-Stack Development</CustomText>
                    <CustomText style={[styles.description, {
                        marginTop: moderateScale(5, 0.6)
                    }]}>Quakity assurance</CustomText>
                    <CustomText style={[styles.description, {
                        marginTop: moderateScale(5, 0.6)
                    }]}>user-centered design</CustomText>
                    <CustomText isBold style={[styles.sub_heading, {
                        marginTop: moderateScale(20, 0.6),
                        width: windowWidth * 0.5,
                    }]}>Certification</CustomText> */}
                    <CustomText style={styles.description}>{data?.CertificateName}</CustomText>
                    <CustomText style={styles.description}>{data?.CertificatePlaceName}</CustomText>
                </View>
            </View>
            <CustomButton
                text={'Print'}
                textColor={Color.white}
                onPress={() => {
                }} width={windowWidth * 0.7}
                height={windowHeight * 0.060}
                borderRadius={moderateScale(20, 0.3)}
                bgColor={Color.darkBlue}
                marginTop={moderateScale(20, 0.6)}
            />
        </ImageBackground>
    )
}

export default ResumeFinalScreen

const styles = StyleSheet.create({
    bg_container: {
        width: windowWidth,
        height: windowHeight,
    },
    main_view: {
        width: windowWidth * 0.9,
        height: windowHeight * 0.75,
        backgroundColor: Color.white,
        alignSelf: "center",
        marginTop: moderateScale(20, 0.6),
        flexDirection: 'row'
    },
    right_view: {
        backgroundColor: '#f4cccc',
        height: windowHeight * 0.75,
        width: windowWidth * 0.35,
        paddingHorizontal: moderateScale(10, 0.6),
        paddingVertical: moderateScale(60, 0.6)
    },
    left_view: {
        backgroundColor: Color.white,
        height: windowHeight * 0.75,
        width: windowWidth * 0.55,
        paddingHorizontal: moderateScale(10, 0.6),
        paddingVertical: moderateScale(50, 0.6)
    },
    heading: {
        color: '#79244b',
        fontSize: moderateScale(20, 0.6),
    },
    description: {
        fontSize: moderateScale(11, 0.6),
        color: '#79244b',
    },
    sub_heading: {
        color: '#79244b',
        fontSize: moderateScale(16, 0.6),
        textTransform: 'capitalize',
        marginTop: moderateScale(10, 0.6)
    }
})