import React, { useEffect, useContext } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';

import firestore from '@react-native-firebase/firestore';

import { AuthContext } from '../navigation/AuthProvider';

import HomeOrganisms from '../src/components/organism/Home';

import { COLORS } from '../constants/colors';

function Home({ navigation }) {
  const { user } = useContext(AuthContext);
  useEffect(() => {
    async function fetch() {
      const data = [];
      const querySnapshot = await firestore().collection('users').get();
      querySnapshot.forEach((doc) => {
        data.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      console.log(data);
    }
    fetch();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <HomeOrganisms user={user} navigation={navigation} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightGray4,
  },
});

export default Home;
