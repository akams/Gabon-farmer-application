import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { SIZES } from '../../../../constants/themes';
import { COLORS } from '../../../../constants/colors';

const Card = ({ itemData, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.card}>
      <View style={styles.cardImgWrapper}>
        <Icon name="heart" size={30} onPress={() => console.log('heart')} style={styles.heart} />
        <Image source={itemData.image} resizeMode="cover" style={styles.cardImg} />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle}>{itemData.title}</Text>
        <Text numberOfLines={1} style={styles.cardDetails}>
          {itemData.description}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default Card;

const styles = StyleSheet.create({
  heart: {
    color: '#FF797A',
    position: 'absolute',
    top: 10,
    right: 10,
    elevation: 1,
    zIndex: 1,
  },
  card: {
    width: 150,
    height: 150,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    zIndex: 5,
  },
  cardImgWrapper: {
    flex: 1,
    // backgroundColor: '#D6B7F3',
    // borderRadius: SIZES.radius,
  },
  cardImg: {
    height: '100%',
    width: 150,
    alignSelf: 'center',
    borderRadius: SIZES.radius,
  },
  cardInfo: {
    position: 'absolute',
    bottom: 0,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    zIndex: 2,
    marginHorizontal: 40,

    width: SIZES.width * 0.3,
    backgroundColor: COLORS.white,
    borderTopRightRadius: SIZES.radius,
    borderBottomLeftRadius: SIZES.radius,
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
