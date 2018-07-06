import {createStackNavigator} from 'react-navigation';
import HomeScreen from './novel_contents/HomeScreen';
import AuthorScreen from './novel_contents/AuthorScreen';
import ArticleScreen from './novel_contents/ArticleScreen';

export default createStackNavigator (
  {
    Home: HomeScreen,
    Author: AuthorScreen,
    Article: ArticleScreen
  },
  {
    initialRouteName: 'Home'
  }
)
