import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FilmesPopulares from './screens/filmes/FilmesPopulares';
import { PaperProvider } from 'react-native-paper';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <PaperProvider>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="filmes-populares" component={FilmesPopulares} options={{title:'filmes populares'}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </PaperProvider>

    </>
  );
}

