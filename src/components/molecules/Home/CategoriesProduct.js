import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { Avatar, Title } from 'react-native-paper';

import { COLORS } from '../../../../constants/colors';
import { SIZES } from '../../../../constants/themes';

import meatImg from '../../../../assets/home/meats.jpg';
import fruitsImg from '../../../../assets/home/fruits.jpg';
import vegetablesImg from '../../../../assets/home/vegetables.jpg';
import rizImg from '../../../../assets/home/riz.jpg';
import seafoodsImg from '../../../../assets/home/seafoods.jpg';

const DATA = [
  [
    {
      id: 'bd7acbea',
      title: 'Légumes',
      img: vegetablesImg,
    },
    {
      id: '3ac68afc',
      title: 'Fruits',
      img: fruitsImg,
    },
    {
      id: '58694a0f',
      title: 'Riz',
      img: rizImg,
    },
  ],
  [
    {
      id: '3da1471f',
      title: 'Viandes',
      img: meatImg,
    },
    {
      id: 'bd961455',
      title: 'Fruit de mer',
      img: seafoodsImg,
    },
  ],
];

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

function CategoriesProduct({ navigation, categories }) {
  function renderMainCategories() {
    const renderItem = ({ item }) => <Item {...item} />;
    return (
      <View>
        <FlatList
          data={DATA[0]}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingHorizontal: SIZES.padding * 0.5,
          }}
        />
        <FlatList
          data={DATA[1]}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => `${item.id}`}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingHorizontal: SIZES.padding2 * 4,
          }}
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={[SIZES.h1, styles.headTitle]}>Catégories principales</Text>
      {renderMainCategories()}
    </View>
  );
}

export default CategoriesProduct;

const styles = StyleSheet.create({
  headTitle: {
    paddingLeft: SIZES.padding * 4,
    paddingTop: 40,
    fontWeight: 'bold',
    fontSize: 26,
  },
  sectionInfo: {
    paddingLeft: 20,
    paddingTop: 20,
  },
  sectionAvatarTitle: { flexDirection: 'row', marginTop: 15 },
  sectionTitle: { marginLeft: 15, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.black,
  },

  fontSize: { fontSize: 16 },
  textArea: { flex: 1 },
  container: {
    paddingBottom: 10,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
});
