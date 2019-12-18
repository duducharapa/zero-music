import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Apresentation from '../components/apresentation';

class Musics extends Component {
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

export default withRouter(Musics);