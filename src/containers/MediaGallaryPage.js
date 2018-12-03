import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectedImageAction, selectedVideoAction, searchMediaAction } from '../actions/mediaActions';
import PhotoPage from '../components/PhotoPage';
import VideoPage from '../components/VideoPage';
import '../styles/style.css'
import PropTypes from 'prop-types';

class MediaGalleryPage extends Component {
  constructor() {
    super();
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelectImage = this.handleSelectImage.bind(this);
    this.handleSelectVideo = this.handleSelectVideo.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(searchMediaAction('rain'));
  }

  handleSelectImage(selectedImage) {
    this.props.dispatch(selectedImageAction(selectedImage));
  }

  // Dispatches *selectvideoAction* when any video is clicked
  handleSelectVideo(selectedVideo) {
    this.props.dispatch(selectedVideoAction(selectedVideo));
  }

  // Dispatches *searchMediaAction* with query param.
  // We ensure action is dispatched to the store only if query param is provided.
  handleSearch(event) {
    event.preventDefault();
    if (this.query !== null) {
      this.props.dispatch(searchMediaAction(this.query.value));
      this.query.value = '';
    }
  }

  render() {
    const { images, selectedImage, videos, selectedVideo } = this.props;
    return (
      <div className="container-fluid">
        {images && selectedImage? <div>
          <input
            type="text"
            ref={ref => (this.query = ref)}
          />
          <input
            type="submit"
       className="btn btn-primary"
            value="Search Library"
            onClick={this.handleSearch}
          />
          <div className="row">
            <PhotoPage
              images={images}
              selectedImage={selectedImage}
              onHandleSelectImage={this.handleSelectImage}
            />
            <VideoPage
              videos={videos}
              selectedVideo={selectedVideo}
              onHandleSelectVideo={this.handleSelectVideo}
            />
          </div>
        </div> : 'loading ....'}
      </div>
    );
  }
}

MediaGalleryPage.propTypes = {
  // images: PropTypes.array,
  // selectedImage: PropTypes.object,
  // videos: PropTypes.array,
  // selectedVideo: PropTypes.object,
  // dispatch: PropTypes.func.isRequired
};


const mapStateToProps = ({ images, videos }) => ({
  images: images[0],
  selectImage: images.selectedImage,
  videos: videos[0],
  selectedVideo: videos.selectedVideo
});

export default connect(mapStateToProps)(MediaGalleryPage);
