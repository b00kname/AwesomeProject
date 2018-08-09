import {
  createStackNavigator,
} from 'react-navigation';
import IndexScreen from './IndexScreen';
import ShowScreen from './ShowScreen';
import StoreScreen from './StoreScreen';
import UpdateScreen from './UpdateScreen';

export default createStackNavigator({
  Index: {
    screen: IndexScreen,
  },
  Show: {
    screen: ShowScreen
  },
  Store: {
    screen: StoreScreen
  },
  Update: {
    screen: UpdateScreen
  },
}, {
  initialRouteName: 'Index',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#a80000',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  },
});