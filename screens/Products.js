import React, { useContext } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import { AuthContext } from '../navigation/AuthProvider';
import ProductsOrganisms from '../src/components/organism/Products';

import { COLORS } from '../constants/colors';

function Products({ route, navigation }) {
  const { user } = useContext(AuthContext);
  const {
    params: { id, title },
  } = route;
  return (
    <SafeAreaView style={styles.container}>
      <ProductsOrganisms user={user} navigation={navigation} params={{ id, title }} />
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
