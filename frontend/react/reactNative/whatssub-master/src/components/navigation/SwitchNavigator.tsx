import React, { useContext } from 'react';
import {
  createSwitchNavigator,
  createAppContainer,
  NavigationContainer,
} from 'react-navigation';

import { AppContext } from '../../contexts';
import { ThemeProvider } from 'styled-components';
import { createTheme } from '../../theme';
import AuthStackNavigator from './AuthStackNavigator';
import MainStackNavigator from './MainStackNavigator';
import TempScreen from '../screen/Temp';
import AuthLoadingScreen from '../screen/AuthLoading';

const SwitchNavigator: NavigationContainer = createSwitchNavigator(
  {
    AuthLoadingScreen,
    AuthStackNavigator,
    MainStackNavigator,
    TempScreen,
  },
  {
    initialRouteName: 'AuthLoadingScreen',
  },
);

const AppContainer = createAppContainer(SwitchNavigator);

export default () => {
  const { state } = useContext(AppContext);
  const { theme } = state;

  return (
    <ThemeProvider theme={createTheme(theme)}>
      <AppContainer
        screenProps={{ theme: createTheme(theme) }}
      />
    </ThemeProvider>
  );
};
