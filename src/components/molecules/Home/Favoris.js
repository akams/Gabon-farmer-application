import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';

import Card from '../../atoms/Card';

import { COLORS } from '../../../../constants/colors';
import { SIZES } from '../../../../constants/themes';

import appleFruitsImg from '../../../../assets/fruits/apple.jpg';
import bananeFruitsImg from '../../../../assets/fruits/banane.jpg';

const DATA = [
  {
    id: 'bd7acbea',
    image: appleFruitsImg,
    title: 'Pomme',
    description: '3,00$ - 1Kg',
  },
  {
    id: '3ac68afc',
    image: bananeFruitsImg,
    title: 'Banane',
    description: '2,95$ - 1Kg',
  },
  {
    id: '3ac68afc2',
    image: bananeFruitsImg,
    title: 'Banane',
    description: '2,95$ - 1Kg',
  },
  {
    id: '3ac68afc3',
    image: bananeFruitsImg,
    title: 'Banane',
    description: '2,95$ - 1Kg',
  },
  {
    id: '3ac68afc4',
    image: bananeFruitsImg,
    title: 'Banane',
    description: '2,95$ - 1Kg',
  },
  {
    id: '3ac68afc5',
    image: bananeFruitsImg,
    title: 'Banane',
    description: '2,95$ - 1Kg',
  },
  {
    id: '3ac68afc6',
    image: bananeFruitsImg,
    title: 'Banane',
    description: '2,95$ - 1Kg',
  },
  {
    id: '3ac68afc7',
    image: bananeFruitsImg,
    title: 'Banane',
    description: '2,95$ - 1Kg',
  },
];

function Favoris({ navigation, categories }) {
  function renderFav() {
    const renderItem = ({ item }) => <Card itemData={item} onPress={() => console.log('okay!')} />;
    return (
      <View>
        <FlatList
          data={DATA}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.headContainer}>
        <View style={styles.centerIconLeft}>
          <Text style={[SIZES.h1, styles.title]}>Favori</Text>
        </View>

        <View style={styles.middle} />

        <TouchableOpacity style={styles.centerIconRight}>
          <Text style={[SIZES.h1, styles.seeAll]}>Voir tout</Text>
        </TouchableOpacity>
      </View>
      <View>{renderFav()}</View>
    </View>
  );
}

export default Favoris;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 26,
  },
  seeAll: { color: COLORS.darkgray },
  container: {
    paddingLeft: SIZES.padding * 4,
    paddingTop: SIZES.padding * 2,
  },
  headContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  centerIconLeft: {
    justifyContent: 'center',
  },
  centerIconRight: {
    paddingRight: SIZES.padding * 4,
    justifyContent: 'center',
  },
  middle: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
