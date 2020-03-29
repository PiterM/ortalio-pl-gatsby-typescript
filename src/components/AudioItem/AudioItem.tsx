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
  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;
  transition: all ${transition.duration};
  flex: 0 1 20%;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently
                        supported by Chrome, Opera and Firefox */

  &:hover {
    background-color ${colors.newspaperPaperHovered};
    border-top: 1px solid ${colors.newspaperText};
    border-bottom: 1px solid ${colors.newspaperText};
  }

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
