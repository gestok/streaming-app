// https://cdn.dribbble.com/userupload/3909904/file/original-e0be894f395f2e4e5d461bf67086c930.png?compress=1&resize=3200x2400
import React from 'react';
import './reset.css';
import './style.scss';
import { games } from './data';
import useFetchStreamers from './hooks/useFetchStreamers';
import Gamecard from './components/gamecard/Gamecard';
import Streamer from './components/streamer/Streamer';
import Carousel from './components/carousel/Carousel';
import Search from './components/search/Search';
import Navigation from './components/navigation/Navigation';

export default function App() {
  const [completed, streamers] = useFetchStreamers();

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="streamApp relative">
      <div className="stub"></div>
      <Search />
      <span className="sectionTitle">Recommended games</span>
      <Carousel>
        {shuffleArray(games).map((game) => {
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
      <span className="sectionTitle">Popular Lives</span>
      <Carousel></Carousel>
      <span className="sectionTitle">Favourite Streamers</span>
      <Carousel>
        {completed &&
          streamers.map((streamer) => {
            return (
              <Streamer
                key={streamer.name}
                banner={streamer.banner}
                logo={streamer.logo}
                name={streamer.name}
                status={streamer.status}
                followers={streamer.followers}
                viewers={streamer.viewers}
                videos={streamer.videos}
              />
            );
          })}
      </Carousel>
      <Navigation />
    </div>
  );
}
