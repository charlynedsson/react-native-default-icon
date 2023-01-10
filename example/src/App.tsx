import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import DefaultIcon from 'react-native-default-icon';

export default function App() {

  return (
    <View style={styles.container}>
      <DefaultIcon value={'Hello World'} />
      <DefaultIcon
        value={'hello world'}
        contentContainerStyle={{ width: 80, height: 80, borderRadius: 40 }}
        textStyle={{ fontSize: 40 }} />
      <DefaultIcon
        value={'Hello world'}
        contentContainerStyle={styles.contentContainerStyle}
        textStyle={styles.textStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
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
