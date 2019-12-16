import React, { Component } from 'react'

export default class Apresentation extends Component {
     render() {
          return (
               <div className="apresentation">
                    <div>
                         <h1 className="apresentation-name"> Zero Music </h1>
                         <h1 className="apresentation-subname">
                              A mágica da música está aqui!
                         </h1>
                    </div>

                    <form className="apresentation-form">
                         <input 
                              placeholder="Qual soneto buscas?" 
                              className="apresentation-input"     
                         />
                    </form>
               </div>
          )
     }
}
