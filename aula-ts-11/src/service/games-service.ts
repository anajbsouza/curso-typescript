import gamesRepository from "../repository/games-repository";
import { Game } from "./../protocols/game-protocol";

function getGames() {
  return gamesRepository.getGames();
}

function createGame(game: Game) {
  if (gameAlreadyExists(game)) {
    throw { message: "Game already exists" }
  }

  gamesRepository.createGame(game);
}

async function gameAlreadyExists(game: Game): Promise<boolean> {
  const result = await gamesRepository.getGameByTitleAndPlatform(game.title, game.platform);
  return result.length > 0;
}

const gamesService = {
  getGames,
  createGame
}

export default gamesService;