import { useState, useEffect } from 'react';
import { streamers } from '../data';

const useFetchStreamers = () => {
  const url = 'https://twitch-proxy.freecodecamp.rocks/twitch-api/streams';
  const [streamerData, setStreamerData] = useState([]);
  const [completed, setCompleted] = useState(false);

  const fetchStreamers = async () => {
    await Promise.all(
      streamers.map(async (streamer) => {
        const res = await fetch(`${url}/${streamer.id}`);
        const data = await res.json();
        console.log(data);
        let info = {
          name: streamer.id,
          avatar:
            streamer.avatar ||
            'https://raw.githubusercontent.com/gestok/streaming-app/main/assets/thumbs/streamers/offline.jpg',
        };
        if (data['stream'] === null) {
          info.game = 'Offline';
          info.status = 'offline';
        } else if (data['stream'] === undefined) {
          info.game = 'Account Closed';
          info.status = 'offline';
        } else {
          info.game = data.stream.game;
          info.status = 'online';
        }
        setStreamerData((streamerData) => [...streamerData, info]);
      })
    );
    setCompleted(true);
  };

  useEffect(() => {
    return () => fetchStreamers();
  }, []);

  return [completed, streamerData];
};

export default useFetchStreamers;
