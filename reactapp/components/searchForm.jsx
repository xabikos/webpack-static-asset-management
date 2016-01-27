import React, {Component} from 'react';

class SearchForm extends Component {
  render() {
    return (
      <div>
        <fieldset className="form-group">
          <label htmlFor="repositoryName">Enter a repository name to get statistics</label>
          <input
            type="text"
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
        <button type="submit" className="btn btn-primary">Search</button>
      </div>
    );
  }
}

export default SearchForm;
