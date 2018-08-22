import { createStackNavigator } from 'react-navigation';
import Login from './Login';
import TaskForm from './TaskForm';

export default createStackNavigator({
    'Login': { screen: Login },
    'TaskForm': { screen: TaskForm }
},
    {
        initialRouteName: 'Login',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false
        }
    }
)