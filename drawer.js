import React from 'react';
import {DrawerNavigator} from 'react-navigation';

import homeScreen from './MPapps/homeScreen';
import registrationScreen from './MPapps/registrationScreen';

export default DrawerNavigator (
    {
        home: homeScreen,
        registration: registrationScreen,
    },
    {
        initialRouteName: 'home',
        drawerPosition: 'left',
        contentOptions: {
            activeTintColor: 'red'
        }
    }
)