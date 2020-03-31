import * as React from 'react'
import Page from '../components/Page'
import IndexPageContainer from '../containers/IndexPage/IndexPage.container';
import IndexLayout from '../layouts'

export default class IndexPage extends React.Component {
  render() {
    return (
      <IndexLayout
        intro={'asdf'}
        description={'asdf'}
      >
        <Page>
          <IndexPageContainer />
        </Page>
      </IndexLayout>
    );
  }
}
