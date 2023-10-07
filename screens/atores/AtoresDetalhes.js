import React, { useEffect, useState } from 'react'
import { Avatar, Card, IconButton, Text } from 'react-native-paper'
import { ScrollView } from 'react-native-web'
import apiFilmes from '../../services/apiFilmes'

const AtoresDetalhes = ({navigation,route}) => {
  const [filme, setFilme] = useState({})
  const [atores, setAtores] = useState([])


  useEffect(() => {
    const id = route.params.id
    apiFilmes.get(`/person/${id}`).then(resultado => {
      setFilme(resultado.data)
    })

    apiFilmes.get(`/person/${id}/credits`).then(resultado => {
      setAtores(resultado.data.cast)
    })

  }, [])


  return (
    <>
      <ScrollView >
      <Card style={{ marginTop: 50, margin: 10 }}>

        <Card.Content style={{ alignItems: 'center' }} >
          <Card.Cover style={{ width: 200, height: 300, borderRadius: 10 }}
            source={{ uri: 'https://image.tmdb.org/t/p/w500/' + filme.profile_path }} />
        </Card.Content>

        <Card.Content style={{ marginTop: 10 }} >
          <Text style={{ marginTop: 10, margin: 10 }} variant='titleLarge' > {filme.name}</Text>
        </Card.Content>
      </Card>

      
      {atores.map(item => (
        <Card style={{ marginTop: 50, margin: 10 }} mode='outlined' key={item.id}>
          <Card.Title
            title={item.character}
            subtitle={item.name}
            left={(props) => <Avatar.Image size={50}
              source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path }} />}
            right={(props) => <IconButton {...props} icon="dots-vertical"
              onPress={() =>
                navigation.push("filmes-populares", { id: item.id })
              } />}
          />
        </Card>
      ))}
      </ScrollView>
    </>
  )
}

export default AtoresDetalhes