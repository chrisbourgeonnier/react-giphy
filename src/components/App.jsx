import React from 'react';
import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const giphy = require('giphy-api')({
  apiKey: 'pDQGKTCggwxXCtqL8GNEoHJ4Rn5LRiCh',
  https: true
});

function App() {
  const [selectedId, setSelectedId] = React.useState("13HgwGsXF0aiGY");
  const [gifIds, setGifIds] = React.useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]);

  function fetchGiphy(keyword) {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 12
    }, (err, res) => {
      const ids = res.data.map((gif) => gif.id);
      setGifIds(ids);
    });
  }

  return (
    <div>
      <div className="left-scene">
        <SearchBar fetchGiphy={fetchGiphy} />
        <div className="selected-gif">
          <Gif id={selectedId} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIds={gifIds} setSelectedId={setSelectedId} />
      </div>
    </div>
  );
}

export default App;
