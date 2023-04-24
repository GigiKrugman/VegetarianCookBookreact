import axios from "axios";

const apiKey = import.meta.env.VITE_API_KEY_SPOONACULAR;
const baseURL = "https://api.spoonacular.com/recipes";

const ClientApi = {
  async searchRecipes(name) {
    const response = await axios.get(`${baseURL}/complexSearch`, {
      params: {
        apiKey,
        query: name,
        diet: "vegetarian",
      },
    });

    return response.data;
  },

  async fetchPopularRecipes() {
    const response = await axios.get(`${baseURL}/random`, {
      headers: {
        Accept: "application/json",
      },
      params: {
        apiKey,
        tags: "vegetarian",
        number: 6,
      },
    });

    return response.data;
  },
};

export default ClientApi;
