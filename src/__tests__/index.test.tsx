import React from 'react';
import renderer from 'react-test-renderer';
import DefaultIcon from "react-native-default-icon";

describe("DefaultIcon test", () => {
    test("it should render a DefaultIcon", () => {
        const tree = renderer.create(<DefaultIcon value='Hello World' />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});