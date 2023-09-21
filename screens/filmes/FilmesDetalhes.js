import React, { useEffect, useState } from 'react'
import { Card, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'
import { Image, ScrollView, StyleSheet } from 'react-native'

const FilmesDetalhes = ({ navigation, route }) => {


  const [filme, setFilme] = useState({})
  const [atores, setAtores] = useState([])


  useEffect(() => {
    const id = route.params.id
    apiFilmes.get(`/movie/${id}`).then(resultado => {
      setFilme(resultado.data)
    })

    apiFilmes.get(`/movie/${id}/credits`).then(resultado => {
      setAtores(resultado.data.cast)
    })

  }, [])


  return (
    <>
    <ScrollView>

      <Card>
        <Card.Cover source={{ uri: 'https://image.tmdb.org/t/p/w500/' + filme.backdrop_path }} />
        <Card.Content>
          <Text variant="titleLarge">{filme.title}</Text>
          <Text variant="bodyMedium">{filme.overview}</Text>
        </Card.Content>
      </Card>
      <Card mode='outlined' >

        <Text variant="titleLarge">Orçamento:{filme.budget}</Text>
        <Text variant="bodyMedium">Voto:{filme.vote_average}</Text>
        <Text variant="bodyMedium">Duração:{filme.runtime}min</Text>
        <Text variant="bodyMedium">Lançamento:{filme.release_date}</Text>

      </Card>

      {atores.map(item => (
        <Card key={item.id} style={styles.container}>
          
          <Image source={{uri:item.profile_path}} />
          <Card.Title
            title={item.character}
            subtitle={item.name}
            />
        </Card>
      ))}

      </ScrollView>


    </>
  )
}

export default FilmesDetalhes

styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    padding: 10,
    marginBottom: 10
  },
  
})