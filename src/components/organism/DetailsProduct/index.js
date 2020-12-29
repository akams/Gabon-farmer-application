import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import { dispatchSetCart } from '../../../../redux/actions/cartAction';

import Header from '../../atoms/Header';

import { SIZES } from '../../../../constants/themes';
import { COLORS } from '../../../../constants/colors';

import appleFruitsImg from '../../../../assets/fruits/apple.jpg';

const DATA = {
  id: 'bd7acbea',
  image: appleFruitsImg,
  title: 'Pomme',
  price: 1.95,
  devise: '$',
  weight: '1kg',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed imperdiet sagittis libero, in scelerisque elit facilisis a. Fusce tincidunt leo eu massa lacinia hendrerit. Proin vulputate sapien neque, quis vulputate quam congue vel. Aenean rhoncus egestas pellentesque. Maecenas nec ornare diam. Proin mattis velit et faucibus sollicitudin. Phasellus iaculis elementum ornare. Aliquam aliquet faucibus orci eget interdum. Suspendisse accumsan eu urna nec viverra.',
  isFav: true,
};

const pad = (d) => (d < 10 ? `0${d.toString()}` : d.toString());

const formatPrice = (price, devise) => `${price.toFixed(2)}${devise}`;

const verifData = (value) => (value <= 1 ? 1 : value);

function DetailsProduct(props) {
  const { navigation, dispatchSetCartFunction } = props;
  const [count, seCounter] = useState(1);
  const onSubmit = () => {
    dispatchSetCartFunction({ ...DATA, qte: count });
  };
  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header isBackComponent displayMarket={false} navigation={navigation} />
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image source={DATA.image} resizeMode="cover" style={styles.cardImg} />
          </View>
        </View>
        <View>
          <View style={styles.cardBodyText}>
            <View style={styles.outterView}>
              <Text style={styles.title}>{DATA.title}</Text>
            </View>
            <View style={[styles.headContainer, styles.outterView]}>
              <View style={styles.centerIconLeft}>
                <Text style={[styles.infoPage]}>{formatPrice(DATA.price, DATA.devise)}</Text>
              </View>

              <View style={styles.middle} />

              <View style={styles.sectionInfo}>
                <View style={styles.sectionAvatarTitle}>
                  <TouchableOpacity onPress={() => seCounter(verifData(count - 1))}>
                    <Icon name="remove-circle-outline" color="#FE716C" size={40} style={styles.seeAll} />
                  </TouchableOpacity>
                  <Text style={[styles.infoPage]}>{pad(count)}</Text>
                  <TouchableOpacity onPress={() => seCounter(verifData(count + 1))}>
                    <Icon name="add-circle-outline" color="#FE716C" size={40} style={styles.seeAll} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={[styles.headContainer, styles.outterView]}>
              <Text>
                {formatPrice(DATA.price, DATA.devise)} - {DATA.weight}
              </Text>
            </View>
            <View style={[styles.headContainer, styles.outterView]}>
              <Text numberOfLines={7}>{DATA.description}</Text>
            </View>
            <View style={[styles.headContainer, styles.outterView]}>
              <Icon.Button
                name={DATA.isFav ? 'heart' : 'heart-outline'}
                size={30}
                color="#FE716C"
                iconStyle={styles.heart}
                onPress={() => console.log('heart')}
                style={styles.heart}
              />
              <TouchableOpacity style={styles.btnAddCart} onPress={() => onSubmit()}>
                <Text style={styles.txtCart}>Ajouter au panier</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: { fontSize: 36, fontWeight: 'bold', paddingTop: 20 },
  txtCart: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  btnAddCart: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#FE716C',
    borderRadius: SIZES.radius * 0.5,
  },
  heart: {
    backgroundColor: '#fff',
    marginRight: 0,
  },
  sectionAvatarTitle: { flexDirection: 'row' },
  infoPage: {
    color: '#FE716C',
    fontSize: 30,
  },
  outterView: {
    paddingHorizontal: 20,
  },
  cardBodyText: {
    backgroundColor: '#EFEFEF',
    marginHorizontal: 20,
    borderRadius: SIZES.radius,
  },
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
  card: {
    width: 300,
    height: 300,
    marginVertical: 10,
    marginHorizontal: 55,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },
  cardImgWrapper: {
    flex: 1,
    marginBottom: 30,
  },
  cardImg: {
    width: '100%',
    height: '100%',
    borderRadius: SIZES.radius,
  },
  headContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
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

const mapDispatchToProps = {
  dispatchSetCartFunction: (values) => dispatchSetCart(values),
};
const mapStateToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DetailsProduct);
