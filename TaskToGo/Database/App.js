import { createStackNavigator } from 'react-navigation';
import DisplayScreen from './DisplayScreen';
import DetailsScreen from './DetailsScreen';
import AddScreen from './AddScreen';
import UpdateScreen from './UpdateScreen';

export default createStackNavigator({
    'Display': { screen: DisplayScreen },
    'Details': { screen: DetailsScreen },
    'Add': { screen: AddScreen },
    'Update': { screen: UpdateScreen }
}, {
        initialRouteName: 'Display',
    })