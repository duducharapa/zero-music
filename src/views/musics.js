import React, { Component } from 'react'

import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Apresentation from '../components/apresentation';

export default class Musics extends Component {
     render() {
          return (
               <div>
                    <Navbar />
                    <Apresentation />

                    <Footer />
               </div>
          )
     }
}
