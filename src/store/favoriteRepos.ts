import { create } from "zustand";
import { Repository } from "../hooks/types";

type FavoriteRepo = {
  favorites: number[];
  addFavorite: (repo: number) => void;
  removeFavorite: (repo: number) => void;
};

export const useFavoritesReposStore = create<FavoriteRepo>((set) => ({
  favorites: [],
  addFavorite: (repo: number) =>
    set((state) => ({ favorites: [...state.favorites, repo] })),
  removeFavorite: (repo: number) =>
    set((state) => ({
      favorites: state.favorites.filter((r) => r !== repo),
    })),
}));
