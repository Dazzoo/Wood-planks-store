import api from "../api"


async function getProducts() {
    try {
      const response = await api.get(`products`);
      const product = response.data;

      return product

    } catch (error) {
        console.log(error)
      return error
    }
  }

  export { getProducts }