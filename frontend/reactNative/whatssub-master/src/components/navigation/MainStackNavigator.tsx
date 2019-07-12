import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator, NavigationRouteConfigMap, StackNavigatorConfig, NavigationContainer } from 'react-navigation';

import Main from '../screen/Main';

const routeConfig: NavigationRouteConfigMap = {
  Intro: {
    screen: Main,
    navigationOptions: {
      title: 'Main',
    },
    path: 'intro',
  },
};

const navigatorConfig: StackNavigatorConfig = {
  initialRouteName: 'Intro',
  // header: null,
  // headerMode: 'none',
  navigationOptions: ({ navigation, screenProps } : { navigation: any, screenProps: any}) => {
    const { theme } = screenProps;
    return ({
      headerStyle: {
        backgroundColor: theme.backgroundDark,
        borderBottomColor: 'transparent',
        borderBottomWidth: 0,
        elevation: 0,
      },
      headerTitleStyle: { color: theme.fontColor },
      headerTintColor: theme.tintColor,
    });
  },
};

const RootStackNavigator: NavigationContainer = createStackNavigator(routeConfig, navigatorConfig);

interface IProps {
  navigation?: any;
  theme?: object;
}

class RootNavigator extends React.Component<IProps> {
  private static router = RootStackNavigator.router;

  public render() {
    return (
      <RootStackNavigator
        navigation={this.props.navigation}
        screenProps={{ theme: this.props.theme }}
      />
    );
  }
}

export default RootNavigator;
