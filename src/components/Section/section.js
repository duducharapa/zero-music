import React from 'react';
import PropTypes from 'prop-types';

export function Section({ title = "", icon, children }){
     return (
          <section>
               <div className="section-box">
                    <i className={`section-icon fas fa-${icon}`} />
                    <h1 className="section-title"> { title } </h1>
               </div>

               { children }
          </section>
     )
}

Section.propTypes = {
     title: PropTypes.string,
     icon: PropTypes.string
}