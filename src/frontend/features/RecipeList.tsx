import React from "react";
import {
  FlatList,
  ListRenderItem,
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import textStyles from "../styles/TextStyles";
import colorStyles from "../styles/ColorStyles";

import placeholderImg from "../assets/images/placeholderImg.webp";
import { RootStackParamList } from "../App";
import recipeData from "../recipeData.json";

type RecipeListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "RecipeList"
>;

export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  instructions: string[];
  rating: number;
}

const recipes: Recipe[] = recipeData;

const RecipeList: React.FC<RecipeListScreenProps> = ({ navigation }) => {
  const renderRecipeListItem: ListRenderItem<Recipe> = ({ item }) => (
    <Pressable onPress={() => navigation.navigate("RecipeDetails", item)}>
      <View style={styles.listItem}>
        <Image style={styles.image} source={placeholderImg} />
        <View style={styles.listItemContentArea}>
          <Text style={[textStyles.headingSmall, { marginBottom: 4 }]}>
            {item.name}
          </Text>
          <Text style={[textStyles.bodyMedium, colorStyles.grey60]}>
            Rating: {item.rating}
          </Text>
        </View>
      </View>
    </Pressable>
  );

  // eslint-disable-next-line consistent-return
  const getRecipesFromApi = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/recipes");
      const json = await response.json();
      console.log(`response: ${json.data}`);
      return json.data;
    } catch (error) {
      console.error(error);
    }
  };

  getRecipesFromApi();

  return (
    <View>
      <View style={styles.header}>
        <Text style={textStyles.headingLarge}>My recipes</Text>
        <Pressable>
          <AntDesign name="user" size={32} color="black" />
        </Pressable>
      </View>

      <View style={styles.recipeList}>
        <FlatList
          data={recipes}
          renderItem={renderRecipeListItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  recipeList: {
    marginTop: 8,
    marginLeft: 24,
    marginRight: 24,
  },
  header: {
    margin: 24,
    marginTop: 72,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItem: {
    borderColor: "#666666",
    borderWidth: 1,
    flexDirection: "row",
    marginBottom: 16,
  },
  listItemContentArea: {
    width: "60%",
    margin: 16,
  },
  listItemHeader: {
    fontSize: 14,
  },
  image: {
    width: 96,
    height: "100%",
  },
});

export default RecipeList;
