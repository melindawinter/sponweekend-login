import axios from "axios";
// API.getMovies(userGenreChoice)
export default {
  //pass in 2 arguments: lat and long
  getRestaurant: function (lat, long) {
    return axios({
      method: "GET",
      url: "https://tripadvisor1.p.rapidapi.com/restaurants/list-by-latlng",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RESTAURANT_API_KEY,
        useQueryString: true
      },
      params: {
        limit: "8",
        currency: "USD",
        distance: "5",
        lunit: "km",
        lang: "en_US",
        latitude: lat,
        longitude: long
      }
    });
  }
};
