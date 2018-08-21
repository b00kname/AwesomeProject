/∗∗ ∗ Name: Heng Shu Ming ∗ Reg. No. : 1500777 ∗/

import { createStackNavigator } from 'react-navigation';
import DisplayScreen from './DisplayScreen';
import AddScreen from './AddScreen';
import DetailsScreen from './DetailsScreen';

export default createStackNavigator({
    Display: { screen: DisplayScreen },
    Add: { screen: AddScreen },
    Datails: { screen: DetailsScreen }
}, {
        initialRouteName: 'Display',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#4527a0'
            },
            headerTintColor: '#ffffff',
            headerTitleStyle: {
                fontWeight: 'bold'
            }
        }
    })