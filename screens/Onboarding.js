/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { Alert, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

import Button from '../src/components/atoms/Button';

import onlineshop from '../assets/onboarding-onlineshop.jpg';
import mobilepayment from '../assets/onboarding-mobilepayment.png';
import img3 from '../assets/onboarding-img3.png';

const styles = StyleSheet.create({
  firstPage: {
    width: 300,
    height: 300,
    bottom: 20,
  },
  tinyLogo: {
    width: 300,
    height: 300,
  },
});

const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Skip</Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Next</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text style={{ fontSize: 16 }}>Done</Text>
  </TouchableOpacity>
);

function OnboardingScreen({ navigation }) {
  return (
    <Onboarding
      SkipButtonComponent={Skip}
      NextButtonComponent={Next}
      DoneButtonComponent={Done}
      onSkip={() => navigation.replace('Signin')}
      onDone={() => navigation.navigate('Signin')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image style={styles.firstPage} source={onlineshop} />,
          title: 'Apps online shop',
          subtitle: (
            <>
              <Text>Let's shop with us</Text>
              <Button
                title="Create Account"
                styleBtnContainer={{
                  elevation: 8,
                  backgroundColor: '#4F44FE',
                  borderRadius: 20,
                  paddingVertical: 13,
                  paddingHorizontal: 80,
                  marginTop: 70,
                  width: 300,
                }}
                styleBtnText={{
                  fontSize: 14,
                  color: '#fff',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  textTransform: 'uppercase',
                }}
                onPress={() => {
                  Alert.alert('done');
                }}
              />
              <Button
                title="Sign In"
                styleBtnContainer={{
                  elevation: 8,
                  backgroundColor: '#fff',
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: '#4F44FE',
                  paddingVertical: 13,
                  paddingHorizontal: 80,
                  marginTop: 10,
                  width: 300,
                }}
                styleBtnText={{
                  fontSize: 14,
                  color: '#4F44FE',
                  fontWeight: 'bold',
                  alignSelf: 'center',
                  textTransform: 'uppercase',
                }}
                onPress={() => navigation.navigate('Signin')}
              />
            </>
          ),
        },
        {
          backgroundColor: '#fdeb93',
          image: <Image style={styles.tinyLogo} source={mobilepayment} />,
          title: 'Easy and secure payment',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#e9bcbe',
          image: <Image style={styles.tinyLogo} source={img3} />,
          title: 'Free shipping',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
}

export default OnboardingScreen;
