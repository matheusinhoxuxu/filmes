import { NavigationContainer } from '@react-navigation/native';
import FilmesPopulares from './screens/filmes/FilmesPopulares';
import { PaperProvider } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FilmesStack from './screens/filmes/FilmesStack';
import SeriesStack from './screens/series/SeriesStack';
import AtoresStack from './screens/atores/AtoresStack';




const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
        <Tab.Navigator>
      <Tab.Screen
        name="Filmes"
        component={FilmesStack}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="movie"  size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Séries"
        component={SeriesStack}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="remote-tv"  size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Atores"
        component={AtoresStack}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="account"  size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Configurações"
        component={FilmesPopulares}
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons name="cog"  size={26} />
          ),
        }}
      />

    </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>

    </>
  );
}

