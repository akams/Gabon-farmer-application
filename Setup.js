import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import Home from './pages/Home';
import Feed from './pages/Feed';
import Notifications from './pages/Notifications';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="Close drawer" onPress={() => props.navigation.closeDrawer()} />
      <DrawerItem label="Toggle drawer" onPress={() => props.navigation.toggleDrawer()} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Home" drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Notifications" component={Notifications} />
    </Drawer.Navigator>
  );
}

export default function Setup() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
