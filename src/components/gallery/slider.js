import React, {Component} from 'react';
import employees from '../../img/employees/employess';
import './slider.css'

export class Slider extends Component{
    constructor(props) {
        super(props);
        this.state = {  
              firstShown:0
        }
        this.slideLeft=this.slideLeft.bind(this)
        this.slideRight=this.slideRight.bind(this)
      }
      slideLeft(){
        this.setState({firstShown:++this.state.firstShown})
        }
        slideRight(){
        this.setState({firstShown:--this.state.firstShown})
        }
      render() {
        return (
          <div className='Slider_container'>
              <div className='Slider_content'>
                <button className='Slider_button'
                 disabled={this.state.firstShown===0?true:false}
                 onClick={this.slideRight}
                 > l </button>
                    <img onClick={()=>this.props.onImageChosed(this.state.firstShown)} className='Slider_person_image'src={employees[this.state.firstShown]} /> 
                    <img onClick={()=>this.props.onImageChosed(this.state.firstShown+1)} className='Slider_person_image'src={employees[this.state.firstShown+1]} /> 
                    <img onClick={()=>this.props.onImageChosed(this.state.firstShown+2)} className='Slider_person_image'src={employees[this.state.firstShown+2]} /> 
                    <img onClick={()=>this.props.onImageChosed(this.state.firstShown+3)} className='Slider_person_image'src={employees[this.state.firstShown+3]} /> 
                    <img onClick={()=>this.props.onImageChosed(this.state.firstShown+4)} className='Slider_person_image'src={employees[this.state.firstShown+4]} /> 
                    <img onClick={()=>this.props.onImageChosed(this.state.firstShown+5)} className='Slider_person_image'src={employees[this.state.firstShown+5]} /> 
                <button className='Slider_button' 
                disabled={this.state.firstShown+6===9?true:false}
                onClick={this.slideLeft}
                > p </button> 
                </div>                 
          </div>
        );
      }
    }
 export default Slider;