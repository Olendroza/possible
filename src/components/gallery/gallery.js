import React, {Component} from 'react';
import employees from '../../img/employees/employess';
import LargImage from './largImage';
import Slider from './slider'



export class Gallery extends Component{
    constructor(props) {
        super(props);
        this.state = {
            enlargedImage:0   
        }
        this.enlargeImage=this.enlargeImage.bind(this)
        } 
        enlargeImage(n){
            this.setState({enlargedImage:n})
      }
      render() {
        return (
          <div className='gallery_container'>
                <LargImage person={{image:employees[this.state.enlargedImage],
                            name:'piotr',
                            desc: 'pracownik'}} />
                <Slider onImageChosed={this.enlargeImage}/>

          </div>
        );
      }
    }

