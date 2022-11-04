import { useState, useEffect } from 'react';

const useFetchStreamers = (channel) => {
  const url = 'https://twitch-proxy.freecodecamp.rocks/twitch-api/streams/';
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url + channel)
      .then((res) => res.json())
      .then((data) => {
        let info = {};
        if (data.strem === null) {
          info.game = 'Offline';
          info.status = 'offline';
        } else if (data.stream === undefined) {
          info.game = 'Account Closed';
          info.status = 'offline';
        } else {
          info.game = data.stream.game;
          info.status = 'online';
        }
        setData(info);
      });
  }, [channel]);
  console.log(data);
  return [data];
};

export default useFetchStreamers;
