import React, { useReducer } from 'react';
import { AppContext } from '../contexts';
import { IUser } from '../types';
import { ThemeType } from '../theme';

const AppConsumer = AppContext.Consumer;

interface IAction {
  type: 'change-theme-mode';
  payload: any;
}

interface IProps {
  children?: any;
}

interface IState {
  theme: ThemeType;
}

const initialState: IState = {
  theme: ThemeType.LIGHT,
};

const reducer = (state: IState, action: IAction) => {
  switch (action.type) {
    case 'change-theme-mode':
      return {
        ...state,
        theme: action.payload.theme,
      };
    default:
      return state;
  }
};

function AppProvider(props: IProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppConsumer, AppProvider, AppContext };
