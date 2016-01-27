import React, {Component, PropTypes} from 'react';

import SearchForm from './searchForm';
import RepositoriesList from './repositoriesList';
import RepositoryDetails from './repositoryDetails';

class MainContent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <SearchForm search={this.props.search} />
          </div>
          <div className="col-md-5">
            <RepositoriesList repositories={this.props.repositories} />
          </div>
          <div className="col-md-4">
            <RepositoryDetails />
          </div>
        </div>
      </div>
    );
  }
}

MainContent.propTypes = {
  search: PropTypes.func.isRequired,
  repositories: PropTypes.array.isRequired,
};

export default MainContent;
