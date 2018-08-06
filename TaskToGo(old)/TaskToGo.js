import {StackNavigator} from 'react-navigation';
import loginScreen from './loginScreen';
import registrationScreen from './registrationScreen';

export default StackNavigator ({
    login: {screen: loginScreen},
    registration: {screen: registrationScreen}
})