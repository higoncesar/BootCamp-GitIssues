import { createAppContainer, createStackNavigator } from 'react-navigation';

import { colors, metrics } from '~/styles';

import Main from './pages/Main';
import Issues from './pages/Issues';

const Routes = createAppContainer(
  createStackNavigator(
    {
      HomeScreen: Main,
      IssuesScreen: Issues,
    },
    {
      initialRouteName: 'HomeScreen',
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: colors.white,
          width: metrics.width,
        },
        headerTintColor: colors.greyDarker,
        headerLayoutPreset: 'center',
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: 'bold',
        },
      },
    },
  ),
);

export default Routes;
