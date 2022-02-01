import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import AppLoading from 'expo-app-loading';

import {
  useFonts,
  // LibreFranklin_100Thin,
  // LibreFranklin_200ExtraLight,
  // LibreFranklin_300Light,
  LibreFranklin_400Regular,
  // LibreFranklin_500Medium,
  // LibreFranklin_600SemiBold,
  LibreFranklin_700Bold,
  // LibreFranklin_800ExtraBold,
  // LibreFranklin_900Black,
  // LibreFranklin_100Thin_Italic,
  // LibreFranklin_200ExtraLight_Italic,
  // LibreFranklin_300Light_Italic,
  // LibreFranklin_400Regular_Italic,
  // LibreFranklin_500Medium_Italic,
  // LibreFranklin_600SemiBold_Italic,
  // LibreFranklin_700Bold_Italic,
  // LibreFranklin_800ExtraBold_Italic,
  // LibreFranklin_900Black_Italic,
} from '@expo-google-fonts/libre-franklin';

import RecipeList from './src/components/RecipeList';
import RecipeDetails from './src/components/RecipeDetails';

const Stack = createNativeStackNavigator<RootStackParamList>();

export type RootStackParamList = {
  RecipeList: undefined;
  RecipeDetails: undefined;
};

const App: React.FC<RootStackParamList> = () => {
  let [fontsLoaded] = useFonts({
    // LibreFranklin_100Thin,
    // LibreFranklin_200ExtraLight,
    // LibreFranklin_300Light,
    LibreFranklin_400Regular,
    // LibreFranklin_500Medium,
    // LibreFranklin_600SemiBold,
    LibreFranklin_700Bold,
    // LibreFranklin_800ExtraBold,
    // LibreFranklin_900Black,
    // LibreFranklin_100Thin_Italic,
    // LibreFranklin_200ExtraLight_Italic,
    // LibreFranklin_300Light_Italic,
    // LibreFranklin_400Regular_Italic,
    // LibreFranklin_500Medium_Italic,
    // LibreFranklin_600SemiBold_Italic,
    // LibreFranklin_700Bold_Italic,
    // LibreFranklin_800ExtraBold_Italic,
    // LibreFranklin_900Black_Italic,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
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
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    );
  }
};

export default App;
