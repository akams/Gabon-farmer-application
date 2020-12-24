import React from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { SearchBar } from '../../molecules/Home';
import Header from '../../atoms/Header';

import { SIZES } from '../../../../constants/themes';
import { COLORS } from '../../../../constants/colors';

function Products({ navigation, user }) {
  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header isBackComponent navigation={navigation} />
        <SearchBar navigation={navigation} />
        <Text style={[SIZES.h1, styles.headTitle]}>Légumes</Text>

        <View style={styles.headContainer}>
          <View style={styles.centerIconLeft}>
            <Text style={[SIZES.h1, styles.infoPage]}>15 produits</Text>
          </View>

          <View style={styles.middle} />

          <TouchableOpacity style={styles.sectionInfo} onPress={() => console.log('filter')}>
            <View style={styles.sectionAvatarTitle}>
              <Icon name="filter-outline" size={20} style={styles.seeAll} />
              <View style={styles.sectionTitle}>
                <Text style={[styles.title, styles.seeAll]}>Filtrer</Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.centerIconRight} />
        </View>
      </ScrollView>
    </View>
  );
}

export default Products;

const styles = StyleSheet.create({
  sectionInfo: {},
  sectionAvatarTitle: { flexDirection: 'row' },
  sectionTitle: { marginLeft: 5, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },
  title: {
    fontSize: 15,
    fontWeight: '400',
  },

  seeAll: { color: COLORS.darkgray },
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  headTitle: {
    paddingLeft: SIZES.padding * 4,
    paddingTop: 20,
    fontWeight: 'bold',
    fontSize: 26,
  },
  infoPage: {
    paddingLeft: SIZES.padding * 4,
    fontWeight: '400',
    fontSize: 15,
    color: COLORS.darkgray,
  },
  headContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
    paddingTop: 20,
  },
  centerIconLeft: {
    justifyContent: 'center',
  },
  centerIconRight: {
    paddingRight: SIZES.padding * 4,

    // flexGrow: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // textAlignVertical: 'bottom',
  },
  middle: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
