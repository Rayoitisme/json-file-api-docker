import apiClient from "../apiClient";

export const getDrinks = async () => {
    return await apiClient({
      method: 'get',
      url: `drinks`,
    });
  }; 