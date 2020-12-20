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
      onSkip={() => navigation.replace('SplashScreen')}
      onDone={() => navigation.navigate('SplashScreen')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: <Image style={styles.firstPage} source={onlineshop} />,
          title: 'Apps online shop',
          subtitle: 'Done with React Native Onboarding Swiper',
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
