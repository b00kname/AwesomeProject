import {createStackNavigator} from 'react-navigation';
import homeScreen from './MPapps/homeScreen';
import Ui from './MPapps/Ui';
import registrationScreen from './MPapps/registrationScreen';
import contactScreen from './MPapps/contactScreen';

export default createStackNavigator (
    {
        home: homeScreen,
        registration: registrationScreen,
        contact: contactScreen
    },
    {
        initialRouteName: 'home',

        navigationOptions: 
        {
            headerStyle: 
            {
                backgroundColor: '#800080'
            },

            headerTintColor: '#ffffff',

            headerTintStyle: 'bold'

        }
    }
)