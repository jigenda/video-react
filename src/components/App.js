import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = {
    videos: [],
    selectedVideo: null
  };
  componentDidMount() {
    const item = [
      "buildings",
      "flowers",
      "roses",
      "crypto",
      "dr. berg",
      "flat earth"
    ];
    const randomItem = item[Math.floor(Math.random() * item.length)];
    this.onTermSubmit(randomItem, 5);
  }
  onTermSubmit = async (term, maxItem) => {
    console.log("term", term);
    console.log("maxItem", maxItem);
    const response = await youtube.get("/search", {
      params: {
        q: term,
        maxResults: maxItem
      }
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container">
        <h2>Video App using ReactJs</h2>
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
