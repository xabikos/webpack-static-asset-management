import React, {Component, PropTypes} from 'react';

class RepositoryDetails extends Component {
  render() {
    if (!this.props.id) {
      return (
        <p>
          Please select a repository to view the details
        </p>
      );
    }
    return (
      <div>
        <p><strong>Full name:</strong> {this.props.full_name}</p>
        <p><strong>Description:</strong> {this.props.description}</p>
        <p><strong>Created at:</strong> {this.props.created_at}</p>
        <p><strong>Stars:</strong> {this.props.stargazers_count}</p>
        <p><strong>Watchers:</strong> {this.props.watchers_count}</p>
      </div>
    );
  }
}

RepositoryDetails.propTypes = {
  id: PropTypes.number,
  full_name: PropTypes.string,
  description: PropTypes.string,
  created_at: PropTypes.string,
  stargazers_count: PropTypes.number,
  watchers_count: PropTypes.number,
};

export default RepositoryDetails;
