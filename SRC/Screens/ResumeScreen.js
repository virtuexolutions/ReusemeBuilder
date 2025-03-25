import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { windowHeight, windowWidth } from '../Utillity/utils'
import Header from '../Components/Header'
import CustomImage from '../Components/CustomImage'
import CustomButton from '../Components/CustomButton'
import { moderateScale } from 'react-native-size-matters'
import navigationService from '../navigationService'

const ResumeScreen = () => {
    return (
        <ImageBackground
            style={styles.bg_container}
            source={require('../Assets/Images/bg.png')}>
            <Header hideUser={true} showBack={true} />
            <View style={{
                justifyContent: "center",
                alignItems: "center"
            }}>
                <View style={{
                    width: windowWidth * 0.9,
                    height: windowHeight * 0.7,
                }}>
                    <CustomImage source={require('../Assets/Images/resume.jpeg')} style={{
                        width: '100%',
                        height: '100%',
                        resizeMode: 'contain'
                    }} />
                </View>
                <CustomButton
                    text={'Edit this Resume'}
                    textColor={Color.darkBlue}
                    onPress={() => {
                        console.log("first");
                        navigationService.navigate('EditResume')
                    }} width={windowWidth * 0.65}
                    height={windowHeight * 0.075}
                    borderRadius={moderateScale(20, 0.3)}
                    bgColor={Color.white}
                />
            </View>
        </ImageBackground>
    )
}

export default ResumeScreen

const styles = StyleSheet.create({
    bg_container: {
        width: windowWidth,
        height: windowHeight,
        // alignItems: 'left',
        // paddingHorizontal: moderateScale(10, 0.6),
    },
})