'use client'

import { useCallback, useEffect, useState } from 'react';

import videojs from 'video.js';

import "video.js/dist/video-js.css";



const Player = (props) => {

  const [videoEl, setVideoEl] = useState(null);

  const onVideo = useCallback((el) => {

    setVideoEl(el);

  }, []);

  

  useEffect(() => {

    if (videoEl == null) return;

    const player = videojs(videoEl, props);

    return () => {

      player.dispose();

    };

  }, [props, videoEl]);

  

  return (

    <div data-vjs-player>

      <video ref={onVideo} className="video-js" playsInline />

    </div>

  );

};



export default Player;