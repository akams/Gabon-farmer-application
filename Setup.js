/* eslint-disable react/display-name */
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';

import { Home, Notifications } from './screens';

const HomeStack = createStackNavigator();
const NotifStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
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
  </HomeStack.Navigator>
);

const NotifStackScreen = ({ navigation }) => (
  <NotifStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <NotifStack.Screen
      name="Notifications"
      component={Notifications}
      options={{
        headerLeft: () => (
          <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()} />
        ),
      }}
    />
  </NotifStack.Navigator>
);

// function CustomDrawerContent(props) {
//   return (
//     <DrawerContentScrollView {...props}>
//       <DrawerItemList {...props} />
//       <DrawerItem label="Close drawer" onPress={() => props.navigation.closeDrawer()} />
//       <DrawerItem label="Toggle drawer" onPress={() => props.navigation.toggleDrawer()} />
//     </DrawerContentScrollView>
//   );
// }

// function DrawerNavigation() {
//   return (
//     <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
//       <Drawer.Screen name="Home" component={Home} />
//       <Drawer.Screen name="Feed" component={Feed} />
//       <Drawer.Screen name="Notifications" component={Notifications} />
//     </Drawer.Navigator>
//   );
// }

function DrawNavigateScreens() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeStackScreen} />
      <Drawer.Screen name="Notifications" component={NotifStackScreen} />
    </Drawer.Navigator>
  );
}

export default function Setup() {
  return (
    <NavigationContainer>
      <DrawNavigateScreens />
    </NavigationContainer>
  );
}
