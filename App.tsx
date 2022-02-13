import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppLoading from 'expo-app-loading';

import {
  useFonts,
  LibreFranklin_400Regular as LibreFranklinRegular,
  LibreFranklin_700Bold as LibreFranklinBold,
} from '@expo-google-fonts/libre-franklin';

import RecipeList from './src/components/RecipeList';
import RecipeDetails from './src/components/RecipeDetails';
import Profile from './src/components/Profile';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  RecipeList: undefined;
  RecipeDetails: undefined;
  Profile: undefined;
};

const App: React.FC<RootStackParamList> = () => {
  const [fontsLoaded] = useFonts({
    LibreFranklinRegular,
    LibreFranklinBold,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="RecipeList"
          screenOptions={{
            title: 'Enjoy Cooking',
            headerBackTitleVisible: false,
            headerShown: false,
          }}
        >
          <Stack.Screen name="RecipeList" component={RecipeList} />
          <Stack.Screen name="RecipeDetails" component={RecipeDetails} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
