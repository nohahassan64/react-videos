import React from 'react'
import VideoItem from './VideoItem'

const VideoList = ({videos , onSelectedVideo}) => {
    const renderVideoItem = videos.map( (video , index) => {
        return <VideoItem key={index} video={video} onSelectedVideo={onSelectedVideo}/>
    })
    return (
        <div className='ui relaxed divided list'>
            {renderVideoItem}
        </div>
    )
}

export default VideoList
