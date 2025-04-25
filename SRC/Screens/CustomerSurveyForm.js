import { FlatList, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Header from '../Components/Header'
import { windowHeight, windowWidth } from '../Utillity/utils'
import { moderateScale } from 'react-native-size-matters'
import Color from '../Assets/Utilities/Color'
import { Icon } from 'native-base'
import MaterialCommunityIcons
    from 'react-native-vector-icons/MaterialCommunityIcons'
import CustomText from '../Components/CustomText'
const surveyQuestions = [
    'How satisfied were you with the overall experience?',
    'Did you find our product/service easy to use?',
    'Would you recommend our product/service to others?',
    'Was our customer service helpful and responsive?',
    'Do you have any suggestions for improvement?',
    'How likely are you to use our product/service again in the future?'
];

const options = ['Very Bad', 'Bad', 'Neutral', 'Good', 'Excellent'];



const CustomerSurveyForm = () => {
    const [answers, setAnswers] = useState({});
    const handleSelect = (qIndex, option) => {
        setAnswers({ ...answers, [qIndex]: option });
    };

    const renderQuestion = ({ item, index }) => (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
        }}>
            <View style={{ width: '40%' }}>
                <CustomText style={{ color: Color.black, fontSize: 12 }}>{item}</CustomText>
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
                            borderRadius: 8,
                            borderWidth: 1,
                            borderColor: Color.black,
                            backgroundColor: answers[index] === option ? Color.blue : 'transparent',
                        }}
                    />
                ))}
            </View>
        </View>
    );
    return (
        <ImageBackground
            style={styles.bg_container}
            source={require('../Assets/Images/bg.png')}>
            <Header title={''} hideUser={true} showBack={true} />
            <View style={styles.main_view}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{
                        width: windowWidth * 0.96,
                        height: windowHeight * 0.8,
                        backgroundColor: Color.white,
                        alignItems: "center",
                        paddingVertical: moderateScale(25, 0.6),
                        paddingHorizontal: moderateScale(15, 0.6)
                    }}>
                        <CustomText isBold style={styles.title}>CUSTOMER SURVEY</CustomText>
                        <CustomText style={styles.subtitle}>HELP US IMPROVE</CustomText>

                        <View style={styles.row}>
                            <View style={styles.inputContainer}>
                                <CustomText isBold style={styles.label}>Your Name:</CustomText>
                                <View style={styles.underlineInput} />
                            </View>
                            <View style={styles.inputContainer}>
                                <CustomText isBold style={styles.label}>Date:</CustomText>
                                <View style={styles.underlineInput} />
                            </View>
                        </View>
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

                            <FlatList
                                data={surveyQuestions}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={renderQuestion}
                                scrollEnabled={false}
                                contentContainerStyle={{ padding: 10 }}
                            />
                        </View>

                        <CustomText isBold style={styles.feedbackLabel}>How else can we improve?</CustomText>
                        <View style={styles.textarea} />

                        <CustomText isBold style={styles.footerText}>Thank you for your feedback</CustomText>

                    </View>
                </ScrollView>
            </View>
        </ImageBackground>
    )
}

export default CustomerSurveyForm

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
    text_view: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },
    container: {
        padding: moderateScale(20),
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    title: {
        fontSize: moderateScale(18, 0.9),
        fontWeight: 'bold',
        marginBottom: moderateScale(5, 0.6),
    },
    subtitle: {
        fontSize: moderateScale(14, 0.6),
        marginBottom: moderateScale(10),
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        marginBottom: moderateScale(10),
    },
    inputContainer: {
        width: '48%',
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
        alignSelf: 'flex-start',
    },
    textarea: {
        width: '100%',
        height: moderateScale(1, 0.6),
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: moderateScale(20),
        marginTop: moderateScale(10, 0.6)
    },
    footerText: {
        fontSize: moderateScale(14),
        marginTop: moderateScale(20),
    },
})