import {StackNavigator} from 'react-navigation';
import homeScreen from './VisitedPlaces/homeScreen';
import listScreen from './VisitedPlaces/listScreen';
import viewScreen from './VisitedPlaces/viewScreen';
import createScreen from './VisitedPlaces/createScreen';
import editScreen from './VisitedPlaces/editScreen';

export default StackNavigator ({
    home: {screen: homeScreen},
    list: {screen: listScreen},
    view: {screen: viewScreen},
    create: {screen: createScreen},
    edit: {screen: editScreen}
})