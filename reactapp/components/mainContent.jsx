import React, {Component} from 'react';

import SearchForm from './searchForm.jsx';
import RepositoriesList from './repositoriesList.jsx';
import RepositoryDetails from './repositoryDetails.jsx';

class MainContent extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <SearchForm />
          </div>
          <div className="col-md-5">
            <RepositoriesList />
          </div>
          <div className="col-md-4">
            <RepositoryDetails />
          </div>
        </div>
      </div>
    );
  }
}

export default MainContent;
