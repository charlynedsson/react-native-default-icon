import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { TextStyle, ViewStyle } from "react-native";

type ColorHex = `#${string}`;

type ColorRGB = {
    R: number;
    G: number;
    B: number;
};

type DefaultIconProps = {
    contentContainerStyle?: ViewStyle;
    textStyle?: TextStyle;
    value: string;
};

export default function DefaultIcon(props: DefaultIconProps): JSX.Element {
  const style = React.useMemo(() => {
    const backgroundColor = props.contentContainerStyle?.backgroundColor as ColorHex ?? getBackgroundColor(props.value);
    const fontColor = props.textStyle?.color ?? getFontColor(backgroundColor);
    return {
      contentContainerStyle: StyleSheet.compose({ ...defaultStyle.contentContainerStyle, backgroundColor: backgroundColor }, props.contentContainerStyle),
      textStyle: StyleSheet.compose({ ...defaultStyle.textStyle, color: fontColor }, props.textStyle)
    }
  }, [props.value]);

  return (
    <View style={style.contentContainerStyle}>
      <Text style={style.textStyle}>{props.value[0]}</Text>
    </View>
  );
};

const defaultStyle: Partial<Omit<DefaultIconProps, 'value'>> = {
  contentContainerStyle: {
    borderRadius: 20,
    height: 40,
    justifyContent: 'center',
    width: 40,
  },
  textStyle: {
    fontSize: 20,
    textAlign: 'center',
  },
};

function getBackgroundColor(str: string): ColorHex {

  var hash = 0;
  var colour: ColorHex = "#";

  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  };

  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 0xFF;
    colour = `#${('00' + value.toString(16)).substring(-2)}`;
  };

  return colour;
};

function getFontColor(bgColor: ColorHex): ColorHex {

  var nThreshold = 105;
  var components = getRGBComponents(bgColor);
  var bgDelta = (components.R * 0.299) + (components.G * 0.587) + (components.B * 0.114);

  return ((255 - bgDelta) < nThreshold) ? "#000000" : "#ffffff";
}

function getRGBComponents(color: ColorHex): ColorRGB {

  var r = color.substring(1, 3);
  var g = color.substring(3, 5);
  var b = color.substring(5, 7);

  return {
    R: parseInt(r, 16),
    G: parseInt(g, 16),
    B: parseInt(b, 16)
  };
}