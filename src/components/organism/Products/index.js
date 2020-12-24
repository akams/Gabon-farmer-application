import React from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { SearchBar } from '../../molecules/Home';
import Header from '../../atoms/Header';
import Card from '../../atoms/Card';

import { SIZES } from '../../../../constants/themes';
import { COLORS } from '../../../../constants/colors';

import appleFruitsImg from '../../../../assets/fruits/apple.jpg';
import bananeFruitsImg from '../../../../assets/fruits/banane.jpg';

const DATA = [
  {
    id: 'bd7acbea',
    image: appleFruitsImg,
    title: 'Pomme',
    description: '3,00$ - 1Kg',
    isFav: true,
  },
  {
    id: '3ac68afc',
    image: bananeFruitsImg,
    title: 'Banane',
    description: '2,95$ - 1Kg',
    isFav: false,
  },
  {
    id: '3ac68afc2',
    image: bananeFruitsImg,
    title: 'Banane',
    description: '2,95$ - 1Kg',
    isFav: true,
  },
  {
    id: '3ac68afc3',
    image: bananeFruitsImg,
    title: 'Banane',
    description: '2,95$ - 1Kg',
    isFav: true,
  },
  {
    id: '3ac68afc4',
    image: bananeFruitsImg,
    title: 'Banane',
    description: '2,95$ - 1Kg',
    isFav: true,
  },
  {
    id: '3ac68afc5',
    image: bananeFruitsImg,
    title: 'Banane',
    description: '2,95$ - 1Kg',
    isFav: true,
  },
];

function Products({ navigation, user }) {
  const renderItem = ({ item }) => (
    <Card
      itemData={item}
      onPress={() => console.log('okay!')}
      mainContainerCard={{
        paddingHorizontal: 20,
        paddingBottom: 20,
      }}
    />
  );

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
        <View>
          <FlatList
            numColumns={2}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{
              paddingHorizontal: SIZES.padding * 2,
            }}
          />
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
  },
  middle: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
