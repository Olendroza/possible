import React, {Component} from 'react';
import employees from '../../img/employees/employess';
import LargImage from './largImage';
import Slider from './slider'
import employeesInfo from './employeesInfo'


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
                            name:employeesInfo[this.state.enlargedImage].name,
                            desc:employeesInfo[this.state.enlargedImage].desc}} />
                <Slider onImageChosed={this.enlargeImage}/>

          </div>
        );
      }
    }

