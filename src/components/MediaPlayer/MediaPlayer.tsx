import * as React from 'react'
import ReactPlayer from 'react-player';
import styled from '@emotion/styled'

const StyledMediaPlayer = styled.div`
  margin: 5px;
  width: 100%;
  height: 100%;
  max-width: 470px;
  max-height: 470px;
`

interface MediaPlayerProps {
  url: string;
}

const MediaPlayer: React.FC<MediaPlayerProps> = ({ url }) => (
  <StyledMediaPlayer>
    <ReactPlayer
      url={url}
      width="30vw"
      height="30vw"
      playing={false}
    />
  </StyledMediaPlayer>
);

export default MediaPlayer;
