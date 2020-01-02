import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

export function Apresentation({ setFilter,location }){

     // State
     const [ music, setMusic ] = useState("");
     const [ redirect, setRedirect ] = useState(false);

     // Handle functions
     const handleChange = event => {
          setMusic(event.target.value)
     }

     const handleSubmit = event => {
          event.preventDefault();

          // Conversa com o form caso o location atual seja /musics
          if(location.match('/musics')){
               setFilter(music);
               setMusic('');

               return;
          }

          setRedirect(true);
     } 

     return (
          <div className="apresentation">
               <div>
                    <h1 className="apresentation-name"> Zero Music </h1>
                    <h1 className="apresentation-subname">
                         A mágica da música está aqui!
                    </h1>
               </div>

               <form 
                    className="apresentation-form" onSubmit={ handleSubmit }
               >
                    <input
                         onChange={ handleChange } placeholder="Qual soneto buscas?" 
                         className="apresentation-input" value={ music }
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

Apresentation.propTypes = {
     location: PropTypes.string.isRequired,
     setFilter: PropTypes.func
}