import * as React from 'react';
import styled from '@emotion/styled';

const StyledAudioItemText = styled.div`
  margin-top: 20px;
  text-align: center;
`;

interface AudioItemTextProps {
  html: string;
}

const AudioItemText: React.FC<AudioItemTextProps> = ({ html }) => (
  <StyledAudioItemText>
    <div dangerouslySetInnerHTML={{ __html: html }} />
  </StyledAudioItemText>
);

export default AudioItemText;
