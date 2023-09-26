import { TouchableOpacity, Text } from "react-native";
import React from "react";
import renderer from "react-test-renderer";
import BaseButton from "./index";

describe("BaseButton component", () => {
  describe("returns error", () => {
    it("returns null when children is not passed", () => {
      const BaseButtonComponent = renderer
        .create(<BaseButton onPress={() => {}}></BaseButton>)
        .toJSON();
      expect(BaseButtonComponent).toBeNull();
    });
  });

  describe("renders correctly", () => {
    it("match snapshot", () => {
      const BaseButtonComponent = renderer
        .create(
          <BaseButton onPress={() => {}}>
            <Text>Button Text</Text>
          </BaseButton>,
        )
        .toJSON();
      expect(BaseButtonComponent).toMatchSnapshot();
    });

    it("renders children type text", () => {
      const BaseButtonComponent = renderer
        .create(
          <BaseButton title="Text Button" onPress={() => {}}>
            <Text>Button Text</Text>
          </BaseButton>,
        )
        .toJSON();
      expect(BaseButtonComponent.children[0].type).toBe("Text");
    });

    it("function passed as prop is called when button is pressed", async () => {
      const mockedFn = jest.fn();
      const BaseButtonComponent = renderer.create(
        <BaseButton onPress={mockedFn}>
          <Text>Button Text</Text>
        </BaseButton>,
      ).root;

      const TouchableOpacityRendered = BaseButtonComponent.findByType(TouchableOpacity);
      TouchableOpacityRendered.props.onPress();
      expect(mockedFn).toHaveBeenCalledTimes(1);
    });
  });
});
