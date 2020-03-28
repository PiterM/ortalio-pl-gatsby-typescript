import * as React from 'react'
import styled from '@emotion/styled'

const StyledPage = styled.div`
  display: flex;
  flex-wrap: wrap;
`

interface PageProps {
  className?: string
}

const Page: React.FC<PageProps> = ({ children, className }) => <StyledPage className={className}>{children}</StyledPage>

export default Page
