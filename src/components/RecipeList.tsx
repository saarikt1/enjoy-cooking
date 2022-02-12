import React from 'react';
import {
  FlatList,
  ListRenderItem,
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import kalaseljankaImg from '../../assets/images/kalaseljanka.webp';
import { RootStackParamList } from '../../App';
import recipeData from '../recipeData.json';

type RecipeListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'RecipeList'
>;

interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  directions: string[];
  rating: number;
}

const recipes: Recipe[] = recipeData;

const RecipeList: React.FC<RecipeListScreenProps> = ({ navigation }) => {
  const renderRecipeListItem: ListRenderItem<Recipe> = ({ item }) => (
    <Pressable onPress={() => navigation.navigate('RecipeDetails')}>
      <View style={styles.listItem}>
        <Image style={styles.image} source={kalaseljankaImg} />
        <View style={styles.listItemContentArea}>
          <Text style={styles.listItemHeader}>{item.name}</Text>
          <Text>Rating: {item.rating}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.recipeList}>
      <Text style={styles.heading}>My recipes</Text>
      <FlatList data={recipes} renderItem={renderRecipeListItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  recipeList: {
    margin: 24,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  listItem: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  listItemContentArea: {
    marginLeft: 16,
  },
  listItemHeader: {
    fontSize: 14,
  },
  image: {
    width: 64,
    height: 64,
  },
});

export default RecipeList;
