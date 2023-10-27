import { styled } from '@mui/material'
import React from 'react'

interface PlayerProps {
    // ...
}

const PlayerComponent: React.FC<PlayerProps> = () => {
    return (
        <Player>
            <div className='video-wrapper'>
                <video id="rtmpPlayer" controls>
                    <source src="rtmp://tu-url-del-servidor-tu-stream" type="video/rtmp" />
                    Tu navegador no admite la reproducción de video RTMP.
                </video>
            </div>
        </Player>
    )
}

export default PlayerComponent

const Player = styled('div')`
    width: calc(100% - 10px);
    max-width: 640px; /* Ancho máximo del contenedor del reproductor */
    border-radius:10px;
    overflow: hidden;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    position: relative;
    margin-left:50%;
    transform: translateX(-50%);
    background-color:#000;
 
    .video-wrapper{
        position: relative;
        width: 100%;
        padding-bottom: 56.25%; /* Misma proporción de aspecto para el video */
        margin:auto;
    
    }

    video{
        position: absolute;
        width: 100%;
        height: 100%;
    }

`
