import React, {Component, PropTypes} from 'react';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  
  handleClick() {
    const repositoryValue = this.refs.repository.value;
    if (repositoryValue) {
      this.props.search(repositoryValue);
    }
  }
  
  render() {
    return (
      <div>
        <fieldset className="form-group">
          <label htmlFor="repositoryName">Enter a repository name to get statistics</label>
          <input
            type="text"
            ref="repository"
            className="form-control"
            id="repositoryName"
            placeholder="Enter repository name"
          />        
        </fieldset>
        <fieldset className="form-group">
          <label htmlFor="language">Optianally select a language</label>
          <select className="form-control" id="language">
            <option>JavaScript</option>
            <option>C#</option>
            <option>Python</option>
            <option>Ruby</option>
            <option>Python</option>
          </select>
        </fieldset>
        <button className="btn btn-primary" onClick={this.handleClick}>Search</button>
      </div>
    );
  }
}

SearchForm.propTypes = {
  search: PropTypes.func.isRequired,
};

export default SearchForm;
