import axios from 'axios';

// Записую параметри по дефолту

class fetchApi {
  #URL = 'https://api.themoviedb.org/3/';
  #API_KEY = '89c7dfceaf9e376cdb680a771d381668';
  #TRAND = 'trending/movie/day';
  #DETAILS = 'movie/';
  #CREDITS = '/credits';
  #REVIEWS = '/reviews';
  #SEARCH = 'search/movie';

  trand = async () => {
    const response = await axios.get(
      `${this.#URL}${this.#TRAND}?api_key=${this.#API_KEY}`
    );
    return response.data.results;
  };

  details = async movieId => {
    const response = await axios.get(
      `${this.#URL}${this.#DETAILS}${movieId}?api_key=${this.#API_KEY}`
    );
    return response.data;
  };

  credits = async movieId => {
    const response = await axios.get(
      `${this.#URL}${this.#DETAILS}${movieId}${this.#CREDITS}?api_key=${
        this.#API_KEY
      }`
    );
    return response.data.cast;
  };

  reviews = async movieId => {
    const response = await axios.get(
      `${this.#URL}${this.#DETAILS}${movieId}${this.#REVIEWS}?api_key=${
        this.#API_KEY
      }`
    );

    return response.data.results;
  };

  search = async movieName => {
    const response = await axios.get(
      `${this.#URL}${this.#SEARCH}?api_key=${this.#API_KEY}&query=${movieName}`
    );

    return response.data.results;
  };
}

const API = new fetchApi();
export default API;
