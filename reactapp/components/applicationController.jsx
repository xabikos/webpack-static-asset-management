import React, {Component} from 'react';

import ApiService from '../apiService.js';
import MainContent from './mainContent.jsx';

class ApplicationController extends Component {
  constructor(props) {
    super(props);
    
    this.state = {repositories: []}; 
    this.handleSearch = this.handleSearch.bind(this);
  }
  
  handleSearch(search, language) {
    ApiService.searchRepositories(search, language).then(data => {
      this.setState({repositories: data.items});    
    });
  }
  
  render() {
    return (
      <MainContent
        search={this.handleSearch}
        repositories={this.state.repositories}
      />
    );
  }
}

export default ApplicationController;
