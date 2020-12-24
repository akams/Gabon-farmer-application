import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { SIZES } from '../../../../constants/themes';

function Header({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.centerIconLeft}>
        <Icon name="ios-menu" size={25} onPress={() => navigation.openDrawer()} />
      </TouchableOpacity>

      <View style={styles.middle} />

      <TouchableOpacity style={styles.centerIconRight}>
        <Icon name="basket-outline" size={30} />
      </TouchableOpacity>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
  },
  centerIconLeft: {
    paddingLeft: SIZES.padding * 2,
    justifyContent: 'center',
  },
  centerIconRight: {
    paddingRight: SIZES.padding * 2,
    justifyContent: 'center',
  },
  middle: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
