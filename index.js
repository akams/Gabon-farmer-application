import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import App from './App';
import Setup from './Setup';

AppRegistry.registerComponent(appName, () => Setup);
