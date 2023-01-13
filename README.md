# react-native-default-icon

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

<DefaultIcon value={'Icon'} />      

<DefaultIcon
    value={'expo'}
    contentContainerStyle={styles.contentContainerStyle}
    textStyle={styles.textStyle}
/>

<DefaultIcon
    value={'React-Native'}
    borderRadius={50}
    fontSize={25}    
    height={100}
    width={50}
/>
```

### Props
| Prop | Type | Required | Description |
|------|------|----------|-------------|
|value | `string` | true | Will generate same background color for same inputted value |
|fontSize | `number` | false | Convenience prop to modify text's fontSize |
|width | `number` | false | Convenience prop to modify contentContainer's width |
|height | `number` | false | Convenience prop to modify contentContainer's height |
|borderRadius | `number` | false | Convenience prop to modify contentContainer's borderRadius |
|contentContainerStyle | `ViewStyle` | false | React-Native View StyleProp |
|textStyle | `TextStyle` | false | React-Native Text StyleProp |

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
