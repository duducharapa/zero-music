import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from '../components/navbar';
import Apresentation from '../components/apresentation';
import Footer from '../components/footer';

class Music extends Component {
     render() {
          return (
               <div>
                    <Navbar location={ this.props.location.pathname } />
                    <Apresentation />

                    <Footer />
               </div>
          )
     }
}

export default withRouter(Music);