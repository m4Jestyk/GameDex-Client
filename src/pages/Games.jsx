import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Game from '../components/Game';

const Games = () => {
  const developer = useSelector((state) => state.game.developer);
  const [games, setGames] = useState([]);

  const fetchGames = async () => {
    try {
      const devResponse = await axios.get(`http://localhost:8080/api/v1/games?developer=${developer}`);
      const devGames = devResponse.data;
  
      const prodResponse = await axios.get(`http://localhost:8080/api/v1/games?producer=${developer}`);
      const prodGames = prodResponse.data;
  
      setGames([...devGames, ...prodGames]);
  
      console.log('Combined Games:', [...devGames, ...prodGames]);
    } catch (error) {
      console.error('Error fetching games:', error);
    }
  };
  

  useEffect(() => {
    if (developer) {
      fetchGames();
    }
  }, [developer]); 

  return (
    <div>
      <h1>Game List</h1>
      {games.length > 0 ? (
        <ul>
          {games.map((game, index) => (
            <li key={index}><Game name={game.name} producer = {game.producer} developer = {game.developer} date = {game.date} operating_system={game.operating_system} genre = {game.genre}/></li>
          ))}
        </ul>
      ) : (
        <p>No games available</p>
      )}
    </div>
  );
};

export default Games;
