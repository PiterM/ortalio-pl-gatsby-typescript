import * as React from 'react';
import styled from '@emotion/styled';
import { colors, dimensions, fonts } from '../../styles/variables';

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
  font-weight: ${dimensions.fontWeight.semiBold};
  font-style: italic;
  font-size: ${dimensions.fontSize.title}px;
  box-sizing: border-box;
  padding: 10px 0 10px 0;
`;

const StyledAudioItemSubHeadlineBottom = styled.div`
  ${StyledAudioItemHeadline};
  font-weight: ${dimensions.fontWeight.bold};
  font-size: ${dimensions.fontSize.small}px;
  box-sizing: border-box;
  padding: 10px 0 10px 0;
  letter-spacing: 1px;

  &:before {
    border-top: 1px solid ${colors.newspaperText};
    content: '';
    width: 200px;
    height: 7px;
    display: block;
    margin: 0 auto;
  }

  &:after {
    border-bottom: 1px solid ${colors.newspaperText};
    content: '';
    width: 200px;
    height: 10px;
    display: block;
    margin: 0 auto;
  }
`;

const AudioItemHeader: React.FC = ({ title, description }) => (
  <StyledAudioItemHead>
    <StyledAudioItemHeadline>
      <StyledAudioItemSubHeadlineTop>
        {title}
      </StyledAudioItemSubHeadlineTop>
      <StyledAudioItemSubHeadlineBottom>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </StyledAudioItemSubHeadlineBottom>
    </StyledAudioItemHeadline>
  </StyledAudioItemHead>
);

export default AudioItemHeader;
