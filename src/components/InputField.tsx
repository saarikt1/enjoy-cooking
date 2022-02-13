/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

import textStyles from '../styles/TextStyles';

interface TestInterface {
  title: string;
  fieldInput: string;
}

const InputField = (props: TestInterface) => {
  return (
    <View style={styles.inputField}>
      <Text style={textStyles.headingExtraSmall}>{props.title}</Text>
      <View style={styles.inputFieldBox}>
        <TextInput style={textStyles.bodyLarge}>{props.fieldInput}</TextInput>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputField: {},
  inputFieldBox: {
    marginTop: 8,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#CCCCCC',
    padding: 16,
  },
});

export default InputField;
