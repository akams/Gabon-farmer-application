import React from 'react';
import { StyleSheet, View, Text, Platform, TouchableOpacity, TextInput } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import * as Animatable from 'react-native-animatable';

import Button from '../../atoms/Button';

function SigninForm({ setDataFunction, data, navigation }) {
  const { check_textInputChange, secureTextEntry } = data;

  const textInputChange = (val) => {
    if (val.trim().length >= 4) {
      setDataFunction({
        ...data,
        username: val,
        check_textInputChange: true,
      });
    } else {
      setDataFunction({
        ...data,
        username: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    if (val.trim().length >= 2) {
      setDataFunction({
        ...data,
        password: val,
        isValidPassword: true,
      });
    } else {
      setDataFunction({
        ...data,
        password: val,
        isValidPassword: false,
      });
    }
  };

  const updateSecureTextEntry = () => {
    setDataFunction({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <Animatable.View animation="fadeInUpBig" style={styles.footer}>
      <Text style={styles.text_footer}>Username</Text>
      <View style={styles.action}>
        <Icon size={20} name="person-outline" color="#05375a" />
        <TextInput
          placeholder="Your Username"
          autoCapitalize="none"
          onChangeText={(val) => textInputChange(val)}
          placeholderTextColor="#666666"
          style={styles.textInput}
        />
        {check_textInputChange ? (
          <Animatable.View animation="bounceIn">
            <Feather name="check-circle" color="green" size={20} />
          </Animatable.View>
        ) : null}
      </View>
      <Text style={[styles.text_footer, styles.addMargin]}>Password</Text>
      <View style={styles.action}>
        <Icon size={20} name="lock-closed-outline" color="#05375a" />
        <TextInput
          onChangeText={(val) => handlePasswordChange(val)}
          secureTextEntry={!!secureTextEntry}
          placeholder="Your password"
          autoCapitalize="none"
          style={styles.textInput}
        />
        <TouchableOpacity onPress={updateSecureTextEntry}>
          <Feather name={secureTextEntry ? 'eye-off' : 'eye'} color="grey" size={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <LinearGradient colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
          <Text style={[styles.textSign, styles.textWhite]}>Sign In</Text>
        </LinearGradient>
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('SignUp')}
          styleBtnContainer={[styles.signIn, styles.btnSignUp]}
          styleBtnText={[styles.textSign, styles.colorTxt]}
        />
      </View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  colorTxt: {
    color: '#009387',
  },
  btnSignUp: {
    borderColor: '#009387',
    borderWidth: 1,
    marginTop: 15,
  },
  addMargin: {
    marginTop: 35,
  },
  textWhite: {
    color: '#fff',
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SigninForm;
