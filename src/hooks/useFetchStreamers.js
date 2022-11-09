import { useState, useEffect } from 'react';
import { streamers } from '../data';

const useFetchStreamers = () => {
  const offline =
    'https://raw.githubusercontent.com/gestok/streaming-app/main/src/assets/thumbs/streamers/offline.jpg';
  const url = 'https://twitch-proxy.freecodecamp.rocks/twitch-api/streams';
  const [streamerData, setStreamerData] = useState([]);
  const [completed, setCompleted] = useState(false);

  const fetchStreamers = async () => {
    await Promise.all(
      streamers.map(async (streamer) => {
        const res = await fetch(`${url}/${streamer.id}`);
        const data = await res.json();
        let info = {
          name: streamer.id,
          logo: streamer.logo || offline,
          banner: streamer.banner,
          viewers: 0,
          followers: streamer.followers,
          videos: streamer.videos,
        };
        if (data['stream'] === null) {
          info.game = 'Offline';
          info.status = 'offline';
        } else if (data['stream'] === undefined) {
          info.game = 'Account Closed';
          info.status = 'offline';
        } else {
          info.game = data.stream.game;
          info.viewers = data.stream.viewers;
          info.url= data.stream.channel.url;
          info.status = 'online';
        }
        setStreamerData((streamerData) => [...streamerData, info]);
      })
    );
    setCompleted(true);
  };

  useEffect(() => {
    fetchStreamers();
    return () => fetchStreamers();
  }, []);

  return [completed, streamerData];
};

export default useFetchStreamers;
