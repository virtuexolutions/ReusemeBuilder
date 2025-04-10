import React, {useEffect, useState} from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import navigationService from './navigationService';
import {useSelector} from 'react-redux';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Drawer from './Drawer/Drawer';
import LoginScreen from './Screens/LoginScreen';
import VerifyNumber from './Screens/VerifyNumber';
import ChangePassword from './Screens/ChangePassword';
import ResetPassword from './Screens/ResetPassword';
import VerifyEmail from './Screens/VerifyEmail';
import {moderateScale} from 'react-native-size-matters';
import {enableScreens} from 'react-native-screens';
import Home from './Screens/Home';
import SplashScreen from './Screens/SplashScreen';
import WalkThroughScreen from './Screens/WalkthroughScreen';
import SignupScreen from './Screens/SignupScreen';
import ResumeScreen from './Screens/ResumeScreen';
import EditResume from './Screens/EditResume';
import ResumeFinalScreen from './Screens/ResumeFinalScreen';
import FinalCoverLetter from './Screens/FinalCoverLetter';
import EditCoverLetter from './Screens/EditCoverLetter';
import EditBlogPost from './Screens/EditBlogPost';
import FinalBlogPost from './Screens/FinalBlogPost';
import FinalEmail from './Screens/FinalEmail';
import SavedTemplates from './Screens/SavedTemplates';

enableScreens();
const AppNavigator = () => {
  const token = useSelector(state => state.authReducer.token);
  const walkThrough = useSelector(state => state.authReducer.userWalkThrough);

  const RootNav = createNativeStackNavigator();
  const RootNavLogged = createNativeStackNavigator();

  const AppNavigatorContainer = () => {
    const firstScreen =
      walkThrough == false
        ? 'WalkthroughScreen'
        : token == null
        ? 'LoginScreen'
        : // ? 'Start'
          'Home';

    return (
      <NavigationContainer ref={navigationService.navigationRef}>
        <RootNav.Navigator
          initialRouteName={firstScreen}
          screenOptions={{headerShown: false}}>
          <RootNav.Screen name="MyDrawer" component={MyDrawer} />
          <RootNav.Screen
            name="WalkthroughScreen"
            component={WalkThroughScreen}
          />
          <RootNav.Screen name="SplashScreen" component={SplashScreen} />
          <RootNav.Screen name="SavedTemplates" component={SavedTemplates} />
          <RootNav.Screen name="SignupScreen" component={SignupScreen} />
          <RootNav.Screen name="LoginScreen" component={LoginScreen} />
          <RootNav.Screen name="Home" component={Home} />

          <RootNav.Screen name="VerifyEmail" component={VerifyEmail} />
          <RootNav.Screen name="FinalBlogPost" component={FinalBlogPost} />
          <RootNav.Screen name="EditBlogPost" component={EditBlogPost} />
          <RootNav.Screen name="FinalEmail" component={FinalEmail} />

          <RootNav.Screen name="ResetPassword" component={ResetPassword} />
          <RootNav.Screen name="ChangePassword" component={ChangePassword} />
          <RootNav.Screen name="VerifyNumber" component={VerifyNumber} />
          <RootNav.Screen name="ResumeScreen" component={ResumeScreen} />
          <RootNav.Screen name="EditResume" component={EditResume} />
          <RootNav.Screen name="EditCoverLetter" component={EditCoverLetter} />
          <RootNav.Screen
            name="FinalCoverLetter"
            component={FinalCoverLetter}
          />

          <RootNav.Screen
            name="ResumeFinalScreen"
            component={ResumeFinalScreen}
          />
        </RootNav.Navigator>
      </NavigationContainer>
    );
  };

  return <AppNavigatorContainer />;
};

// export const TabNavigation = () => {
//   const Tabs = createBottomTabNavigator();
//   return (
//     <Tabs.Navigator
//       // tabBar={(props) => {
//       //   return (
//       //     <LinearGradient
//       //       colors={['red', 'blue']}

//       //       start={[1, 0]}
//       //       end={[0, 0]}
//       //     >
//       //       <BottomTabBar
//       //         {...props}
//       //         style={{ backgroundColor: 'transparent' }}
//       //       />
//       //     </LinearGradient>
//       //   );
//       // }}
//       screenOptions={({route}) => ({
//         headerShown: false,
//         tabBarShowLabel: false,
//         tabBarStyle: {
//           // backgroundColor:'pink',
//           // backgroundColor: Color.red,
//           // borderTopLeftRadius:15,
//           // borderTopRightRadius:15,
//           // paddingVertical:5
//         },
//         tabBarIcon: ({focused}) => {
//           let iconName;
//           let color = Color.theme2;
//           let size = moderateScale(20, 0.3);
//           let type = Ionicons;

//           // if (route.name === 'HomeScreen') {
//           //   iconName = focused ? 'home' : 'home-outline';

//           //   color = focused ? Color.theme2 : Color.white;
//           //   size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
//           // } else
//           if (route.name === 'Donation') {
//             iconName = focused ? 'donate' : 'donate';
//             type = FontAwesome5;
//             color = focused ? Color.theme2 : Color.white;
//             size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
//           } else if (route.name === 'StoreScreen') {
//             iconName = focused ? 'cart' : 'cart';
//             color = focused ? Color.theme2 : Color.white;
//             size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
//           } else if (route?.name == 'Campaigns') {
//             size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
//           } else {
//             iconName = focused ? 'settings-sharp' : 'settings-outline';
//             color = focused ? Color.theme2 : Color.white;
//             size = focused ? moderateScale(30, 0.3) : moderateScale(20, 0.3);
//           }
//           return route.name == 'Campaigns' ? (
//             <View
//               style={{
//                 borderWidth: 5,
//                 borderColor: Color.lightGrey,
//                 height: moderateScale(60, 0.3),
//                 width: moderateScale(60, 0.3),
//                 borderRadius: moderateScale(30, 0.3),
//                 backgroundColor: Color.theme2,
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 marginTop: moderateScale(-30, 0.3),
//               }}>
//               <Icon
//                 name={'search'}
//                 as={Feather}
//                 color={Color.white}
//                 size={size}
//               />
//             </View>
//           ) : (
//             <Icon name={iconName} as={type} color={color} size={size} />
//           );
//         },
//         tabBarShowLabel: false,
//         tabBarBackground: () => (
//           <View style={{flex: 1}}>
//             <LinearGradient
//               start={{x: 0, y: 0}}
//               end={{x: 0, y: 1}}
//               colors={Color.tabBarGradient}
//               style={{height: windowHeight * 0.1}}
//             />
//           </View>
//         ),
//       })}>
//       {/* <Tabs.Screen name={'HomeScreen'} component={HomeScreen} /> */}
//       {/* <Tabs.Screen name={'Donation'} component={Donation} />
//       <Tabs.Screen name={'Campaigns'} component={Campaigns} />
//       {/* <Tabs.Screen name={'BibleCategories'} component={BibleCategories} /> */}
//       {/* <Tabs.Screen name={'StoreScreen'} component={StoreScreen} /> */}
//       <Tabs.Screen name={'Settings'} component={Settings} />
//     </Tabs.Navigator>
//   );
// };

export const MyDrawer = () => {
  const DrawerNavigation = createDrawerNavigator();
  const firstScreen = 'HomeScreen';
  return (
    <DrawerNavigation.Navigator
      drawerContent={props => <Drawer {...props} />}
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: '80%',
          borderTopRightRadius: moderateScale(120, 0.6),
          borderBottomRightRadius: moderateScale(120, 0.6),
        },
      }}>
      <DrawerNavigation.Screen name="Home" component={Home} />
    </DrawerNavigation.Navigator>
  );
};

export default AppNavigator;
