import React from "react";
import '../styles/Image.css';

export default function Picture(props) {
  return (
    <div className='image'>
      <img src={props.image} alt=''/>
    </div>
  );
}
