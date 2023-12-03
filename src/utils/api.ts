import axios from "axios";

const BASE_URL = "https://registry.npmjs.org";

export const searchPackages = async (query: string) => {
  const response = await axios.get(`${BASE_URL}/-/v1/search`, {
    params: { text: query },
  });
  return response.data.objects;
};
