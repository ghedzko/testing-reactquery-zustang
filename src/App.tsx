import Card from "./components/Card";
import { useFetchRepositories } from "./hooks/useRepos";
import { useFavoritesReposStore } from "./store/favoriteRepos";

export default function App() {
  const { isLoading, data: repositories } = useFetchRepositories();
  const { favorites } = useFavoritesReposStore();
  console.log(repositories);
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <h1>Mis Repos</h1>
      {repositories?.map((repo) => (
        <Card
          repo={repo}
          key={repo.id}
          isFavorite={favorites.includes(repo.id)}
        />
      ))}
    </>
  );
}
