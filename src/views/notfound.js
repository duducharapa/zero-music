import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Apresentation from '../components/Apresentation';
import Footer from '../components/Footer';
import Section from '../components/section';

const notfoundPath = require('../images/notfound.gif');

class NotFound extends Component {

    state = {
        clicked: false
    }

    handleClick = () => this.setState({ clicked: true });

    render(){
        const { pathname } = this.props.location,
            { clicked } = this.state;

        return(
            <div>
                <Navbar location={ pathname } />
                <Apresentation location={ pathname } />

                <Section title="Magia desconhecida!" icon="times">
                    <div className="notfound">
                        <h1 className="notfound-title"> 
                            Oops! Parece que você tentou utilizar uma 
                            página inexistente!
                        </h1>

                        <img 
                            src={ notfoundPath } alt="Not found" 
                            className="notfound-gif"
                        />

                        <button className="notfound-btn" onClick={ this.handleClick }>
                            Voltar a página inicial
                        </button>
                    
                        { clicked ? <Redirect to="/" /> : null }
                    </div>
                </Section>

                <Footer />
            </div>
        );
    }

}

export default withRouter(NotFound);