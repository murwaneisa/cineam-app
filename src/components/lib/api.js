import axios from "axios";

const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY; // vite use the VITE_REACT_APP to access variables in the .env file
console.log("the key is ", API_KEY);

export async function fetchData() {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
    );
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}
