import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator, NavigationRouteConfigMap, StackNavigatorConfig, NavigationContainer } from 'react-navigation';

import IntroScreen from '../screen/Intro';

const routeConfig: NavigationRouteConfigMap = {
  Intro: {
    screen: IntroScreen,
    navigationOptions: {
      header: null,
      headerMode: 'none',
      title: 'Intro',
      // headerStyle: {
      //   borderBottomWidth: 0,
      //   backgroundColor: '#023059',
      // },
    },
    path: 'intro',
  },
};

const navigatorConfig: StackNavigatorConfig = {
  initialRouteName: 'Intro',
  // header: null,
  // headerMode: 'none',
  navigationOptions: ({ navigation, screenProps } : { navigation: any, screenProps: any }) => {
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

const AuthStackNavigator: NavigationContainer = createStackNavigator(routeConfig, navigatorConfig);

interface IProps {
  navigation?: any;
  theme?: object;
  screenProps?: any;
}

class RootNavigator extends React.Component<IProps> {
  private static router = AuthStackNavigator.router;

  public render() {
    return (
      <AuthStackNavigator
        navigation={this.props.navigation}
        screenProps={{ theme: this.props.screenProps.theme }}
      />
    );
  }
}

export default RootNavigator;
