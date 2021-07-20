import axios from './axios.js';
import './App.css';
import Video from './Video'
import React, { useState, useEffect } from 'react';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await axios.get('v2/posts')
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, [])

  console.log(videos)
  // console.log()
  return (
    <div className="App">
      <div className="app__videos">
        {videos.map(
          ({ url, username, description, song, likes, shares, comments }) => {
            return(
            <Video
              url={url}
              username={username}
              description={description}
              song={song}
              likes={likes}
              shares={shares}
              comments={comments}
            />)
          })}

      </div>
    </div>

  );
}

export default App;
