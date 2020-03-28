import * as React from 'react';
import styled from '@emotion/styled';
import { colors, dimensions, transition } from '../../styles/variables';
import AudioItemHeader from './AudioItemHeader';
import AudioItemText from './AudioItemText';

const StyledAudioItem = styled.div`
  line-height: ${dimensions.lineHeight.regular};
  width: ${dimensions.width.headline};
  padding: 0 1% 0 1%;
  margin-bottom: 50px;
  transition: all ${transition.duration};
  flex: 0 1 20%;

  & + & {
    border-left: 1px solid ${colors.newspaperText};
  }
`;

interface AudioItemProps {
  index: number;
  title: string;
  description: string;
  html: string;
}

const AudioItem: React.FC<AudioItemProps> = ({ index, title, description, html }) => (
  <StyledAudioItem>
    <AudioItemHeader
      index={index}
      title={title}
      description={description}
    />
    <AudioItemText
      html={html}
    />
  </StyledAudioItem>
);

export default AudioItem;
