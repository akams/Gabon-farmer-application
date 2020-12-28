/* eslint-disable react/display-name */
/* eslint-disable eslint-comments/no-unlimited-disable */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import { ENVIRONMENT } from '@env';// eslint-disable-line

import { Home, Favoris, Messages, Wallet, Profil, Support, Products } from '../screens';
import { DrawerContent } from './DrawerContent';

import StackScreen from '../src/components/atoms/StackScreen';

console.log('ENVIRONMENT', ENVIRONMENT);

const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const FavorisStack = createStackNavigator();
const MessagesStack = createStackNavigator();
const WalletStack = createStackNavigator();
const ProfilStack = createStackNavigator();
const SupportStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <HomeStack.Screen
      name="Home"
      component={Home}
      options={{
        title: 'Overview',
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()} />
        ),
      }}
    />
    <HomeStack.Screen
      name="Products"
      component={Products}
      options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()} />
        ),
      }}
    />
  </HomeStack.Navigator>
);

const FavorisStackScreen = ({ navigation }) => (
  <StackScreen componentStack={FavorisStack} screen={Favoris} navigation={navigation} name="Favoris" />
);

const MessagesStackScreen = ({ navigation }) => (
  <StackScreen componentStack={MessagesStack} screen={Messages} navigation={navigation} name="Messages" />
);

const WalletStackScreen = ({ navigation }) => (
  <StackScreen componentStack={WalletStack} screen={Wallet} navigation={navigation} name="Wallet" />
);

const ProfilStackScreen = ({ navigation }) => (
  <StackScreen componentStack={ProfilStack} screen={Profil} navigation={navigation} name="Profil" />
);

const SupportStackScreen = ({ navigation }) => (
  <StackScreen componentStack={SupportStack} screen={Support} navigation={navigation} name="Support" />
);

const SetttingsStackScreen = ({ navigation }) => (
  <StackScreen componentStack={SettingsStack} screen={Support} navigation={navigation} name="Settings" />
);

function DrawNavigateScreens() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeStackScreen} />
      <Drawer.Screen name="Favoris" component={FavorisStackScreen} />
      <Drawer.Screen name="Messages" component={MessagesStackScreen} />
      <Drawer.Screen name="Wallet" component={WalletStackScreen} />
      <Drawer.Screen name="Profil" component={ProfilStackScreen} />
      <Drawer.Screen name="Support" component={SupportStackScreen} />
      <Drawer.Screen name="Settings" component={SetttingsStackScreen} />
    </Drawer.Navigator>
  );
}

export default DrawNavigateScreens;
