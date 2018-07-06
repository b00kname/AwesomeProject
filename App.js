import {createStackNavigator} from 'react-navigation';
import AnimalScreen from './components/AnimalScreen';
import HomeScreen from './components/HomeScreen';

export default createStackNavigator (
  {
    Home: HomeScreen,
    Animal: AnimalScreen
  },
  {
    initialRouteName: 'Home'
  }
);
