import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import Apresentation from '../../components/Apresentation';
import Footer from '../../components/Footer';
import Section from '../../components/Section';
import Button from '../../components/Button';

const notfoundPath = require('../../images/notfound.gif');

export function NotFound({ location }){
    const { pathname } = location;

    // States
    const [ clicked, setClick ] = useState(false);

    // Handle functions
    const handleClick = () => setClick(true);

    return(
        <div>
            <Navbar location={ pathname } />
            <Apresentation location={ pathname } />

            <Section title="Magia desconhecida!" icon="times">
                <div className="notfound">
                    <h1 className="notfound-title"> 
                        Oops! Parece que você tentou utilizar uma página inexistente!
                    </h1>

                    <img 
                        src={ notfoundPath } alt="Not found" className="notfound-gif"
                    />
                    
                    <Button 
                        onClick={ handleClick } text="Voltar a página inicial"
                    />
                
                    { clicked ? <Redirect to="/" /> : null }
                </div>
            </Section>

            <Footer />
        </div>
    );
}
