import 'react-native';
import * as React from 'react';
import AuthLoading from '../AuthLoading';

import renderer from 'react-test-renderer';

const createTestProps = (props: Object) => ({
  navigation: {
    navigate: jest.fn(),
  },
  ...props,
});

let props: any;

describe('[AuthLoading] render', () => {
  beforeAll(() => {
    props = createTestProps({});
  });

  it('component and snapshot matches', () => {
    const rendered: renderer.ReactTestRendererJSON = renderer.create(<AuthLoading {...props} />).toJSON();
    expect(rendered).toMatchSnapshot();
  });
});
