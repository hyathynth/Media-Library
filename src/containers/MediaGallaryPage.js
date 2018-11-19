import React, { Component } from 'react';
import { shutterStockImages, shutterStockVideos } from '../api/api';

class MediaGalleryPage extends Component {
  componentDidMount() {
    shutterStockImages('rain').then(images => console.log(images, 'Images'));
    shutterStockVideos('rain').then(videos => console.log(videos, 'Videos'));
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}

export default MediaGalleryPage;
