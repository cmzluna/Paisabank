import {TouchableOpacity} from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import BaseButton from './index';

describe('BaseButton component', () => {
  describe('returns error', () => {
    it('returns null when title is not passed', () => {
      const BaseButtonComponent = renderer
        .create(<BaseButton onPress={() => {}} />)
        .toJSON();
      expect(BaseButtonComponent).toBeNull();
    });
  });

  describe('renders correctly', () => {
    it('match snapshot', () => {
      const BaseButtonComponent = renderer
        .create(<BaseButton title="Ok" onPress={() => {}} />)
        .toJSON();
      expect(BaseButtonComponent).toMatchSnapshot();
    });

    it('renders children type text', () => {
      const BaseButtonComponent = renderer
        .create(<BaseButton title="Text Button" onPress={() => {}} />)
        .toJSON();
      expect(BaseButtonComponent.children[0].type).toBe('Text');
    });

    it('renders children text with value passed as title prop', () => {
      const BaseButtonComponent = renderer
        .create(<BaseButton title="Confirm" onPress={() => {}} />)
        .toJSON();
      expect(BaseButtonComponent.children[0].children[0]).toBe('Confirm');
    });

    it('function passed as prop is called when button is pressed', async () => {
      const mockedFn = jest.fn();
      const BaseButtonComponent = renderer.create(
        <BaseButton title="Ok" onPress={mockedFn} />,
      ).root;

      const TouchableOpacityRendered =
        BaseButtonComponent.findByType(TouchableOpacity);
      TouchableOpacityRendered.props.onPress();
      expect(mockedFn).toHaveBeenCalledTimes(1);
    });
  });
});
