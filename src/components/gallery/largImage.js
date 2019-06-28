import React, {Component} from 'react';


function LargeImage(props) {

    return(
        <div>
            <img src={props.person.image} alt='no image'/>
            <p> {props.person.name}</p>
            <p> {props.person.desc} </p>
        </div>
    )
}

export default LargeImage;