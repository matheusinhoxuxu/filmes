import React, { useEffect, useState } from 'react'
import apiFilmes from '../../services/apiFilmes'
import { Avatar, Card, IconButton, Text } from 'react-native-paper'
import { ScrollView } from 'react-native';

const Atores = ({ navigation, route }) => {

    const LeftContent = (props) => <Avatar.Icon {...props} icon="movie" />;
    const [ator, setAtor] = useState({})
    const [series, setSeries] = useState([])

    useEffect(() => {
        const id = route.params.id

        apiFilmes.get(`/person/${id}`).then(resultado => {
            setAtor(resultado.data)
        })

        apiFilmes.get(`/person/${id}/series_credits`).then((resultado) => {
            setSeries(resultado.data.cast);
        });
    }, [])

    return (
        <>
            <ScrollView>
            <Card style={{ marginTop: 50, margin: 10 }} key={ator.id}>
                <Card.Content>
                    <Card.Cover style={{ height: 350 }} source={{ uri: 'https://image.tmdb.org/t/p/w500/' + ator.profile_path }} />
                    <Text style={{ margin: 10 }} variant='titleLarge' >Nome: {ator.name}</Text>
                    <Text style={{ margin: 10 }} >Biografia: {ator.biography}</Text>
                </Card.Content>
            </Card>
        
            <Card style={{ marginTop: 10, margin: 10 }} key={ator.id}>
                <Card.Content>
                    <Text style={{ margin: 5 }} >Nasceu: {ator.place_of_birth}</Text>
                    <Text style={{ margin: 5 }} >Popularidade: {ator.popularity}</Text>
                </Card.Content>
            </Card>

            <Card.Content style={{alignItems:'center'}}>
                <Text style={{marginTop:10, margin:10}} variant='titleLarge'>Filmes</Text>
            </Card.Content>

            {filmes.map((item) => (

                <Card style={{ marginTop: 50, margin: 10 }} mode='outlined' key={item.id}>
                    <Card.Title
                        title={item.character}
                        subtitle={item.title}
                        left={(props) => <Avatar.Image size={50}
                            source={{ uri: 'https://image.tmdb.org/t/p/w500/' + item.poster_path }} />}
                        right={(props) => <IconButton {...props} icon="dots-vertical"
                            onPress={() =>
                            navigation.push("filmes-detalhes", { id: item.id })
                            } />}
                    />
                </Card>
            ))}
    </ScrollView>              
        </>

    )
}

export default Atores