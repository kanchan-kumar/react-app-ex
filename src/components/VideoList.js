import React from 'react';
import {VideoItem} from "./VideoItem";

export const VideoList = ({videos, onVideoSelect}) => {

    const renderContent = videos.map((video) => {
        return <VideoItem key={video.id.videoId} onVideoSelect={onVideoSelect} video={video}/>
    });

    return (<div className="ui relaxed divided list">{renderContent}</div>);
}
