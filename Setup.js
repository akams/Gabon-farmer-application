/* eslint-disable eslint-comments/no-unlimited-disable */
import React from 'react';
import { ENVIRONMENT } from '@env';// eslint-disable-line

import Providers from './navigation';

console.log('ENVIRONMENT', ENVIRONMENT);

export default function Setup() {
  return <Providers />;
}
