// https://cdn.dribbble.com/userupload/3909904/file/original-e0be894f395f2e4e5d461bf67086c930.png?compress=1&resize=3200x2400
import React from 'react';
import './reset.css';
import './style.css';
import { games } from './data';
import useFetchStreamers from './hooks/useFetchStreamers';

export default function App() {
  const [streamers] = useFetchStreamers();

  return (
    <div>
      <div>
        {streamers &&
          streamers.map((streamer) => {
            return (
              <>
                <div>{streamer.game}</div>
                <div>{streamer.status}</div>
                <br />
              </>
            );
          })}
      </div>

      {games.map((game) => {
        return (
          <div key={game.slug}>
            <div>{game.name}</div>
            <div>
              <img src={game.thumb} alt={game.slug} />
            </div>
            <div>
              {game.tags.map((tag) => (
                <span>{tag}</span>
              ))}
            </div>
            <div>{game.viewers}</div>
          </div>
        );
      })}
    </div>
  );
}
