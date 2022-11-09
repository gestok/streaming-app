import React from 'react';
import './reset.css';
import './style.scss';
import { games, lives } from './data';
import useFetchStreamers from './hooks/useFetchStreamers';
import Gamecard from './components/gamecard/Gamecard';
import Streamer from './components/streamer/Streamer';
import Carousel from './components/carousel/Carousel';
import Livecard from './components/livecard/Livecard';
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
      <span className="sectionTitle user-select-none">Recommended games</span>
      <Carousel>
        {shuffleArray(games).map((game, i) => {
          return (
            <Gamecard
              key={game.slug + i}
              thumb={game.thumb}
              title={game.name}
              viewers={game.viewers}
            />
          );
        })}
      </Carousel>
      <span className="sectionTitle user-select-none">Popular Lives</span>
      <Carousel>
        {completed &&
          streamers.map((streamer, i) => {
            return (
              <Livecard
                key={`${streamer.name + i}_live`}
                thumb={lives[i].thumb}
                status={streamer.status}
                game={streamer.game}
                url={streamer.url}
                logo={streamer.logo}
                name={streamer.name}
                viewers={streamer.viewers}
              />
            );
          })}
      </Carousel>
      <span className="sectionTitle user-select-none">Favourite Streamers</span>
      <Carousel>
        {completed &&
          streamers.map((streamer, i) => {
            return (
              <Streamer
                key={streamer.name + i}
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
