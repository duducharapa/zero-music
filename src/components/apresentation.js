import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default class Apresentation extends Component {
     
     state = {
          music: '',
          redirect: false
     }

     setMusic = event => this.setState({ music: event.target.value });
     
     handleSubmit = event => {
          event.preventDefault();

          this.setState({ redirect: true });
     }

     render() {
          const { music, redirect } = this.state;

          return (
               <div className="apresentation">
                    <div>
                         <h1 className="apresentation-name"> Zero Music </h1>
                         <h1 className="apresentation-subname">
                              A mágica da música está aqui!
                         </h1>
                    </div>

                    <form 
                         className="apresentation-form"
                         onSubmit={ this.handleSubmit }
                    >
                         <input
                              onChange={ this.setMusic } 
                              placeholder="Qual soneto buscas?" 
                              className="apresentation-input"
                              value={ music }    
                         />
                    </form>

                    { 
                         redirect ? 
                         <Redirect to={{ pathname: '/musics', state: { filter: music } }} /> 
                         : null
                    }
               </div>
          )
     }
}
