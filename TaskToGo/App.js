import { createStackNavigator } from 'react-navigation';
import LoginHost from './LoginHost';
import TaskForm from './TaskForm';

export default createStackNavigator({
    'LoginHost': { screen: LoginHost },
    'TaskForm': { screen: TaskForm }
},
    {
        initialRouteName: 'TaskForm',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false
        }
    }
)