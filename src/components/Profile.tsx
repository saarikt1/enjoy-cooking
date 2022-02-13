import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import textStyles from '../styles/TextStyles';

import InputField from './InputField';

import { RootStackParamList } from '../../App';

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

const RecipeDetails: React.FC<ProfileScreenProps> = ({ navigation }) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={textStyles.headingLarge}>Profile</Text>
        <Pressable onPress={() => navigation.navigate('RecipeList')}>
          {/* <Pressable onPress={() => navigation.goBack}> */}
          <AntDesign name="closecircleo" size={32} color="black" />
        </Pressable>
      </View>
      <View style={styles.inputFieldList}>
        <InputField title="Name" fieldInput="Name Lastname" />
        <InputField title="Email" fieldInput="name@email.com" />
        <InputField title="Password" fieldInput="Password" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    margin: 24,
    marginTop: 72,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputFieldList: {
    margin: 24,
  },
});

export default RecipeDetails;
