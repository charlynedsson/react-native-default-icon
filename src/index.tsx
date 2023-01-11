import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

type ColorRGB = `rgb(${number},${number},${number})`;

type DefaultIconProps = {
  borderRadius?: number;
  contentContainerStyle?: StyleProp<ViewStyle>;
  fontSize?: number;
  height?: number;
  textStyle?: StyleProp<TextStyle>;
  value: string;
  width?: number;
};

export default function DefaultIcon(props: DefaultIconProps): JSX.Element {
  const {
    backgroundStyle,
    textStyle,
  }: {
    backgroundStyle: ViewStyle;
    textStyle: TextStyle;
  } = React.useMemo(() => {
    const colors = getColors(props.value);
    return {
      backgroundStyle: StyleSheet.flatten([
        {
          backgroundColor: colors.background,
          borderRadius: props.borderRadius ?? 20,
          height: props.height ?? 40,
          justifyContent: 'center',
          width: props.width ?? 40,
        },
        props.contentContainerStyle,
      ]),
      textStyle: StyleSheet.flatten([
        {
          color: colors.font,
          fontSize: props.fontSize ?? 20,
          textAlign: 'center',
        },
        props.textStyle,
      ]),
    };
  }, [props]);

  return (
    <View style={backgroundStyle}>
      <Text style={textStyle}>{props.value[0]}</Text>
    </View>
  );
}

function getColors(str: string): { background: ColorRGB; font: ColorRGB } {
  var hash = 0;
  if (str.length === 0)
    return {
      background: `rgb(${0},${0},${0})`,
      font: `rgb(${255},${255},${255})`,
    };
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash); // eslint-disable-line no-bitwise
    hash = hash & hash; // eslint-disable-line no-bitwise
  }
  var rgb: [number, number, number] = [0, 0, 0];
  for (var i = 0; i < 3; i++) {
    var value = (hash >> (i * 8)) & 255; // eslint-disable-line no-bitwise
    rgb[i] = value;
  }

  var bgDelta = rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114;

  var ftColor: ColorRGB =
    255 - bgDelta < 105 ? `rgb(${0},${0},${0})` : `rgb(${255},${255},${255})`;

  return { background: `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`, font: ftColor };
}
