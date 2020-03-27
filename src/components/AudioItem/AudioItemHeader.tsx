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
  letter-spacing: 1px;

  &:before {
    border-top: 1px solid #2f2f2f;
    content: '';
    width: 200px;
    height: 7px;
    display: block;
    margin: 0 auto;
  }

  &:after {
    border-bottom: 1px solid #2f2f2f;
    content: '';
    width: 200px;
    height: 10px;
    display: block;
    margin: 0 auto;
  }
`;

const AudioItemHeader: React.FC = () => (
  <StyledAudioItemHead>
    <StyledAudioItemHeadline>
      <StyledAudioItemSubHeadlineTop>
        Wszystkie kredyty Edyty
      </StyledAudioItemSubHeadlineTop>
      <StyledAudioItemSubHeadlineBottom>
        muzyka: RADOSŁAW DUTKIEWICZ<br />I PIOTR MARKIEWICZ<br />
        słowa, wokal: PIOTR MARKIEWICZ<br />
        klip: JERZY ZBIGNIEW MORYTO
      </StyledAudioItemSubHeadlineBottom>
    </StyledAudioItemHeadline>
  </StyledAudioItemHead>
);

export default AudioItemHeader;
