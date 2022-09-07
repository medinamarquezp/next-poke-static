import { client } from "../client.instance";
import { Item, ListItems, PokeList, PokeDetails } from "./pokeapi.interfaces";

export const getPokemonList = async (items: number): Promise<ListItems[]> => {
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

export const getPokemon = async (identifier: string): Promise<Item | null> => {
  try {
    const response = await client.get(`/pokemon/${identifier}`);
    const data: PokeDetails = response.data;
    const { id, name, abilities, species, sprites } = data;
    const specie = species.name;
    const abilityNames = abilities.map(({ ability }) => ability.name);
    const { back_default, back_shiny, front_default, front_shiny, other } =
      sprites;
    const imageList = [back_default, back_shiny, front_default, front_shiny];
    const mainImage = other?.dream_world.front_default || "";
    return { id, name, specie, abilities: abilityNames, mainImage, imageList };
  } catch (error) {
    return null;
  }
};
