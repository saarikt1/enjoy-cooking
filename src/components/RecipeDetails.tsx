import React from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import textStyles from '../../styles/TextStyles';
import Divider from './Divider';

import { RootStackParamList } from '../../App';

import kalaseljankaImg from '../../assets/images/kalaseljanka.webp';

type RecipeDetailsScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'RecipeDetails'
>;

const RecipeDetails: React.FC<RecipeDetailsScreenProps> = ({ navigation }) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={textStyles.headingLarge}>Kookoscurry</Text>
        <Pressable onPress={() => navigation.navigate('RecipeList')}>
          <AntDesign name="closecircleo" size={32} color="black" />
        </Pressable>
      </View>

      <ScrollView>
        <Image style={styles.heroImage} source={kalaseljankaImg} />

        <View style={styles.mainInfoWrapper}>
          <Text style={[textStyles.headingSmall, { marginBottom: 16 }]}>
            Ingredients
          </Text>
          <Text style={[textStyles.bodyMedium, { lineHeight: 32 }]}>
            {`1 dl vihreitä linssejä
1 sipuli
2 valkosipulinkynttä
tuoretta chiliä maun mukaan
2 tl kookosöljyä
0,5 tl garam masalaa
2 tl currytahnaa
3 kaffirlimen lehteä
2 dl tomaattimurskaa
1 tlk kikherneitä
2 dl kookosmaitoa
0,5 limen mehu
tummaa riisiä`}
          </Text>

          <Divider />

          <Text style={[textStyles.headingSmall, { marginBottom: 16 }]}>
            Instructions
          </Text>
          <Text style={[textStyles.bodyMedium, { marginBottom: 16 }]}>
            1. Huuhtele linssit ja keitä ne lähes pehmeiksi suolalla maustetussa
            vedessä n. 20 minuuttia.
          </Text>
          <Text style={[textStyles.bodyMedium, { marginBottom: 16 }]}>
            2. Pilko sillä välin sipuli, valkosipulinkynnet ja tuore chili.
          </Text>
          <Text style={[textStyles.bodyMedium, { marginBottom: 16 }]}>
            3. Kuumenna kookosöljy kattilassa ja lisää garam masala ja
            currytahna. Lisää sipulit ja chilit ja kuullota muutama minuutti.
          </Text>

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
