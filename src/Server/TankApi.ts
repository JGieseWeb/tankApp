import fetch from "node-fetch";
import { AllInfoStations, fetchListProps, StationsResult } from "./types";

const { API_KEY } = process.env;

if (!API_KEY) {
  throw new Error("API Key is missing!");
}
const BASE_URL = "https://creativecommons.tankerkoenig.de/json";

export async function fetchPrize(id: string): Promise<AllInfoStations> {
  const response = await fetch(
    `${BASE_URL}/prices.php?ids=${id}&apikey=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Error something is wrong here!");
  }
  const result = await response.json();
  return result;
}

export async function fetchList({
  lat,
  lng,
  dist,
  rad,
  type,
}: fetchListProps): Promise<AllInfoStations> {
  const response = await fetch(
    `${BASE_URL}/list.php?lat=${lat}&lng=${lng}&dist=${dist}&rad=${rad}&type=${type}&apikey=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error("Error something is wrong here!");
  }
  const resultOfList = await response.json();
  return resultOfList;
}
export async function getStation({
  lat,
  lng,
  dist,
  rad,
  type,
}: fetchListProps): Promise<StationsResult> {
  const allStation = await fetchList({ lat, lng, dist, rad, type });

  return { stations: allStation.stations };
}
