import * as React from 'react';
import styled from '@emotion/styled';
import { fonts } from '../../styles/variables';

const StyledAudioItemHead = styled.div`
  text-align: center;
  position: relative;
`;

const StyledAudioItemHeadline = styled.div`
  text-align: center;
  line-height: normal;
  font-family: ${fonts.headline};
  display: block;
  margin: 0 auto;
`;

const StyledAudioItemSubHeadlineTop = styled.div`
  ${StyledAudioItemHeadline};
  font-weight: 400;
  font-style: italic;
  font-size: 36px;
  box-sizing: border-box;
  padding: 10px 0 10px 0;
`;

const StyledAudioItemSubHeadlineBottom = styled.div`
  ${StyledAudioItemHeadline};
  font-weight: 700;
  font-size: 12px;
  box-sizing: border-box;
  padding: 10px 0 10px 0;

  &:before {
    border-top: 1px solid #2f2f2f;
    content: '';
    width: 100px;
    height: 7px;
    display: block;
    margin: 0 auto;
  }

  &:after {
    border-bottom: 1px solid #2f2f2f;
    content: '';
    width: 100px;
    height: 10px;
    display: block;
    margin: 0 auto;
  }
`;

const AudioItemHeader: React.FC = () => (
  <StyledAudioItemHead>
    <StyledAudioItemHeadline>
      <StyledAudioItemSubHeadlineTop>
        When darkness overspreads my eyes
      </StyledAudioItemSubHeadlineTop>
      <StyledAudioItemSubHeadlineBottom>
        by JOHANN WOLFGANG VON GOETHE
      </StyledAudioItemSubHeadlineBottom>
    </StyledAudioItemHeadline>
  </StyledAudioItemHead>
);

export default AudioItemHeader;
