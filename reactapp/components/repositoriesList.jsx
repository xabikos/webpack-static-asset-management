import React, {Component, PropTypes} from 'react';

import RepositoryItem from './repositoryItem';

class RepositoriesList extends Component {
  render() {
    return (
      <div id="repositoriesList">
        {this.props.repositories.map(rep =>
          <RepositoryItem key={rep.id} onSelect={this.props.selectRepository} {...rep} />
        )}
      </div>
    );
  }
}

RepositoriesList.propTypes = {
  repositories: PropTypes.array.isRequired,
  selectRepository: PropTypes.func.isRequired,
};

export default RepositoriesList;
