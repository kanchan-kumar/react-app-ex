import React, {useEffect, useState} from 'react';
import SearchBar from "./SearchBar";
import youtube from '../apis/youtube';
import {VideoList} from "./VideoList";
import {VideoDetail} from "./VideoDetail";
import useYouTubeVideos from "../hooks/useYouTubeVideos";

const VideoApp = () => {

    /*Using custom reusable hook.*/
    const [videos, search] = useYouTubeVideos('building');

    const [selectedVideo, setSelectedVideo] = useState(null);

    const onVideoSelect = async (video) => {
        setSelectedVideo(video);
    }

    useEffect(() => {
        setSelectedVideo(videos[0]);
    },[videos]);

    return (
        <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar label="Search for youtube videos" onSubmitSearch={search}></SearchBar>
            Found {videos.length} Videos

            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}/>
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onVideoSelect={setSelectedVideo}></VideoList>
                    </div>
                </div>
            </div>
        </div>
    );
};


/*class VideoApp extends React.Component {

    componentDidMount() {
        this.onSearchSubmit('building');
    }

    state = {videos: [], selectedVideo: null};

    onSearchSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        console.log(response.data.items);
        this.setState(
            {
                videos: response.data.items,
                selectedVideo: response.data.items[0]
            });
    }

    onVideoSelect = async (video) => {
        console.log("video = ", video);
        this.setState({selectedVideo: video});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar label="Video Search" onSubmitSearch={this.onSearchSubmit}></SearchBar>
                Found {this.state.videos.length} Videos

                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}></VideoList>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}*/

export default VideoApp;
