import { client } from "../client.instance";
import { PokeList } from "./pokeapi.interfaces";

export const getPokemonList = async (items: number) => {
  try {
    const response = await client.get(`/pokemon?limit=${items}`);
    const data: PokeList = response.data;
    return data.results.map(({ name }, index) => ({
      id: index + 1,
      name,
    }));
  } catch (error) {
    const { message } = error as Error;
    throw new Error(message);
  }
};
