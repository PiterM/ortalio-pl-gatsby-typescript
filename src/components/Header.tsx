import * as React from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { colors, fonts } from '../styles/variables';

const StyledHeaderDiv = styled.div`
  text-align: center;
  position: relative;
  padding: 20px;
`

const HeaderWrapperDiv = styled.div``;

const StyledHeaderWeatherForcastBox = styled.div`
  position: relative;
  width: 18%;
  left: 10px;
  padding: 10px 15px 10px 15px;
  line-height: 20px;
  display: inline-block;
  margin: 0 50px 20px -360px;
`;

const StyledHeaderTitle = styled.header`
  font-family: ${fonts.headline}, serif;
  font-weight: 900;
  font-size: 80px;
  text-transform: uppercase;
  display: inline-block;
  line-height: 72px;
  margin-bottom: 20px;
  letter-spacing: 6px;
`;

const StyledHomePageLink = styled(Link)`
  color: ${colors.newspaperText};
  outline: none;
`;

const StyledSubHeader = styled.div`
  text-transform: uppercase;
  border-bottom: 2px solid #2f2f2f;
  border-top: 2px solid #2f2f2f;
  padding: 12px 0 12px 0;
`;

interface HeaderProps {
  title: string
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <StyledHeaderDiv>
    <HeaderWrapperDiv>
      <StyledHeaderWeatherForcastBox>
        Weatherforcast for the next 24 hours: Plenty of Sunshine<br />
        Wind: 7km/h SSE; Ther: 21°C; Hum: 82%
      </StyledHeaderWeatherForcastBox>
      <StyledHeaderTitle>
        <StyledHomePageLink to="/">{title}</StyledHomePageLink>
      </StyledHeaderTitle>
    </HeaderWrapperDiv>
    <StyledSubHeader>
      York, MA - Thursday August 30, 1978 - Seven Pages
    </StyledSubHeader>
  </StyledHeaderDiv>
)

export default Header
