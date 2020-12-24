import React, { useContext } from 'react';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { StyleSheet, View } from 'react-native';
import { Drawer, Avatar, Title, Caption, Paragraph } from 'react-native-paper';

import Icon from 'react-native-vector-icons/Ionicons';

import { AuthContext } from './AuthProvider';

export function DrawerContent(props) {
  const { logout } = useContext(AuthContext);
  return (
    <View style={styles.MainContainer}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={styles.userSectionAvatar}>
              <Avatar.Image
                source={{
                  uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
                }}
                size={50}
              />
              <View style={styles.userSectionName}>
                <Title style={styles.title}>John Doe</Title>
                <Caption style={styles.caption}>5 *</Caption>
              </View>
            </View>

            <View style={styles.row}>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>7</Paragraph>
                <Caption style={styles.caption}>Commandes</Caption>
              </View>
              <View style={styles.section}>
                <Paragraph style={[styles.paragraph, styles.caption]}>100$</Paragraph>
                <Caption style={styles.caption}>total</Caption>
              </View>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            label="Home"
            icon={() => <Icon name="home-outline" size={20} />}
            onPress={() => props.navigation.navigate('Home')}
          />
          <DrawerItem
            label="Favoris"
            icon={() => <Icon name="bookmarks-outline" size={20} />}
            onPress={() => props.navigation.navigate('Favoris')}
          />
          <DrawerItem
            label="Messages"
            icon={() => <Icon name="mail-outline" size={20} />}
            onPress={() => props.navigation.navigate('Messages')}
          />
          <DrawerItem
            label="Wallet"
            icon={() => <Icon name="wallet-outline" size={20} />}
            onPress={() => props.navigation.navigate('Wallet')}
          />
          <DrawerItem
            label="Profil"
            icon={() => <Icon name="person-outline" size={20} />}
            onPress={() => props.navigation.navigate('Profil')}
          />
          <DrawerItem
            label="Aide"
            icon={() => <Icon name="help-circle-outline" size={20} />}
            onPress={() => props.navigation.navigate('Support')}
          />
          <DrawerItem
            label="Paramètre"
            icon={() => <Icon name="settings-outline" size={20} />}
            onPress={() => props.navigation.navigate('Settings')}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem label="Sign out" icon={() => <Icon name="log-out-outline" size={20} />} onPress={() => logout()} />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
  },
  // MainContainer: {
  //   flex: 1,
  //   paddingTop: 20,
  //   alignItems: 'center',
  //   marginTop: 50,
  //   justifyContent: 'center',
  // },
  userInfoSection: {
    paddingLeft: 20,
  },
  userSectionAvatar: { flexDirection: 'row', marginTop: 15 },
  userSectionName: { marginLeft: 15, flexDirection: 'column' },
  drawerSection: {
    marginBottom: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  drawerContent: {
    flex: 1,
    marginBottom: 40,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
