import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import RecipeView from './RecipeView';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <RecipeView />
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
