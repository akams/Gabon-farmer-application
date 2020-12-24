/* eslint-disable eslint-comments/no-unlimited-disable */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { ENVIRONMENT } from '@env';// eslint-disable-line

import { Home, Favoris, Messages, Wallet, Profil, Support, Products } from '../screens';
import { DrawerContent } from './DrawerContent';

import StackScreen from '../src/components/atoms/StackScreen';

console.log('ENVIRONMENT', ENVIRONMENT);

const Drawer = createDrawerNavigator();

const HomeStack = createStackNavigator();
const ProductsStack = createStackNavigator();
const FavorisStack = createStackNavigator();
const MessagesStack = createStackNavigator();
const WalletStack = createStackNavigator();
const ProfilStack = createStackNavigator();
const SupportStack = createStackNavigator();
const SettingsStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => (
  <StackScreen
    componentStack={HomeStack}
    screen={Home}
    navigation={navigation}
    name="Home"
    optionsTitle="Overview"
    defaultHeader={false}
  />
);

const ProductsStackScreen = ({ navigation }) => (
  <StackScreen
    componentStack={ProductsStack}
    screen={Products}
    navigation={navigation}
    name="Products"
    defaultHeader={false}
  />
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
      <Drawer.Screen name="Products" component={ProductsStackScreen} />
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
