import { StyleSheet, Text, View } from 'react-native';

export default function Recipe() {
  return (
    <View>
      <Text style={styles.title}>Kookoscurry</Text>
      <Text style={styles.subtitle}>Ingredients</Text>
      <Text>
        {`
        1 dl vihreitä linssejä
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
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    margin: 24,
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    marginLeft: 24,
    fontSize: 16,
  },
});
