import React, { useEffect, useState } from 'react'
import { Avatar, Card, IconButton, Text } from 'react-native-paper'
import apiFilmes from '../../services/apiFilmes'



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

      <Card style={{ marginTop: 50, margin: 10 }}>

        <Card.Content style={{ alignItems: 'center' }} >
          <Card.Cover style={{ width: 200, height: 300, borderRadius: 10 }}
            source={{ uri: 'https://image.tmdb.org/t/p/w500/' + filme.poster_path }} />
        </Card.Content>

        <Card.Content style={{ marginTop: 10 }} >
          <Text style={{ marginTop: 10, margin: 10 }} variant='titleLarge' >Titulo: {filme.title}</Text>
          <Text>Descrição: {filme.overview}</Text>
        </Card.Content>
      </Card>

      <Card mode='outlined' style={{marginBottom:15}}>
        <Card.Content>
          <Text variant='bodyMedium'>Orçamento:{filme.budget}</Text>
          <Text variant='bodyMedium'>Duração: {filme.vote_average}</Text>
          <Text variant='bodyMedium'>Lançamento:{filme.runtime}</Text>
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
                navigation.push("atores-detalhes", { id: item.id })
              } />}
          />
        </Card>
      ))}




    </>
  )
}

export default FilmesDetalhes

