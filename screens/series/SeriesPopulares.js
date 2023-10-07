import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Card, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'

const SeriesPopulares = ({navigation}) => {
    const [serie, setSerie] = useState([])

    useEffect(()=>{
      apiFilmes.get('/tv/popular').then(resultado => {
        setSerie(resultado.data.results)
      })
    },[])
    return (
    <>
      <ScrollView>
      {serie.map(item => (
        <Card key={item.id} onPress={()=>navigation.push('seriesDetalhes',{id: item.id})}>
          <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.backdrop_path }} />
          <Card.Content>
            <Text variant="titleLarge">{item.name}</Text>
            <Text variant="bodyMedium">{item.overview}</Text>
          </Card.Content>
        </Card>
      ))}
      </ScrollView>
    </>
  )
}

export default SeriesPopulares