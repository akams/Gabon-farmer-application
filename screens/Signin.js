import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, StatusBar } from 'react-native';

import SigninForm from '../src/components/organism/SignIn';

import { AuthContext } from '../navigation/AuthProvider';

function Signin({ navigation }) {
  const { login } = useContext(AuthContext);
  const [data, setData] = useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const submit = (dataValues) => {
    const { email, password: pwd } = dataValues;
    login(email, pwd);
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome</Text>
      </View>
      <SigninForm data={data} onSubmitFunction={submit} setDataFunction={setData} navigation={navigation} />
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
export default Signin;
