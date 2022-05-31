/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry, LogBox } from 'react-native';
import App from './src/App';
import { name as appName } from './app.json';

LogBox.ignoreLogs(['Require cycle:', 'new NativeEventEmitter()', "Can't perform"]);
AppRegistry.registerComponent(appName, () => App);
