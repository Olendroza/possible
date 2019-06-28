import React, {Component} from 'react';
import employees from '../../img/employees/employess';
import LargImage from './largImage';



export class Gallery extends Component{
    constructor(props) {
        super(props);
        this.state = {    
        }
      }
      render() {
        return (
          <div className='gallery_container'>
                <LargImage person={{image:employees[0],
            name:'piotr',
            desc: 'pracownik'}} />
          </div>
        );
      }
    }

