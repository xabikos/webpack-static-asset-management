import React, {Component, PropTypes} from 'react';

class RepositoryItem extends Component {
  render() {
    return (
      <div className="card card-block text-xs-center" onClick={() => this.props.onSelect(this.props.id)}>
        <h4 className="card-title">{this.props.full_name}</h4>
        <h6 className="card-subtitle">Score: <strong>{this.props.score}</strong></h6>
        <p className="card-text">{this.props.description}</p>
        <a href={this.props.html_url} target="_blank" className="card-link">Github repo</a>        
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
  onSelect: PropTypes.func.isRequired,
}

export default RepositoryItem;
