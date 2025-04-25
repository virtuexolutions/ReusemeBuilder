import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../Components/Header'
import { windowHeight, windowWidth } from '../Utillity/utils'
import { moderateScale } from 'react-native-size-matters'
import CustomText from '../Components/CustomText'
import Color from '../Assets/Utilities/Color'

const FeedBackForm = () => {
    const [answers, setAnswers] = useState({});
    const handleSelect = (qIndex, option) => {
        setAnswers({ ...answers, [qIndex]: option });
    };

    const surveyQuestions = [
        'How satisfied were you with the overall experience?',
        'Did you find our product/service easy to use?',
        'Would you recommend our product/service to others?',
        'Was our customer service helpful and responsive?',
        'Do you have any suggestions for improvement?',
        'How likely are you to use our product/service again in the future?',
        'Would you recommend our product/service to others?',
    ];

    const options = ['Very Bad', 'Bad', 'Neutral', 'Good', 'Excellent'];

    return (
        <ImageBackground
            style={styles.bg_container}
            source={require('../Assets/Images/bg.png')}>
            <Header title={''} hideUser={true} showBack={true} />
            <View style={styles.main_view}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={styles.tamplate_background_view}>
                        <View style={{
                            backgroundColor: "#eebeb0",
                            width: windowWidth * 0.96,
                            height: windowWidth * 0.26
                        }}>

                        </View>

                        <View style={{ paddingVertical: moderateScale(20, 0.6), paddingHorizontal: moderateScale(10, 0.6) }}>
                            <CustomText isBold style={[styles.text, { width: windowWidth * 0.8 }]}>Please fill out this feedback form as you see fit to help us improve our service</CustomText>
                            <View style={styles.row}>
                                <View style={styles.inputContainer}>
                                    <CustomText isBold style={styles.label}>Age:</CustomText>
                                    <View style={styles.underlineInput} />
                                </View>
                                <View style={styles.inputContainer}>
                                    <CustomText isBold style={styles.label}>Date:</CustomText>
                                    <View style={styles.underlineInput} />
                                </View>
                                <View style={styles.inputContainer}>
                                    <CustomText isBold style={styles.label}>Name:</CustomText>
                                    <View style={styles.underlineInput} />
                                </View>
                            </View>
                            <CustomText isBold styles={[styles.text, { width: windowWidth * 0.8 }]}>Please fill out this feedback form as you see fit to help us improve our service</CustomText>
                            <View style={{
                                width: '100%',
                                alignSelf: 'center',
                                marginTop: 20,
                                paddingVertical: 10
                            }}>
                                <View style={{ flexDirection: 'row', }}>
                                    <View style={{ width: '40%' }} />
                                    <View style={{
                                        width: '60%',
                                        flexDirection: 'row',
                                        justifyContent: 'space-around',
                                        alignItems: 'center',
                                        paddingVertical: 10
                                    }}>
                                        {options.map((option, index) => (
                                            <CustomText key={index} style={{ color: Color.black, fontSize: 10 }}>
                                                {option}
                                            </CustomText>
                                        ))}
                                    </View>
                                </View>
                                {surveyQuestions.map((item, index) => {
                                    return (
                                        <View style={{
                                            flexDirection: 'row',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: 10,
                                        }}>
                                            <View style={{ width: '42%' }}>
                                                <CustomText isBold style={{ color: Color.black, fontSize: 11 }}>{item}</CustomText>
                                            </View>
                                            <View style={{
                                                width: '60%',
                                                flexDirection: 'row',
                                                justifyContent: 'space-around',
                                                alignItems: 'center',
                                            }}>
                                                {options.map((option, oIndex) => (
                                                    <TouchableOpacity
                                                        key={oIndex}
                                                        onPress={() => handleSelect(index, option)}
                                                        style={{
                                                            width: 16,
                                                            height: 16,
                                                            borderRadius: 1,
                                                            borderWidth: 1,
                                                            borderColor: Color.black,
                                                            backgroundColor: answers[index] === option ? Color.blue : 'transparent',
                                                        }}
                                                    />
                                                ))}
                                            </View>
                                        </View>
                                    )
                                })}
                                {/* <FlatList
                                    data={surveyQuestions}
                                    keyExtractor={(item, index) => index.toString()}
                                    renderItem={renderQuestion}
                                    scrollEnabled={false}
                                    contentContainerStyle={{ padding: 10 }}
                                /> */}
                            </View>

                            <CustomText isBold style={styles.feedbackLabel}>How else can we improve?</CustomText>
                            <View style={styles.textarea} />
                        </View>
                    </View>
                </ScrollView>
            </View >
        </ImageBackground >
    )
}

export default FeedBackForm

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
    tamplate_background_view: {
        width: windowWidth * 0.96,
        height: windowHeight,
        backgroundColor: "#f6f0e4"
    },
    text: {
        fontSize: moderateScale(10, 0.6),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: moderateScale(10),
    },
    inputContainer: {
        width: '30%',
    },
    label: {
        fontSize: moderateScale(12, 0.6),
        // marginBottom: moderateScale(5),
    },
    underlineInput: {
        borderBottomWidth: 1,
        borderColor: '#000',
        height: moderateScale(15, 0.6),
    },
    feedbackLabel: {
        fontSize: moderateScale(14),
        // marginTop: moderateScale(20),
        marginBottom: moderateScale(10),
        alignSelf: 'center',
    },
    textarea: {
        width: '80%',
        height: moderateScale(100, 0.6),
        borderWidth: 1,
        borderColor: Color.black,
        marginBottom: moderateScale(20),
        marginTop: moderateScale(10, 0.6),
        alignSelf: 'center'
    },
})