import { useQuery } from "@tanstack/react-query";
import { getDrinks } from "../repositories/drinks/drinksRepository";

export const useGetDrinksQuery = () =>
    useQuery({
      queryKey: ['drinks'],
      queryFn: () => getDrinks().then((res) => { console.log('>>>',res.data)}),
      staleTime: 20000,
    });