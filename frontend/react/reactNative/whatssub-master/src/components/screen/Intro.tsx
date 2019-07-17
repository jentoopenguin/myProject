import React, { useState, useCallback, useEffect } from 'react';
import Constants from 'expo-constants';
import * as Facebook from 'expo-facebook';
import {
  View, Alert,
} from 'react-native';
import { Text } from 'react-native-animatable';
import { NavigationScreenProp, NavigationStateRoute } from 'react-navigation';
import * as GoogleSignIn from 'expo-google-sign-in';
import styled from 'styled-components/native';

import _range from 'lodash/range';
import { AppProvider as Provider, AppConsumer, AppContext } from '../../providers';
import { ThemeType } from '../../theme';
import { IC_LOGO, IC_GOOGLE, IC_FACEBOOK, IC_SLASH } from '../../utils/Icons';
import { getString } from '../../../STRINGS';
import Button from '../shared/Button';
import useInterval from '../../hooks/useInterval';
import { iOSClientId } from '../../../config';

const Container = styled.View`
  flex: 1;
  align-self: stretch;
  overflow: scroll;
  background-color: ${({ theme }) => theme.backgroundDark};

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
`;

const TitleWrapper = styled.View`
  margin-top: 120;
  align-self: center;

  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const LogoImage = styled.Image`
  width: 135;
  height: 30;
`;

const SlashImage = styled.Image`
  width: 14;
  height: 14;
`;

const ContentWrapper = styled.View`
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: flex-start;
`;

const ContentScroll = styled.ScrollView`
  height: 100%;
  width: 100%;
`;

const StyledAnimatableText = styled(Text)`
  font-size: 36;
  font-weight: 600;
  min-height: 44;
  line-height: 48;
  color: white;
  text-align: center;
`;

const StyledText = styled.Text`
  font-size: 36;
  font-weight: 600;
  line-height: 48;
  text-align: center;
  color: ${({ theme }) => theme.fontLight};
`;

const ButtonWrapper = styled.View`
  bottom: 40;
  width: 100%;
  height: 200;
  background-color: white;
  margin-top: 28;
  padding-top: 28;

  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

interface IProps {
  store?: any;
  screenProps?: any;
  navigation?: NavigationScreenProp<NavigationStateRoute<any>>;
}

export const titleArray = _range(5).map((index: number) => getString(`INTRO_TITLE_${index + 1}`));

function Intro(props: IProps) {
  const [titleIndex, setTitleIndex] = React.useState(0);
  const [googleUser, setGoogleUser] = useState(null);

  // const changeTheme = () => {
  //   let payload: object;
  //   if (state.theme === ThemeType.LIGHT) {
  //     payload = {
  //       theme: ThemeType.DARK,
  //     };
  //   } else {
  //     payload = {
  //       theme: ThemeType.LIGHT,
  //     };
  //   }
  //   dispatch({
  //     type: 'change-theme-mode',
  //     payload,
  //   });
  // };

  useEffect(() => {
    initAsync();
  }, []);

  const initAsync = async () => {
    await GoogleSignIn.initAsync({
      clientId: iOSClientId,
    });
  };

  const googleSignOutAsync = async () => {
    await GoogleSignIn.signOutAsync();
    setGoogleUser(null);
  };

  const googleSignInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        setGoogleUser(user);
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  };

  const googleSignIn = () => {
    googleSignInAsync();
  };

  // if (user) {
  //   props.navigation.navigate('MainStackNavigator');
  // }

  const facebookLogin = async () => {
    try {
      const {
        type,
        token,
      } = await Facebook.logInWithReadPermissionsAsync(Constants.manifest.facebookAppId, {
        permissions: ['public_profile'],
      });
      if (type === 'success') {
        // Build Firebase credential with the Facebook access token.
        // const credential = firebase.auth.FacebookAuthProvider.credential(token);

        // Sign in with credential from the Facebook user.
        // await firebase.auth().signInWithCredential(credential);
      } else {
        // type === 'cancel'
      }
    } catch ({ message }) {
      /* istanbul ignore next */
      alert(`Facebook Login Error: ${message}`);
    }
  };

  const btnStyle = {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 0,
    borderColor: props.screenProps.theme.btnWhiteBorder,
  };

  useInterval(() => {
    if (titleIndex === 4) {
      setTitleIndex(0);
    } else {
      setTitleIndex(titleIndex + 1);
    }
  }, 2000);

  return (
    <Container>
      <ContentWrapper>
        <ContentScroll
          contentContainerStyle={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TitleWrapper>
            <LogoImage source={IC_LOGO}/>
          </TitleWrapper>
          <SlashImage
            style={{
              marginTop: 68,
              marginBottom: 34,
            }}
            source={IC_SLASH}
          />
          <StyledAnimatableText
            testID='animatableText'
            animation='fadeIn'
            iterationCount='infinite'
            direction='alternate'
            duration={1000}
          >
            { titleArray[titleIndex] }
          </StyledAnimatableText>
          <StyledText>{getString('INTRO_MESSAGE')}</StyledText>
          <StyledText style={{
            color: props.screenProps.theme.fontTint,
          }}>{getString('INTRO_WHATSSUB')}</StyledText>
          <SlashImage
            style={{
              marginTop: 38,
              marginBottom: 68,
            }}
            source={IC_SLASH}
          />
          <ButtonWrapper>
            <Button
              testID='btnGoogle'
              style={btnStyle}
              imgLeftSrc={IC_GOOGLE}
              onClick={ () => googleSignIn() }
              text={getString('SIGN_IN_WITH_GOOGLE')}
            />
            <View style={{ marginTop: 8 }}/>
            <Button
              testID='btnFacebook'
              style={btnStyle}
              imgLeftSrc={IC_FACEBOOK}
              imgLeftStyle={{
                height: 28,
                width: 16,
              }}
              onClick={ () => {
                facebookLogin();
              }}
              text={getString('SIGN_IN_WITH_FACEBOOK')}
            />

          </ButtonWrapper>
        </ContentScroll>
      </ContentWrapper>
    </Container>
  );
}

export default Intro;
