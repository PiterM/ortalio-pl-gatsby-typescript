import * as React from 'react';
import styled from '@emotion/styled';
import { colors, dimensions, transition } from '../../styles/variables';

const StyledAudioItemPlayer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${dimensions.audioItemPlayer.height}px;
  background-color: ${colors.newspaperPaper};
  transition: all ${transition.duration};
`;

interface AudioItemPlayerProps {

}

const AudioItemPlayer: React.FC<AudioItemPlayerProps> = () => (
  <StyledAudioItemPlayer></StyledAudioItemPlayer>
);

export default AudioItemPlayer;
