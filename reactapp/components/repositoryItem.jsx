import React, {Component, PropTypes} from 'react';

class RepositoryItem extends Component {
  render() {
    return (
      <div className="card card-block text-xs-center">
        <h4 className="card-title">{this.props.full_name}</h4>
        <h6 className="card-subtitle">Score: {this.props.score}</h6>
        <p className="card-text">{this.props.description}</p>
        <a href={this.props.html_url} className="card-link">Github repo</a>        
      </div>
    );
  }
}

RepositoryItem.propTypes = {
  id: PropTypes.number.isRequired,
  full_name: PropTypes.string.isRequired,
  description: PropTypes.string,
  html_url: PropTypes.string.isRequired,
  score: PropTypes.number,
}

export default RepositoryItem;
