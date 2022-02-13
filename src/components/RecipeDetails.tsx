import React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  ListRenderItem,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import textStyles from '../styles/TextStyles';
import Divider from './Divider';

import { RootStackParamList } from '../../App';

import placeholderImg from '../../assets/images/placeholderImg.webp';

type RecipeDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'RecipeDetails'
>;

type ListType = 'ingredients' | 'instructions';

const RecipeDetails: React.FC<RecipeDetailsScreenProps> = ({
  route,
  navigation,
}) => {
  const recipe = route.params;

  const renderList = (listType: ListType, list: string[]) => {
    return list.map((element, index) => (
      <Text style={[textStyles.bodyMedium, { marginBottom: 16 }]}>
        {listType === 'instructions' && `${index + 1}. `}
        {element}
      </Text>
    ));
  };

  return (
    <View>
      <View style={styles.header}>
        <Text style={textStyles.headingLarge}>{recipe.name}</Text>
        <Pressable onPress={() => navigation.navigate('RecipeList')}>
          <AntDesign name="closecircleo" size={32} color="black" />
        </Pressable>
      </View>

      <ScrollView>
        <Image style={styles.heroImage} source={placeholderImg} />

        <View style={styles.mainInfoWrapper}>
          <Text style={[textStyles.headingSmall, { marginBottom: 16 }]}>
            Ingredients
          </Text>
          {renderList('ingredients', recipe.ingredients)}

          <Divider />

          <Text style={[textStyles.headingSmall, { marginBottom: 16 }]}>
            Instructions
          </Text>

          {renderList('instructions', recipe.instructions)}

          <Divider />

          <View style={{ height: 200 }} />
        </View>
      </ScrollView>
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
  mainInfoWrapper: {
    margin: 24,
    marginTop: 0,
  },
  heroImage: {
    width: '100%',
    height: 208,
    marginBottom: 24,
  },
});

export default RecipeDetails;
