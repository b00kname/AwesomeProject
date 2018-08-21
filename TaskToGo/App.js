import { createStackNavigator } from 'react-navigation';
import LoginHost from './LoginHost';
import SignupHost from './SignupHost';
import TaskForm from './TaskForm';

export default createStackNavigator({
    'LoginHost': { screen: LoginHost },
    'SignupHost': { screen: SignupHost },
    'TaskForm': { screen: TaskForm }
},
    {
        initialRouteName: 'LoginHost',
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false
        }
    }
)