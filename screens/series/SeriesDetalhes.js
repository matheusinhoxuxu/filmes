import React, { useEffect, useState } from 'react'
import { Avatar, Card, IconButton, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'
import { ScrollView } from 'react-native'



const SeriesDetalhes = ({ navigation, route }) => {


  const [series, setSeries] = useState({})
  const [atores, setAtores] = useState([])


  useEffect(() => {
    const id = route.params.id
    apiFilmes.get(`/tv/${id}`).then(resultado => {
      setSeries(resultado.data)
    })

    apiFilmes.get(`/tv/${id}/credits`).then(resultado => {
      setAtores(resultado.data.cast)
    })

  }, [])


  return (
    <>
      <ScrollView>
      <Card style={{ marginTop: 50, margin: 10 }}>

        <Card.Content style={{ alignItems: 'center' }} >
          <Card.Cover style={{ width: 200, height: 300, borderRadius: 10 }}
            source={{ uri: 'https://image.tmdb.org/t/p/w500/' + series.poster_path }} />
        </Card.Content>

        <Card.Content style={{ marginTop: 10 }} >
          <Text style={{ marginTop: 10, margin: 10 }} variant='titleLarge' >Titulo: {series.title}</Text>
          <Text>Descrição: {series.overview}</Text>
        </Card.Content>
      </Card>

      <Card mode='outlined' style={{ marginBottom: 15 }}>
        <Card.Content>
          <Text variant='bodyMedium'>Orçamento:{series.budget}</Text>
          <Text variant='bodyMedium'>Duração: {series.vote_average}</Text>
          <Text variant='bodyMedium'>Lançamento:{series.runtime}</Text>
        </Card.Content>
      </Card>
      {atores.map(item => (
        <Card style={{ marginTop: 50, margin: 10 }} mode='outlined' key={item.id}>
          <Card.Title
            title={item.character}
            subtitle={item.name}
            left={(props) => <Avatar.Image size={50}
              source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.profile_path }} />}
            right={(props) => <IconButton {...props} icon="dots-vertical"
              onPress={() =>
                navigation.push("AtoresSeries", { id: item.id })
              } />}
          />
        </Card>
      ))}
      </ScrollView>
    </>
  )
}

export default SeriesDetalhes

