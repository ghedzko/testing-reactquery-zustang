import React from "react";
import { Repository } from "../hooks/types";
import { useFavoritesReposStore } from "../store/favoriteRepos";
type Props = {
  repo: Repository;
  isFavorite: boolean;
};

export default function Card({ repo, isFavorite }: Props) {
  const { addFavorite, removeFavorite } = useFavoritesReposStore();

  const handleButtonPress = () => {
    if (isFavorite) {
      removeFavorite(repo.id);
    } else {
      addFavorite(repo.id);
    }
  };

  return (
    <div>
      <h3>{repo.name}</h3>
      <div>{repo.full_name}</div>
      <div>{repo.archive_url}</div>
      <button onClick={handleButtonPress}>
        {isFavorite ? "Remove from favorites" : "Add to favorites"}
      </button>
    </div>
  );
}
