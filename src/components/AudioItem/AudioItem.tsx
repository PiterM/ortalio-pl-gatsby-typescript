import * as React from 'react';
import styled from '@emotion/styled';
import { dimensions, transition } from '../../styles/variables';
import AudioItemHeader from './AudioItemHeader';
import AudioItemText from './AudioItemText';

const StyledAudioItem = styled.div`
  line-height: ${dimensions.lineHeight.regular};
  width: ${dimensions.width.headline};
  display: inline-block;
  padding: 0 1% 0 1%;
  vertical-align: top;
  margin-bottom: 50px;
  transition: all ${transition.duration};
`;

const AudioItem: React.FC = () => (
  <StyledAudioItem>
    <AudioItemHeader />
    <AudioItemText />
  </StyledAudioItem>
);

export default AudioItem;
