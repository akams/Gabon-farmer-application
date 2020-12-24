import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { COLORS } from '../../../../constants/colors';
import { SIZES } from '../../../../constants/themes';

function SearchBar({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.centerIconLeft} />
      <View style={styles.middle}>
        <View style={styles.textArea}>
          <TextInput style={styles.fontSize} placeholder="Que cherchez-vous?" autoCapitalize="none" />
        </View>

        <Icon
          name="search-outline"
          style={{
            marginRight: SIZES.padding,
          }}
          size={30}
          onPress={() => navigation.openDrawer()}
        />
      </View>
      <View style={styles.centerIconRight} />
    </View>
  );
}

export default SearchBar;

const styles = StyleSheet.create({
  fontSize: { fontSize: 16 },
  textArea: { flex: 1 },
  container: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerIconLeft: {
    paddingLeft: SIZES.padding * 2,
    justifyContent: 'center',
  },
  centerIconRight: {
    paddingRight: SIZES.padding * 2,
    justifyContent: 'center',
  },
  middle: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: SIZES.width * 0.9,
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding * 2,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.white,
  },
});
