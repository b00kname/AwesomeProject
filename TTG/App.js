import { createStackNavigator } from 'react-navigation';
import LoginScreen from './LoginScreen';
import TaskForm from './TaskForm';

export default createStackNavigator({
    'LoginScreen': { screen: LoginScreen },
    'TaskForm': { screen: TaskForm }
},
    {
        initialRouteName: 'LoginScreen',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false
        }
    }
)