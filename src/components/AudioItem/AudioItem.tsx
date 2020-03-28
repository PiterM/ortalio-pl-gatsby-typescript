import * as React from 'react';
import styled from '@emotion/styled';
import { colors, dimensions, transition } from '../../styles/variables';
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

  & + & {
    border-left: 1px solid ${colors.newspaperText};
  }
`;

const AudioItem: React.FC = ({ title, description, html }) => (
  <StyledAudioItem>
    <AudioItemHeader
      title={title}
      description={description}
    />
    <AudioItemText
      html={html}
    />
  </StyledAudioItem>
);

export default AudioItem;
