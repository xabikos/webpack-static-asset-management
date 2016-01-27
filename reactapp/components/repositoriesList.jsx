import React, {Component, PropTypes} from 'react';

import RepositoryItem from './repositoryItem';

class RepositoriesList extends Component {
  render() {
     
    return (
      <div id="repositoriesList">
        {this.props.repositories.map(rep=> {
          return <RepositoryItem key={rep.id} {...rep} />
        })}
      </div>
    );
  }
}

RepositoriesList.propTypes = {
  repositories: PropTypes.array.isRequired,
};

export default RepositoriesList;
