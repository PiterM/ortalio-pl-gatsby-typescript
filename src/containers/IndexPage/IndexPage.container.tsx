import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../../store/StoreState';
import { fetchAllMediaDataInitAction } from './IndexPage.actions';

export interface IndexPageDispatchProps {
  fetchAllMediaData: () => void;
}

export class IndexPageContainer extends React.PureComponent<IndexPageDispatchProps> {
  public componentWillMount() {
    this.props.fetchAllMediaData();
  }

  render() {
    return <p>Cośtam</p>;
  }
}

const mapDispatchToProps = (dispatch: Dispatch<StoreState>) => ({
  fetchAllMediaData: () => dispatch(fetchAllMediaDataInitAction())
});

export default connect<null, IndexPageDispatchProps>(
  null, mapDispatchToProps
)(IndexPageContainer);
