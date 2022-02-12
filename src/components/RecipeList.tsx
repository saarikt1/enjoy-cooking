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
import { AntDesign } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import textStyles from '../styles/TextStyles';
import colorStyles from '../styles/ColorStyles';

import kalaseljankaImg from '../../assets/images/kalaseljanka.webp';
import { RootStackParamList } from '../../App';

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

const recipes: Recipe[] = [
  {
    id: 1,
    name: 'Kookoscurry with a long name',
    ingredients: [
      '1 dl vihreitä linssejä',
      '1 sipuli',
      '2 valkosipulinkynttä',
      'tuoretta chiliä maun mukaan',
      '2 tl kookosöljyä',
      '0,5 tl garam masalaa',
      '2 tl currytahnaa',
      '3 kaffirlimen lehteä',
      '2 dl tomaattimurskaa',
      '1 tlk kikherneitä',
      '2 dl kookosmaitoa',
      '0,5 limen mehu',
      'tummaa riisiä',
    ],
    directions: [
      'Huuhtele linssit ja keitä ne lähes pehmeiksi suolalla maustetussa vedessä n. 20 minuuttia',
      'Pilko sillä välin sipuli, valkosipulinkynnet ja tuore chili.',
      'Kuumenna koookosöljy kattilassa ja lisää garam masala ja currytahna. Lisää sipulit ja chilit ja kuullota muutama minuutti.',
      'Lisää kattilaan tomaattimurska ja kaffirlimen lehdet. Lisää sekaan lähes pehmeät linssit sekä huuhdellut kikherneet.',
      'Keittele, kunnes linssit ovat kokonaan pehmeitä. Lisää kattilaan kookosmaitoa ja limen mehu. Kuumenna.',
    ],
    rating: 4,
  },
  {
    id: 2,
    name: 'Kalaseljanka',
    ingredients: [
      '2 sipulia',
      '3 porkkanaa',
      '1 rkl voita',
      '1 rkl vehnäjauhoja',
      '7 dl vettä',
      '1 tlk viipaloituja herkkusieniä',
      '1 laakerinlehti',
      '1 tl suolaa',
      'mustapippuria',
      '1–2 valkosipulinkynttä',
      '1 pkt alaskanseitiä',
      '3 rkl tomaattisosetta',
      '2 rkl sitruunamehua',
      '1 maustekurkku',
      'tilliä',
      '1 prk smetanaa',
    ],
    directions: [
      'Viipaloi sipulit ja suikaloi porkkanat sekä selleri.',
      'Sulata voi ison kattilan pohjalla. Kuullota kasvikset voissa ja ripottele pinnalle vehnäjauhot. Sekoita ja kaada päälle vesi.',
      'Kaada joukkoon herkkusienet liemineen. Lisää mausteeksi laakerinlehti, suolaa, mustapippuria ja puristetut valkosipulinkynnet. Anna kiehua miedolla lämmöllä noin 10 minuuttia.',
      'Viipaloi kohmeinen seiti ja lisää keittoon. Anna kiehua edelleen 10 minuuttia. Sekoita varovaisesti joukkoon tomaattipyree, sitruunanmehu ja suikaloitu maustekurkku. Ripottele pinnalle kaprikset ja tilliä. Tarjoa seljankan kanssa smetanaa ja tuoretta leipää.',
    ],
    rating: 5,
  },
];

const RecipeList: React.FC<RecipeListScreenProps> = ({ navigation }) => {
  const renderRecipeListItem: ListRenderItem<Recipe> = ({ item }) => (
    <Pressable onPress={() => navigation.navigate('RecipeDetails')}>
      <View style={styles.listItem}>
        <Image style={styles.image} source={kalaseljankaImg} />
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
  return (
    <View>
      <View style={styles.header}>
        <Text style={textStyles.headingLarge}>My recipes</Text>
        <Pressable>
          <AntDesign name="user" size={32} color="black" />
        </Pressable>
      </View>

      <View style={styles.recipeList}>
        <FlatList data={recipes} renderItem={renderRecipeListItem} />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItem: {
    borderColor: '#666666',
    borderWidth: 1,
    flexDirection: 'row',
    marginBottom: 16,
  },
  listItemContentArea: {
    width: '60%',
    margin: 16,
  },
  listItemHeader: {
    fontSize: 14,
  },
  image: {
    width: 96,
    height: '100%',
  },
});

export default RecipeList;
