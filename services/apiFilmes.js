import axios from "axios";


const apiFilmes = axios.create({
    baseURL:' https://api.themoviedb.org/3/',
    params: {
        language: 'pt-br'
    },
    headers:{
        Authorization:'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDBlZjMzY2VjZDQ5Y2VkZjAzNDFlMWI4NGZjMjM4NSIsInN1YiI6IjY0ZjRjYmI4N2Q0MWFhMDEzODQ3YzViYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W_rG500huwwYuxPu8svxxS-nn0C437NdG4Y3Om8qpEc'
    }
})

export default apiFilmes
