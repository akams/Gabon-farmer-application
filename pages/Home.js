import React from 'react';
// import react in our code.
import { StyleSheet, View, Text } from 'react-native';
// import all basic components

function Home({ userName = 'Eric' }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home page</Text>
      <Text>Hello {userName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    marginTop: 50,
    justifyContent: 'center',
  },
});

export default Home;
