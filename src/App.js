// https://cdn.dribbble.com/userupload/3909904/file/original-e0be894f395f2e4e5d461bf67086c930.png?compress=1&resize=3200x2400
import React from 'react';
import './reset.css';
import './style.scss';
import { games } from './data';
import useFetchStreamers from './hooks/useFetchStreamers';
import Gamecard from './components/gamecard/Gamecard';
import Streamer from './components/streamer/Streamer';
import Carousel from './components/carousel/Carousel';

export default function App() {
  const [completed, streamers] = useFetchStreamers();

  return (
    <div>
      <span className="sectionTitle">Recommended games</span>
      <Carousel>
        {games.map((game) => {
          return (
            <Gamecard
              key={game.slug}
              thumb={game.thumb}
              title={game.name}
              viewers={game.viewers}
            />
          );
        })}
      </Carousel>
      <span className="sectionTitle">Favourite Streamers</span>
      <Carousel>
        {completed &&
          streamers.map((streamer) => {
            return (
              <Streamer
                key={streamer.name}
                cover={}
                logo={streamer.avatar}
                name={streamer.name}
                status={streamer.status}
                followers={}
                viewers={}
                videos={}
              />
            );
          })}
      </Carousel>
    </div>
  );
}
