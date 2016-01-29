import React, {Component} from 'react';

import footerImage from '../images/footer.jpg';

class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <img className="center-block" src={footerImage} />
      </div>
    );
  }
}

export default Footer;
