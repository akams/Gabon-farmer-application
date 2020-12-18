import React from 'react';
// import react in our code.
import { StyleSheet, View, Text, Button } from 'react-native';
// import all basic components

function Notifications({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      <Button title="Go to Notifications screen" onPress={() => navigation.navigate('Notifications')} />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button title="Go to the forst" onPress={() => navigation.popToTop()} />
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

export default Notifications;
