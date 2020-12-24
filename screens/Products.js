import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import { AuthContext } from '../navigation/AuthProvider';
import ProductsOrganisms from '../src/components/organism/Products';

import { COLORS } from '../constants/colors';

function Products({ navigation }) {
  const { user } = useContext(AuthContext);
  return (
    <SafeAreaView style={styles.container}>
      <ProductsOrganisms user={user} navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
});

export default Products;
