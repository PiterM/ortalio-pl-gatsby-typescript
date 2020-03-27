import * as React from 'react'

import AudioItem from '../components/AudioItem/AudioItem';
import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <AudioItem />
        <AudioItem />
        <AudioItem />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
