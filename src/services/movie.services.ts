import axios from 'axios'
import { TOKEN, API_GET_GENRES } from '../utils'
class MovieService {
  fetchGenres() {
    return axios.get(API_GET_GENRES, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TOKEN}`
      }
    })
  }


  fetchFilms(fullUrl : string) {
    return axios.get(fullUrl, {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${TOKEN}`
      }
    })
  }

}

export const movieService = new MovieService()