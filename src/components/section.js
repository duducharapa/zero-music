import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Section extends Component {
     
     static defaultProps = {
          title: ''
     }
     
     render() {
          const { icon, title } = this.props;

          return (
               <section>
                    <div className="section-box">
                         <i className={`section-icon fas fa-${icon}`} />
                         <h1 className="section-title"> { title } </h1>
                    </div>

                    { this.props.children }
               </section>
          )
     }
}

Section.propTypes = {
     title: PropTypes.string,
     icon: PropTypes.string
}