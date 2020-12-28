import React from 'react';
import { StyleSheet, SafeAreaView, Text } from 'react-native';

import DetailsProductOrganisms from '../src/components/organism/DetailsProduct';

import { COLORS } from '../constants/colors';

function DetailsProduct({ route, navigation }) {
  const {
    params: { id, title },
  } = route;
  return (
    <SafeAreaView style={styles.container}>
      <DetailsProductOrganisms navigation={navigation} params={{ id, title }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
});

export default DetailsProduct;
