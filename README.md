# react-native-default-icon

![react-native-default-icon](example/assets/defaul-icon.png)

Convenient default icon placeholder component. Automatically generated background color and properly contrasted font. Compatible with react-native and expo.

![CI](https://github.com/charlynedsson/react-native-default-icon/actions/workflows/ci.yml/badge.svg) [![npm version](https://badge.fury.io/js/react-native-default-icon.svg)](https://badge.fury.io/js/react-native-default-icon) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![React-Native](https://img.shields.io/badge/-React%20Native-grey?style=flat&logo=react)](https://reactnative.dev/) [![Expo](https://img.shields.io/badge/-Expo-informational?style=flat&logo=expo)](https://docs.expo.dev/)


## Installation

```sh
npm install react-native-default-icon
```

![example app](example/assets/example-app.png)

## Usage

```js
import DefaultIcon from 'react-native-default-icon';

// ...

<DefaultIcon value={'Hello World'} />

<DefaultIcon
    value={'hello world'}
    contentContainerStyle={{
        width: 100,
        height: 100,
        borderRadius: 0,
    }}
    textStyle={fontSize: 50}
/>
```

### Props
| Prop | Type | Required | Description |
|------|------|----------|-------------|
|value | `string` | true | Will generate same background color for same inputed value |
|contentContainerStyle? | `ViewStyle` | false | From React-Native |
|textStyle? | `TextStyle` | false | From React-Native |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
