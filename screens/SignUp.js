import React, { useState } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import SignUpForm from '../src/components/organism/SignUp';

function SignUp({ navigation }) {
  const [data, setData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidPassword: true,
    confirm_secureTextEntry: true,
  });

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Register now!</Text>
      </View>
      <SignUpForm data={data} setDataFunction={setData} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387',
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
export default SignUp;
