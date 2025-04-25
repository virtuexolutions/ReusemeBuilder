import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import CustomText from '../Components/CustomText';
import {windowHeight, windowWidth} from '../Utillity/utils';
import Color from '../Assets/Utilities/Color';
import {moderateScale} from 'react-native-size-matters';
import Header from '../Components/Header';

const ChecklistScreen = props => {
  const data = props?.route?.params?.data;
  console.log('🚀 ~ data:', data?.skills);
  const tableData = [
    {no: 1, document: 'Tax Forms', response: 'Submitted'},
    {no: 2, document: 'Certifications', response: 'Submitted'},
    {no: 3, document: 'Tax Forms', response: 'Not Submitted'},
    {no: 4, document: 'Certifications', response: 'Not Submitted'},
    {no: 5, document: 'Tax Forms', response: 'Valid'},
    {no: 6, document: 'Certifications', response: 'Valid'},
    {no: 7, document: 'Tax Forms', response: 'Expiring on 01-11-2025'},
    {no: 8, document: 'Certifications', response: 'Expiring on 01-11-2025'},
  ];

  return (
    <ImageBackground
      style={styles.bg_container}
      source={require('../Assets/Images/bg.png')}>
      <Header title={'Edit cover letter'} hideUser={true} showBack={true} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>
        <CustomText style={styles.title}>COMPLIANCE CHECKLIST</CustomText>

        <View style={styles.row}>
          <CustomText style={styles.label}>Name:</CustomText>

          <CustomText style={styles.label}>Date:</CustomText>
        </View>

        <View style={styles.table}>
          {/* Table Header */}
          <View style={[styles.tableRow, styles.headerRow]}>
            <CustomText
              style={[
                styles.cell,
                styles.headerCell,
                {width: windowWidth * 0.075},
              ]}>
              #
            </CustomText>
            <CustomText style={[styles.cell, styles.headerCell, {flex: 3}]}>
              DOCUMENTS
            </CustomText>
            <CustomText style={[styles.cell, styles.headerCell, {flex: 3}]}>
              RESPONSE
            </CustomText>
          </View>

          {/* Table Rows */}
          {data?.skills?.map((item, index) => {
            return (
              <View key={index} style={styles.tableRow}>
                <CustomText style={[styles.cell, {width: windowWidth * 0.075}]}>
                  {index + 1}
                </CustomText>
                <CustomText style={[styles.cell, {flex: 3}]}>{item}</CustomText>
                <CustomText style={[styles.cell, {flex: 3}]}>
                  {item.response}
                </CustomText>
              </View>
            );
          })}
        </View>

        {/* Compliance Status */}
        <View style={styles.complianceBox}>
          <CustomText style={styles.complianceLabel}>
            Compliance Status
          </CustomText>
          <CustomText style={styles.complianceValue}>
            In Compliance / Out of Compliance
          </CustomText>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default ChecklistScreen;

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(20, 0.6),
    backgroundColor: 'white',
    // justifyContent :'center' ,
    marginTop: moderateScale(20, 0.6),
    // alignItems: 'center',
    width: windowWidth * 0.96,
  },
  title: {
    fontSize: moderateScale(16, 0.6),
    // fontWeight: 'bold',
    marginVertical: moderateScale(20, 0.6),
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: moderateScale(20, 0.6),
    paddingHorizontal: moderateScale(10, 0.6),
    borderBottomWidth: 1,
    borderColor: Color.black,
  },
  label: {
    fontSize: moderateScale(14, 0.6),
    width: windowWidth * 0.5,
  },
  table: {
    borderWidth: 1,
    borderColor: '#000',
    width: '100%',
  },
  tableRow: {
    flexDirection: 'row',
  },
  headerRow: {
    backgroundColor: '#f0f0f0',
  },
  cell: {
    borderWidth: 1,
    borderColor: '#000',
    padding: moderateScale(8, 0.6),
    textAlign: 'center',
    fontSize: moderateScale(11, 0.6),
  },
  headerCell: {
    fontWeight: 'bold',
  },
  complianceBox: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    marginTop: moderateScale(30, 0.6),
    width: '100%',
  },
  complianceLabel: {
    flex: 2,
    borderRightWidth: 1,
    borderColor: '#000',
    padding: moderateScale(10, 0.6),
    fontSize: moderateScale(12, 0.6),
  },
  complianceValue: {
    flex: 3,
    padding: moderateScale(10, 0.6),
    fontSize: moderateScale(12, 0.6),
  },
  bg_container: {
    width: windowWidth,
    alignItems: 'center',
    height: windowHeight,
    justifyContent: 'center',
  },
});
