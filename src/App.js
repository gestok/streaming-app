// https://cdn.dribbble.com/userupload/3909904/file/original-e0be894f395f2e4e5d461bf67086c930.png?compress=1&resize=3200x2400
import React from 'react';
import './reset.css';
import './style.scss';
import { games } from './data';
import useFetchStreamers from './hooks/useFetchStreamers';
import Cards from './components/cards/Cards';

export default function App() {
  // const [completed, streamers] = useFetchStreamers();

  return (
    <div>
      {/* <div>
        {completed &&
          streamers.map((streamer) => {
            return (
              <>
                <div>{streamer.game}</div>
                <div>{streamer.status}</div>
                <br />
              </>
            );
          })}
      </div> */}

      <span className="sectionTitle">Recommended games</span>
      <div className="cardsWrapper d-flex gap4 overflow-auto">
        {games.map((game) => {
          return (
            <Cards
              key={game.slug}
              thumb={game.thumb}
              title={game.name}
              viewers={game.viewers}
            />
            // <div>
            //   {game.tags.map((tag) => (
            //     <span>{tag}</span>
            //   ))}
            // </div>
          );
        })}
      </div>
      <span className="sectionTitle">Live you'll like</span>
      <div className="cardsWrapper d-flex gap4 overflow-auto">
        {games.map((game) => {
          return (
            <Cards
              key={game.slug}
              thumb={game.thumb}
              title={game.name}
              viewers={game.viewers}
            />
          );
        })}
      </div>
    </div>
  );
}
