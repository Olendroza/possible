import React, {Component} from 'react';
import './largeImage.css'


function LargeImage(props) {

    return(
        <div style={{backgroundImage: 'url('+props.person.image+')',
                                                      backgroundRepeat: 'no-repeat' ,
                                                      height:230,
                                                      width:470,
                                                      display:'flex',
                                                      alignItems:'flex-end'}}
                                                      >
            <div className='LargeImage_info_container' >
                <p className='LargeImage_info_name'> {props.person.name} </p>
                <p className='LargeImage_info_desc'> {props.person.desc} </p>
            </div>
        </div>
    )
}

export default LargeImage;