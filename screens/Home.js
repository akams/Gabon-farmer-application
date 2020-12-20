import React, { useEffect, useContext } from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar, Button } from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import firestore from '@react-native-firebase/firestore';

import { AuthContext } from '../navigation/AuthProvider';

// function Home({ navigation }) {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView contentInsetAdjustmentBehavior="automatic" style={styles.scrollView}>
//           <View style={styles.layout}>
//             <Text>Home page</Text>
//             <Text>Hello Eric</Text>
//             <Button title="Go to Feed screen" onPress={() => navigation.navigate('Feed')} />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// }

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
    <View style={styles.layout}>
      <Text>Home page</Text>
      <Text>Hello {user.email}</Text>
      <Button title="Go to notif screen" onPress={() => navigation.navigate('Notifications')} />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});

export default Home;
