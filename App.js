import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import SettingScreen from './screens/SettingScreen';
import customSideBarMenu from './components/customSideBarMenu'
import SignupLoginScreen from './screens/SignupLoginScreen';
import ExchangeScreen from './screens/ExchangeScreen';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render(){
    return( 
      <View>
        <AppContainer/>
      </View>
    )
  }
}

const AppTabNavigator = createBottomTabNavigator({
  Exchange:{screen:ExchangeScreen},
  HomeScreen:{screen:HomeScreen}
})

const SwitchNavigator = createSwitchNavigator({
  SignupLoginScreen:{screen:SignupLoginScreen},
  Drawer:{screen:AppDrawerNavigator}
})

const AppDrawerNavigator = createDrawerNavigator({
  Home : {
    screen : AppTabNavigator
    },
    Setting:{
      screen:SettingScreen
    }
  },
  {
    contentComponent: customSideBarMenu
  },
  {
    initialRouteName : 'Home'
  })

const AppContainer=createAppContainer(SwitchNavigator)


