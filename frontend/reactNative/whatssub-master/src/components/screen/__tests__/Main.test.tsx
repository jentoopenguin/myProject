import 'react-native';
import * as React from 'react';
import Main from '../Main';

import renderer from 'react-test-renderer';
import { render, fireEvent, act, RenderResult } from '@testing-library/react-native';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
    goBack: jest.fn(),
  },
  ...props,
});

let props: any;
let component: React.ReactElement;
let testing: RenderResult;

describe('[Main]', () => {
  beforeAll(() => {
    props = createTestProps({});
  });

  it('renders without crashing', () => {
    const rendered: renderer.ReactTestRendererJSON = renderer.create(<Main />).toJSON();
    expect(rendered).toMatchSnapshot();
    expect(rendered).toBeTruthy();
  });
});

describe('[Main] Interaction', () => {
  beforeEach(() => {
    props = createTestProps({});
    component = <Main {...props} />;
    testing = render(component);
  });

  it('should render [Text] with value "myText"', () => {
    const textInstance = testing.getByTestId('myText');
    expect(textInstance.props.children).toEqual('dooboolab');
  });
});
