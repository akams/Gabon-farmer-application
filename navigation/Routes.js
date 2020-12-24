/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { AuthContext } from './AuthProvider';

import RootStackScreen from './RootStackScreen';
import DrawNavigateScreen from './DrawNavigateScreen';

import { preloadImages } from '../constants/images';

import meatImg from '../assets/home/meats.jpg';
import fruitsImg from '../assets/home/fruits.jpg';
import vegetablesImg from '../assets/home/vegetables.jpg';
import rizImg from '../assets/home/riz.jpg';
import seafoodsImg from '../assets/home/seafoods.jpg';
import appleFruit from '../assets/fruits/apple.jpg';
import bananeFruit from '../assets/fruits/banane.jpg';

const Routes = () => {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  const onAuthStateChanged = (userVal) => {
    setUser(userVal);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    const urlOfImages = [];
    urlOfImages.push(meatImg); // Replace it with your actual URL
    urlOfImages.push(fruitsImg);
    urlOfImages.push(vegetablesImg);
    urlOfImages.push(rizImg);
    urlOfImages.push(seafoodsImg);
    urlOfImages.push(appleFruit);
    urlOfImages.push(bananeFruit);
    return () => {
      subscriber();
      preloadImages(urlOfImages);
    };
  }, []);

  console.log('initializing', initializing);

  if (initializing) return null;

  console.log('user', user);

  return <NavigationContainer>{user ? <DrawNavigateScreen /> : <RootStackScreen />}</NavigationContainer>;
};

export default Routes;
