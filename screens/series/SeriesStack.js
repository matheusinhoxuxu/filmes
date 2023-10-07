import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import SeriesPopulares from './SeriesPopulares';
import Atores from './AtoresSeries';
import SeriesDetalhes from './SeriesDetalhes';

const Stack = createNativeStackNavigator();
const SeriesStack = () => {
  return (
    <>
        <Stack.Navigator>
      <Stack.Screen name="series" component={SeriesPopulares} options={{title:'series-populares'}}/>
      <Stack.Screen name="seriesDetalhes" component={SeriesDetalhes} options={{title:'series-populares'}}/>
      <Stack.Screen name="AtoresSeries" component={Atores} options={{title:'series-populares'}}/>
      </Stack.Navigator>
    </>
  )
}

export default SeriesStack