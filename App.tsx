import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, Text } from 'react-native';
import Recipe from './src/components/Recipe';
import RecipeList from './src/components/RecipeList';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Recipe />
      <Text>List of recipes</Text>
      <RecipeList />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
