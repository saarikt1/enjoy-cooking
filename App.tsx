import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RecipeList from './src/components/RecipeList';
import RecipeDetails from './src/components/RecipeDetails';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  RecipeList: undefined;
  RecipeDetails: undefined;
};

const App: React.FC<RootStackParamList> = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="RecipeList"
          screenOptions={{
            title: 'Enjoy Cooking',
            headerBackTitleVisible: false,
          }}
        >
          <Stack.Screen name="RecipeList" component={RecipeList} />
          <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
