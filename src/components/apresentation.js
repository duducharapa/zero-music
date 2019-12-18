import React, { Component } from 'react';

export default class Apresentation extends Component {
     
     state = {
          music: ''
     }

     setMusic = event => this.setState({ music: event.target.value });
     
     render() {
          const { music } = this.state;

          return (
               <div className="apresentation">
                    <div>
                         <h1 className="apresentation-name"> Zero Music </h1>
                         <h1 className="apresentation-subname">
                              A mágica da música está aqui!
                         </h1>
                    </div>

                    <form 
                         className="apresentation-form" method="GET" 
                         action={ `/musics/${ music }` }
                    >
                         <input
                              onChange={ this.setMusic } 
                              placeholder="Qual soneto buscas?" 
                              className="apresentation-input"
                              value={ music }    
                         />
                    </form>
               </div>
          )
     }
}
