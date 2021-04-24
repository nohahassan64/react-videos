import React, { Component } from 'react'
import youtube from './apis/youtube';
import SearchBar from './components/SearchBar'
import VideoDetails from './components/VideoDetails';
import VideoList from './components/VideoList';

export default class App extends Component {
  state = { videos : [] , selectedVideo: null };

  componentDidMount() {
    this.onSearchSubmit('cars');
  }
  onSearchSubmit = async term => {
    const response = await youtube.get('/search' , {
      params: {
        q: term
      }
    });
    this.setState({ 
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  }
  onSelectedVideo = video => {
    this.setState({ selectedVideo: video });
  }
  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onSearchSubmit} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eight wide column'>
              <VideoDetails video={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList videos={this.state.videos} onSelectedVideo={this.onSelectedVideo}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
