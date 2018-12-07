import React, { Component } from 'react';

import Gif from './gif.jsx'

const GifList = (props) => {
  return (
    <div className="gif-list">
      {props.gifs.map(gif => <Gif id={gif.id} key={gif.id} selectedGif={props.selectedGif} />)}
    </div>
  );
};

export default GifList;
