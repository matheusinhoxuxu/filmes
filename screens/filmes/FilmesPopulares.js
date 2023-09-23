import React, { useEffect, useState } from 'react'
import { Button, Card, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'


const FilmesPopulares = ({navigation}) => {

  const [filmes, setFilmes] = useState([])

  useEffect(()=>{
    apiFilmes.get('/movie/popular').then(resultado => {
      setFilmes(resultado.data.results)
    })
  },[])


  return (
    <>
      
      {filmes.map(item => (
        <Card key={item.id} onPress={()=>navigation.push('filmes-detalhes',{id: item.id})}>
          <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.backdrop_path }} />
          <Card.Content>
            <Text variant="titleLarge">{item.title}</Text>
            <Text variant="bodyMedium">{item.overview}</Text>
          </Card.Content>
        </Card>
      ))}
    </>
  )
}

export default FilmesPopulares