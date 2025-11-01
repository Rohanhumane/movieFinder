import { useQuery } from "@tanstack/react-query";
import { tmdbApi } from "../api/movieApi";

export const useSearchQuery = (query) =>
  useQuery({
    queryKey: ["search", query],
    queryFn: () => tmdbApi.searchMovies(query),
    enabled: !!query,
  });
