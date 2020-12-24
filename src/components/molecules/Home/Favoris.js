import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { Avatar, Title } from 'react-native-paper';

import Card from '../../atoms/Card';

import { COLORS } from '../../../../constants/colors';
import { SIZES } from '../../../../constants/themes';

import appleFruitsImg from '../../../../assets/fruits/apple.jpg';

// const DATA = [
//   [
//     {
//       id: 'bd7acbea',
//       title: 'Légumes',
//       img: vegetablesImg,
//     },
//     {
//       id: '3ac68afc',
//       title: 'Fruits',
//       img: fruitsImg,
//     },
//     {
//       id: '58694a0f',
//       title: 'Riz',
//       img: rizImg,
//     },
//   ],
//   [
//     {
//       id: '3da1471f',
//       title: 'Viandes',
//       img: meatImg,
//     },
//     {
//       id: 'bd961455',
//       title: 'Fruit de mer',
//       img: seafoodsImg,
//     },
//   ],
// ];

const Item = ({ title, img }) => (
  <View style={styles.sectionInfo}>
    <View style={styles.sectionAvatarTitle}>
      <Avatar.Image style={styles.shadow} source={img} size={50} />
      <View style={styles.sectionTitle}>
        <Title style={styles.title}>{title}</Title>
      </View>
    </View>
  </View>
);

function Favoris({ navigation, categories }) {
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
      <View>
        <Card
          itemData={{
            image: appleFruitsImg,
            title: 'Pomme',
            description: '3,00$ - 1Kg',
          }}
          onPress={() => console.log('okay!')}
        />
      </View>
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
