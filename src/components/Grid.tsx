import * as React from 'react'
import styled from '@emotion/styled'

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

interface GridProps {
  className?: string
}

const Grid: React.FC<GridProps> = ({ children, className }) => <StyledGrid className={className}>{children}</StyledGrid>

export default Grid
