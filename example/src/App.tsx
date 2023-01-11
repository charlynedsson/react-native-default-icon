import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import DefaultIcon from 'react-native-default-icon';

export default function App() {
  return (
    <View style={styles.container}>
      <DefaultIcon value={'Icon'} />
      <DefaultIcon
        value={'expo'}
        contentContainerStyle={styles.contentContainerStyle}
        textStyle={styles.textStyle}
      />
      <DefaultIcon
        value={'React-Native'}
        borderRadius={50}
        width={50}
        height={100}
        fontSize={25}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  contentContainerStyle: {
    width: 100,
    height: 100,
    borderRadius: 0,
  },
  textStyle: {
    fontSize: 50,
  },
});
