import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';

import { Header, SearchBar, CategoriesProduct } from '../../molecules/Home';

import { COLORS } from '../../../../constants/colors';

function Home({ navigation, user }) {
  return (
    <View style={styles.container}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Header navigation={navigation} />
        <SearchBar navigation={navigation} />
        <CategoriesProduct navigation={navigation} />
      </ScrollView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
});
